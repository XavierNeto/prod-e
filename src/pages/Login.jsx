import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import NavBar from "../components/NavBar";
import LoginFeedback from "../components/LoginFeedback";

export default function Login() {
  let navigate = useNavigate();

  const [username, setUsername] = useState();
  const [isFeedbackOpen, setFeedbackOpen] = useState(false);


  const onNameChange = (e) => setUsername(e.target.value);
  const handleFeedbackClose = () => setFeedbackOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function getToken() {
    const tokenString = sessionStorage.getItem("user");
    return JSON.parse(tokenString);
  }

  useEffect(() => {
    const token = getToken();
    if (token) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <CssBaseline />
      <NavBar />
      <Box
        mt={5}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Entre em sua conta</Typography>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            spacing={3}
            direction={"column"}
            justify={"center"}
            alignItems={"center"}
            mt={2}
          >
            <Grid item xs={12}>
              <TextField
                label="Usuário"
                onChange={onNameChange}
                required
                color="secondary"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Senha"
                type={"password"}
                required
                color="secondary"
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="secondary">
                Entrar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
}
