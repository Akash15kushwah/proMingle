import {
  Box,
  Button,
  Container,
  createTheme,
  FormControl,
  InputLabel,
  MenuItem,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import React, { useEffect } from "react";
import Grid from "@mui/material/Grid2";
import register_img from "../assets/image1.png";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import { userData } from "./services/Api";

function FormInput({ name, label, type = "text", control, rules }) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          size="small"
          label={label}
          type={type}
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
}

function Register({ setOpen }) {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      username: "",
      email: "",
      password: "",
      // confirmPassword: "",
      contact: "",
      gender: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const res = await userData(data);
      if (response.status === 201) {
        setMessage('User created successfully!');
        setSeverity('success');
        setOpen(true);
      }
      navigate("/login");
      setOpen(true);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const boxstyle = {
    width: {
      lg: "75%",
      md: "85%",
      ms: "75%",
      xs: "75%",
    },
    height: "auto",
    backgroundColor: "#fff",
    boxShadow: 24,
  };

  const boximg = {
    height: "auto",
    width: "100%",
  };

  const imgStyle = {
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
    padding: 4,
  };

  const center = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: "30px 0 10px 0",
    fontSize: {
      lg: "12px",
    },
  };

  const content = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: {
      lg: "1.7rem",
      md: "2.2rem",
      sm: "2rem",
      xs: "1.7rem",
    },
  };
  const spans = {
    display: "flex",
    justifyContent: "start",
    textAlign: "start",
    color: "red",
    fontSize: "12.5px",
    marginTop: 5,
    letterSpacing: "0.5px",
  };
  const bordercolor = (errors) => ({
    textAlign: "start",
    bgcolor: "transparent",
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "blue",
      },

      "&.Mui-error fieldset": {
        borderColor: "#2C6DE7",
      },
      "& .MuiInputLabel-root": {
        color: errors ? "#2C6DE7" : "gray",
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: errors ? "lime" : "green",
      },
    },
  });
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#2196f3",
      },
      secondary: {
        main: "#f44336",
      },
      mode: "dark",
    },
  });

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={boxstyle}>
        <Grid container>
          <Grid sx={boximg} size={{ lg: 6, md: 6 }}>
            <img style={imgStyle} src={register_img} alt="" />
          </Grid>
          <Grid size={{ lg: 6, md: 6 }}>
            <Box sx={{ backgroundColor: "#3b33d5" }}>
              <ThemeProvider theme={darkTheme}>
                <Container>
                  <Box sx={center}>
                    <Typography sx={content} component="h1" variant="h4">
                      Create Account
                    </Typography>
                  </Box>
                  <Box noValidate sx={{ mt: 1 }}>
                    <Box height={5} />
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <Grid container spacing={1} rowGap={2}>
                        <Grid size={{ lg: 12, md: 6, sm: 6, xs: 12 }}>
                          <FormInput
                            name="username"
                            label="Username"
                            control={control}
                            rules={{
                              required: "Username is required",
                              minLength: {
                                value: 3,
                                message: "Min 3 characters",
                              },
                            }}
                          />
                        </Grid>
                        <Grid size={{ lg: 12, md: 6, sm: 6, xs: 12 }}>
                          <FormInput
                            name="email"
                            label="Email"
                            type="email"
                            control={control}
                            rules={{
                              required: "Email is required",
                              pattern: {
                                value:
                                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Invalid email",
                              },
                            }}
                          />
                        </Grid>
                        <Grid size={{ lg: 6, md: 6, sm: 6, xs: 12 }}>
                          <FormInput
                            name="password"
                            label="Password"
                            type="password"
                            control={control}
                            rules={{
                              required: "Password is required",
                              minLength: {
                                value: 8,
                                message: "Min 8 characters",
                              },
                            }}
                          />
                        </Grid>
                        <Grid size={{ lg: 6, md: 6, sm: 6, xs: 12 }}>
                          <FormInput
                            name="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            control={control}
                            defaultValue="" // Add this line to avoid uncontrolled input warning
                            rules={{
                              required: "Confirm Password is required",
                              validate: (value) =>
                                value === getValues("password") ||
                                "Passwords do not match",
                            }}
                          />
                        </Grid>
                        <Grid size={{ lg: 6, md: 6, sm: 6, xs: 12 }}>
                          <FormInput
                            name="contact"
                            label="Number"
                            type="number"
                            control={control}
                            rules={{
                              required: "Number is required",
                              pattern: {
                                value: /^[0-9]{10}$/,
                                message: "Invalid number",
                              },
                            }}
                          />
                        </Grid>
                        <Grid size={{ lg: 6, md: 6, sm: 6, xs: 12 }}>
                          <FormControl fullWidth size="small">
                            <InputLabel id="demo-select-small-label">
                              Gender
                            </InputLabel>

                            <Controller
                              name="gender"
                              id="gender"
                              rules={{
                                required: "gender is required",
                                pattern: {
                                  message: "password not strong enough",
                                },
                              }}
                              control={control}
                              render={({ field }) => (
                                <Select
                                  {...field}
                                  error={!!errors.gender}
                                  label="Gender"
                                  sx={bordercolor(errors.gender)}
                                >
                                  <MenuItem value="">
                                    <em></em>
                                  </MenuItem>
                                  <MenuItem value="male">Male</MenuItem>
                                  <MenuItem value="female">Female</MenuItem>
                                  <MenuItem value="other">Other</MenuItem>
                                </Select>
                              )}
                            />
                            {errors?.gender?.message && (
                              <span style={spans}>{errors.gender.message}</span>
                            )}
                          </FormControl>
                        </Grid>
                      </Grid>

                      <Grid
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        size={{ lg: 12 }}
                      >
                        <Button
                          type="submit"
                          size="small"
                          variant="contained"
                          color="primary"
                          sx={{
                            mt: 4,
                          }}
                        >
                          Register Now
                        </Button>
                      </Grid>
                      <Grid xs={12}>
                        <Stack
                          direction="row"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mt: "15px",
                            fontSize: {
                              lg: "1.2rem",
                              md: "1.2rem",
                              sm: "1.2rem",
                              xs: "1rem",
                            },
                            color: "#fff",
                            pb: 3,
                            pt: 0,
                          }}
                        >
                          <Typography variant="budy1" component="span">
                            Already have an Account?{" "}
                            <span
                              style={{ color: "#beb4fb", cursor: "pointer" }}
                              onClick={() => navigate("/login")}
                            >
                              Sign in
                            </span>
                          </Typography>
                        </Stack>
                      </Grid>
                    </form>
                  </Box>
                </Container>
              </ThemeProvider>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Register;
