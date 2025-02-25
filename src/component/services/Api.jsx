import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


//  const api = axios.create({
//     baseURL: "http://localhost:5000",
//     headers: {
//       "Content-Type": "application/json",
//     },
//  });

 const api = axios.create({
  baseURL: "https://7ef5-2401-4900-1c09-9d86-3142-46b1-256b-b1b0.ngrok-free.app",
  headers: {
    "Content-Type": "application/json",
  },
});


 
 export const getPost = async () => {
   try {
      // debugger
     const response = await api.get("/Post/all");
     console.log("Fetched posts:", response.data); // Log the data received
     return response;
   } catch (error) {
     console.error("Error fetching posts:", error);
     throw error; // Rethrow to handle it in the calling function
   }
 };
    

   export const deletePost = (id) => {
      return api.delete(`/posts/${String(id)}`)
   };

   // export const postData = (post) => {
   //    return api.post("/posts", post)
   // };
   export const postData = (post) => {
      return api.post("/posts", post)
   };
   
  //  export const userLogin = async (username) => {
  //   try {
  //     const response = await api.get("/users", {
  //       params: {username},
  //     });
  //     if (response.data.length > 0) {
  //       console.log(" user found",response.data[0])
  //       return response.data[0]
        
  //     }else {
  //       return null
  //     }
  //   } catch (error) {
  //     console.log("Error logging user:", error)
  //     throw error
      
  //   }
  //  }

  export const userLogin = async (username, password) => {
    try {
        // POST request with payload in the body (safer approach)
        const response = await api.post("/User/login", { username, password });
        
        if (response.data) {
            console.log("User logged in:", response.data);
            localStorage.setItem('token', response.data.accessToken); // Agar token milta hai toh store karo
            return response.data;
        } else {
            console.warn("No data received from API.");
            return null;
        }
    } catch (error) {
        console.error("Error logging user:", error.response ? error.response.data : error.message);
        throw error;
    }
};

export const userData = async (user) => {
  try {
      const response = await api.post("/User/add", user);
      console.log("User added successfully:", response.data);
     
      toast.success("User registered successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

      
  } catch (error) {
      console.error("Error adding user:", error.response?.data || error.message);
      // alert(error.response?.data.message)
      throw error;
  }
};

    
  //  export const userLogin = async (username) => {
  //   try {
  //     const response = await api.get("/users", {
  //       params: { username },
  //     });

  //     if (response.data.length > 0) {
  //       console.log("User found:", response.data[0]);
  //       return response.data[0];
  //     } else {
  //       console.warn("User not found");
  //       return null;
  //     }
  //   } catch (error) {
  //     console.error("Error logging in user:", error);
  //     throw error;
  //   }
  // };
  

   export const updateLikeCount = async (id, newLikeCount) => {
      return await axios.patch(`${API_URL}/posts/${id}`, { likes: newLikeCount });
    };


   export const checkUser = async (field, value) => {
      try {
        const response = await api.post('/checkUsers', { field, value });
        console.log("API Response:", response.data);
    
      
        if (response.data && Object.keys(response.data).length > 0) {
          return { exists: true, message: `${field} already exists` };
        }
    
        return { exists: false, message: "User does not exist" };
      } catch (error) {
        console.error(
          "Error checking user:",
          error.response ? error.response.data : error.message
        );
        return { exists: false, message: "Network issue, please try again" };
      }
    };

   export const updateData = (id, post) => {
      return api.put(`/posts/${id}`, post)
   }