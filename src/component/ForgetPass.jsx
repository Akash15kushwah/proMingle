import {
  Button,
  Card,
  CardContent,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

function ForgetPass() {
  return (
    <div>
      <FormControl
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          
        }}
      >
        <Card sx={{maxWidth: "450px", textAlign: "center", mt: 15 ,p:2}}>
          <CardContent>
            <Typography component="h4" variant="h4" sx={{ color: "#000" }}>
              Foreget password
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                rowGap: 25,
                marginTop: 25,
              }}
            >
              <TextField
                id="outlined-basic"
                label="Enter email"
                variant="outlined"
                size="medium"
              />

              <Typography
                variant="p"
                sx={{fontSize: "18px", cursor: "pointer" }}
              >
                We’ll send a verification code to this email or phone number if
                it matches an existing LinkedIn account.
              </Typography>
              <Button size="small" variant="contained" color="primary" sx={{width: 100}}>Next</Button>
              <Button size="small">Back</Button>
            </div>
          </CardContent>
        </Card>
      </FormControl>
    </div>
  );
}

export default ForgetPass;
