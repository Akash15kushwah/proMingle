import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function CardRight() {
  const truncateText = (text, maxLength) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };
  return (
    <Card sx={{ maxWidth: 255, width: "100%" }}>
      <CardContent>
        <Box component="h6" sx={{ fontSize: "17px", fontWeight: 530 }}>
          LinkedIn News
        </Box>
        <Typography sx={{ fontSize: "0.9rem", color: "text.secondary" }}>
          Top stories
        </Typography>
        <Box>

        {[
          {
            title: "Fastest-growing jobs",
            time: "2d ago",
            body: "35,234 readers",
          },
          {
            title: "Startups step up Maha Kumbh",
            time: "3d ago",
            body: "30,240 readers",
          },
          {
            title: "Banks go big on merchant payments",
            time: "6d ago",
            body: "25,325 readers",
          },
          {
            title: "Budget sparks investment confidence",
            time: "8d ago",
            body: "15,122 readers",
          },
          {
            title: "Auto sales to hit a speed bump",
            time: "10d ago",
            body: "45,454 readers",
          },
          {
            title: "Cognizant reports revenue uptick",
            time: "12d ago",
            body: "50,121 readers",
          },
          {
            title: "Ola founder invests in Krutrim",
            time: "15d ago",
            body: "45,233 readers",
          },
        ].map(({ title, time, body}, index) => {
          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                mt: 1.5,
              }}
            >
              <Typography sx={{ fontSize: "0.8rem", fontWeight: 520 }}>
                {truncateText(title, 40)}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  //   flexDirection: "column",
                  alignItems: "center",

                  gap: 2,
                }}
              >
                <Typography
                  sx={{ fontSize: "0.8rem", color: "text.secondary" }}
                >
                  {time}
                </Typography>
                <Typography
                  sx={{ fontSize: "0.8rem", color: "text.secondary" }}
                >
                  {body}
                </Typography>
              </Box>
            </Box>
          );
        })}
        </Box>

      </CardContent>
    </Card>
  );
}
