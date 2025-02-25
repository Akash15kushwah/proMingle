import React, { useState } from "react";
import SearchAppBar from "./Header";
import { Box, Button, Card } from "@mui/material";
import { Image } from "@mui/icons-material";
import VideocamIcon from "@mui/icons-material/Videocam";
import Posts from "./Posts";
import AddIcon from "@mui/icons-material/Add";
import Createpost from "./CreatePost";
import CardLeft from "./CardLeft";
import CardRight from "./CardRight";
function Home({name}) {
  const [data, setData] = useState([]);
  const [updateDataApi, setUpdateDataApi] = useState({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <Box>
      <SearchAppBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 7,
          position: "fixed",
          width: "100%",
          paddingX: { xs: 2, md: 5},
          zIndex: 1000,
          mt: 2,
        }}
      >
        <Box sx={{ flex: 1, display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
        <CardLeft name={name}  />
        </Box> 
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 1,
            gap: 0.5,
            flex: 2,
            maxWidth: 600,
            width: "100%",
          }}
        >     
          <Card sx={{
          display:'flex',
          justifyContent: "space-around",
          width:"100%",
          height: 60}}>
          <Button sx={{gap: 0.5}}>
            <Image />
            images
          </Button>
          <Button sx={{gap: 0.5}}>
            <VideocamIcon />
            videos
          </Button>
          <Button onClick={handleOpen} sx={{gap: 0.5}}>
            <AddIcon />
            createpost
          </Button>
          <Createpost
            open={open}
            setOpen={setOpen}
            data={data}
            setData={setData}
            updateDataApi={updateDataApi}
            setUpdateDataApi={setUpdateDataApi}
          />
        </Card>
        <Box 
          // sx={{
          //   display: "flex",
          //   alignItems: "center",
          //   justifyContent: "center",
          //   flexDirection: "column-reverse",
          //   bgcolor: "#F4F2EE",
          //   // rowGap: 1,
          //   height: "calc(100vh - 80px)", 
          //   overflowY: "scroll",
          //   // paddingTop: 1,
          
          //   scrollbarWidth: "none",
          //   "&::-webkit-scrollbar": {
          //     display: "none", 
          //   },
          // }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column-reverse",
            bgcolor: "#F4F2EE",
            height: "calc(100vh - 80px)",
            overflowY: "scroll",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
          >
        <Posts
            open={open}
         setOpen={setOpen}
          data={data}
          setData={setData}
          updateDataApi={updateDataApi}
          setUpdateDataApi={setUpdateDataApi}
          />
          </Box>
        </Box>
        <Box sx={{ flex: 1, display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
        <CardRight />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          bgcolor: "#F4F2EE",
          rowGap: 1,
          height: "80vh",
          overflowY: "scroll",
        }}
      >
      </Box>
    </Box>
  );
}
export default Home;
