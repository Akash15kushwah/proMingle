import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, Box, Divider, IconButton } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export default function CardLeft({name}) {
  return (
    <Card
      variant="outlined"
      sx={{
        position: "fixed",
        maxWidth: 255,
        width: "100%",
        position: "relative",
        textAlign: "center",
        bgcolor: "#fff",
      }}
    >
      <CardMedia
        sx={{
          height: 70,
          bgcolor: "#BFD3D6",
        }}
        component="img"
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          mt: "-24px",
        }}
      >
        <Avatar
          sx={{ color: "white", bgcolor: "red" }}
          // alt="Profile Image"
          // src={profile}
          // sx={{ width: 60, height: 60, border: "3px solid white" }}
        >
          R
        </Avatar>
      </Box>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: 1.5,
          padding: 0,
        }}
      >
        <Box>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontSize: "15px",
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body1"
            sx={{ paddingX: 1.8, color: "text.secondary", fontSize: "11px" }}
          >
            HTML | CSS | UI/UX Designer | User-Centered Design | Visual Design |
            Interaction Design
          </Typography>
        </Box>
        <Divider />
        <Typography
          variant="body1"
          sx={{
            textAlign: "start",
            paddingX: 2,
            color: "text.secondary",
            fontSize: "11px",
          }}
        >
          Profile viewers
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "start",
            mt: -1,
            paddingX: 2,
            color: "text.secondary",
            fontSize: "11px",
          }}
        >
          Viewers all analytics
        </Typography>
        <Divider />
        <Typography
          sx={{
            textAlign: "start",
            color: "text.secondary",
            fontSize: "12px",
            paddingX: 2,
          }}
        >
          Find top condidates with Recruiter lite
          <br />
          <span
            sx={{
              color: "text.secondary",
              "&:hover": { color: "#A0C7EF" },
            }}
          >
            Try for
          </span>
        </Typography>
        <Divider />
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            color: "text.secondary",
            fontSize: "11px",
            paddingX: 1,
          }}
        >
          <IconButton>
            <BookmarkIcon />
          </IconButton>
          Save items
        </Typography>
      </CardContent>
    </Card>
  );
}
