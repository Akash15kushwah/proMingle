import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { postData, updateData } from "../services/Api";
import { TextField, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 10,
  p: 2,
};

export default function CreatePost({
  open,
  setOpen,
  data,
  setData,
  updateDataApi,
  setUpdateDataApi,
}) {
  const [addData, setAddData] = useState({ title: "", body: "" });

  useEffect(() => {
    if (updateDataApi?.id) {
      setAddData({
        title: updateDataApi.title || "",
        body: updateDataApi.body || "",
      });
    } else {
      setAddData({ title: "", body: "" });
    }
  }, [updateDataApi]);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setAddData((prev) => {
      console.log(prev);
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  const addPostData = async () => {
    try {
      const res = await postData(addData);
      // console.log("Post Response:", res);

      if (res.status === 200) {
        setData([...data, res.data]);
        setAddData({ title: "", body: "" });
      }
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  const updatePostData = async () => {
    try {
      const res = await updateData(updateDataApi.id, addData);
      if (res.status === 200) {
        setData((prev) =>
          prev.map((curElem) =>
            curElem.id === updateDataApi.id ? res.data : curElem
          )
        );
        setOpen(false);
      }
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const action = e.target.value;
    if (action === "Add") {
      addPostData();
      setOpen(false);
      // console.log("hello")
    } else {
      updatePostData();
      setOpen(false);
      // console.log("wellcome")
    }
  };

  return (
    <Modal open={open}>
      <form onSubmit={handleSubmit}>
        <Box sx={style}>
          <Box
            sx={{
              bgcolor: "#f9f9f9",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: { lg: "35vw" },
              p: 2,
              borderRadius: "5px",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.5rem",
                color: "#2e7d32",
                borderBottom: "2px solid #1b5e20",
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              {updateDataApi?.id ? "Edit Post" : "Create Post"}
            </Typography>
            <TextField
              sx={{ bgcolor: "#eceff1" }}
              size="large"
              id="title"
              name="title"
              placeholder="Add title..."
              variant="outlined"
              value={addData.title}
              onChange={handleChange}
            />
            <TextField
              sx={{ bgcolor: "#eceff1" }}
              size="small"
              id="body"
              name="body"
              placeholder="Write post..."
              variant="outlined"
              multiline
              fullWidth
              value={addData.body}
              onChange={handleChange}
            />
            <Button
              size="small"
              variant="contained"
              color="success"
              type="submit"
              name="action"
              value={updateDataApi?.id ? "Edit" : "Add"}
              onClick={handleSubmit}
            >
              {updateDataApi?.id ? "Edit" : "Add"}
            </Button>
            ;
          </Box>
        </Box>
      </form>
    </Modal>
  );
}
