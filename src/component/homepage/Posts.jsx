// import axios from 'axios';
import React, { useCallback, useEffect, useState } from "react";
import {
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Card,
  IconButton,
  Menu,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import axios from 'axios';
import { deletePost, getPost } from "../services/Api";

export default function Posts({
  data,
  setOpen,
  setData,
  updateDataApi,
  setUpdateDataApi,
  handleUpdateDatas,
  handleDeletes,
  curElem,
  id,
}) {
  const [popupId, setPopupId] = useState(null);
  const [likes, setLikes] = useState({});

  const getPostData = async () => {
    try {
      const res = await getPost();
      console.log(res.data);
    } catch (error) {
      console.error("Error in getPostData:", error);
    }
  };
  
  // const getPostData = async () => {
  //   const res = await getPost();
  //   console.log(res.data)
  //   setData(res.data);

  //   // const initialLikes = res.data.reduce((acc, post) => {
  //   //   acc[post.id] = { count: post.likes || 0, liked: false }; 
  //   //   return acc;
  //   // }, {});

  //   // setLikes(initialLikes);
  };
  useEffect(() => {
    getPostData();
  }, []);
  const handleTogglePopup = (id) => {
    setPopupId((prevId) => (prevId === id ? null : id));
  };

  const handleDelete = async (id) => {
    try {
      const res = await deletePost(id);
      console.log(res);
      if (res.status === 200) {
        const newDataPost = data.filter((curElem) => {
          return curElem.id !== id;
        });
        setData(newDataPost);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateData = useCallback(
    (curElem) => {
      setUpdateDataApi(curElem);
      setOpen(true);
    },
    [setUpdateDataApi, setOpen]
  );

  const handleLike = (id) => {
    setLikes((prevLikes) => {
      const isLiked = prevLikes[id]?.liked;
      const updatedCount = isLiked
        ? prevLikes[id].count - 1
        : prevLikes[id].count + 1;

      return {
        ...prevLikes,
        [id]: { liked: !isLiked, count: updatedCount },
      };
    });
  };

  return (
    <>
      <Box
        sx={{
          pt: 0.8,
          overflowY: "scroll",
          pb: 10,
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
          {Array.isArray(data) && data.length > 0 ? (
       data.map((curElem) => {
          const { PostId, PostBody, PostTitle} = curElem;
          return (
            <Card
              key={PostId}
              sx={{
                display: "flex",
                flexDirection: "column",
                marginBottom: 0.5,
                width: 500,
                p: 2,
                boxShadow: 2,
                borderRadius: 2,
                rowGap: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Avatar sx={{ bgcolor: red[500] }}>
                  {title ? title.charAt(0).toUpperCase() : "?"}
                </Avatar>

                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    textTransform: "capitalize",
                    color: "#555",
                    fontWeight: "520",
                  }}
                >
                  {PostTitle}
                </Typography>
                <div style={{ position: "relative", marginLeft: "auto" }}>
                  <button
                    onClick={() => handleTogglePopup(id)}
                    style={{
             
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "#555",
                      fontSize: "30px",
                      fontWeight: 550,
                    }}
                  >
                    ⋮
                  </button>

                  {/* Popup (Dropdown) */}
                  {popupId === id && (
                    <div
                      style={{
                        position: "absolute",
                        top: "30px",
                        right: "0",
                        background: "white",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                        padding: "2px",
                        zIndex: "1000",
                      }}
                    >
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Button
                          size="small"
                          variant="contained"
                          color="success"
                          sx={{ m: 0.5 }}
                          onClick={() => {
                            handleUpdateData(curElem);
                            setPopupId(null);
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          size="small"
                          variant="contained"
                          color="error"
                          sx={{ m: 0.5 }}
                          onClick={() => {
                            handleDelete(id);
                            setPopupId(null);
                          }}
                        >
                          Delete
                        </Button>
                      </Box>
                    </div>
                  )}
                </div>
              </Box>
              <Box>
                <Typography
                  component="p"
                  variant="p"
                  sx={{
                    color: "#888",
                    paddingX: 2,

                    textTransform: "lowercase",
                    "&::first-letter": {
                      textTransform: "uppercase",
                    },
                    fontSize: "0.9rem",
                    fontWeight: 480,
                  }}
                >
                  {PostBody}
                </Typography>
              </Box>
              <Box sx={{ width: 500, color: "#000", mb: 0 }}>
                <BottomNavigation showLabels>
                  <BottomNavigationAction
                    label={`like(${likes[id]?.count || 0})`}
                    icon={
                      <FavoriteIcon
                        sx={{ color: likes[id]?.liked ? "red" : "gray" }}
                      />
                    }
                    onClick={() => handleLike(id)}
                  />
                  <BottomNavigationAction
                    label="Comment"
                    icon={<CommentIcon />}
                  />
                  <BottomNavigationAction label="Share" icon={<ShareIcon />} />
                </BottomNavigation>
              </Box>
            </Card>
          );
        })
      ) : (
        <Typography>No posts available.</Typography>
      )}
      </Box>
    </>
  );
}
