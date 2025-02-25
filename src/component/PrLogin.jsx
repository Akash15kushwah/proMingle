// import {
//   Avatar,
//   Box,
//   Button,
//   Container,
//   createTheme,
//   TextField,
//   ThemeProvider,
//   Typography,
// } from "@mui/material";
// import Grid from "@mui/material/Grid2";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// import register_img from "../assets/image1.png";
// import axios from "axios";
// import { userLogin } from "./services/Api";

// function PrLogin() {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState();
//   const [password, setPassword] = useState();

//  const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const res = await userLogin(username)
//     console.log(res)
//     if (res.password === password) {
//       navigate('/home')
      
//     }
    
//   } catch (error) {
    
//   }

//  }

//   const boxstyle = {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: {lg: "75%",md: "75%",sm: "50%",sx: "50%"},
//     height: "auto",
//     backgroundColor: "#fff",
//     borderRadius: {lg: '0px',md: "0px", sm: '10px',xs: "10px" },
//     boxShadow: 24,
//   };
 
//   const imgStyle = {
//     height: "100%",
//     width: "100%",
//     backgroundSize: "cover",
//     padding: 4,
//   };

//   const darkTheme = createTheme({
//     palette: {
//       primary: {
//         main: "#2196f3",
//       },
//       secondary: {
//         main: "#f44336",
//       },
//       mode: "dark",
//     },
//   });

//   return (
//     <Box sx={boxstyle}>
//       <Grid container>
//         <Grid sx={{ display: { xs: "none", sm: "none", md: "block" }, }} item="true" size={{lg: 6, md: 6, sm: 12}}>
//           <img style={imgStyle} src={register_img} alt="Register" />
//         </Grid>
//         <Grid item='true' size={{lg: 6, md: 6, sm: 12}}>
//           <Box
//             sx={{
//               textAlign: "center",
//               width: { lg: "37.5vw",md: '37.5vw', sm: "68.5vh", xs: "75vw" },
//               height: { lg: "65vh",md: '37vw',sm: "auto", xs: "auto" },
//               backgroundColor: "#3b33d5",
//               borderRadius: {lg: '0px',md: "0px", sm: '10px',xs: "10px" },
//               overflowX: "hidden",
//               py: 2
//             }}
//           >
//             <ThemeProvider theme={darkTheme}>
//               <Container>
//                 <Box height={35} />
//                 <Avatar
//                   sx={{
//                     ml: "46%",
//                     fontSize: "100px",
//                     mb: "5px",
//                     color: "black",
//                     bgcolor: "#fff",
//                   }}
//                 >
//                   <LockOutlinedIcon />
//                 </Avatar>
//                 <Typography variant="h4" sx={{ color: "#fff", mb: 2 }}>
//                   Sign in
//                 </Typography>
//                 <form onSubmit={handleSubmit}>
//                   <Box sx={{px: 5}}>
//                   <TextField
//                     fullWidth
//                     size="small"
//                     label="Username"
//                     type="text"
//                     sx={{ mb: 2 }}
//                     onChange={(e) => setUsername(e.target.value)}

//                   />
//                   <TextField
//                     fullWidth
//                     size="small"
//                     label="Password"
//                     type="password"
//                     sx={{ mb: 2 }}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   <Button
//                     type="submit"
//                     size="small"
//                     variant="contained"
//                     color="primary"
//                     sx={{ mt: 2, width: "100%",  }}
//                   >
//                     Login
//                   </Button>
//                   </Box>
//                   <Typography
//                     sx={{
//                       mt: 2,
//                       fontSize: "1rem",
//                       color: "#fff",
//                       cursor: "pointer",
//                     }}
//                     onClick={() => navigate("/register")}
//                   >
//                     Not registered yet?<span  style={{ color: "#beb4fb", cursor: "pointer" }}> Create An Account</span>
//                   </Typography>
//                 </form>
//               </Container>
//             </ThemeProvider>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

// export default PrLogin;
