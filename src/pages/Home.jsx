import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Home() {
  let navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <NavBar />
      <CssBaseline />
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={6}>
          <Box mt={16}>
            <img src="images/books.png" />
          </Box>
        </Grid>
        <Grid item xs={6} alignItems="center">
          <Typography color="#FF4431" variant="h2" component="h1" gutterBottom>
            Prod-E
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            A Prod-E é uma aplicação que serve para alunos e professores terem
            uma noção de suas produtividades.
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Isto principalmente pelo acompanhamento de atividades, feedbacks e
            estatísticas.
          </Typography>
          <Box mt={4} ml={16}>
            <Button
              onClick={() => {
                navigate("/");
              }}
              variant="contained"
              style={{
                backgroundColor: "primary",
              }}
            >
              Cadastre-se
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
