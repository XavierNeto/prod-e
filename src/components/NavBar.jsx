import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import MenuItem from "@mui/material/MenuItem";

export default function NavBar() {
  let navigate = useNavigate();

  const [user, setUser] = useState("");

  function getToken() {
    const tokenString = sessionStorage.getItem("user");
    return JSON.parse(tokenString);
  }

  useEffect(() => {
    const token = getToken();
    if (token) {
      setUser(token);
    }
  }, []);

  const pages = [
    {
      name: "Como funciona",
      route: "/",
    },
    {
      name: "Recursos",
      route: "/",
    },
    {
      name: "Fale conosco",
      route: "/",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex" }}>
            <Typography
              variant="h6"
              component="div"
              onClick={() => navigate("/")}
              mr={1}
            >
              Prod-E
            </Typography>

            {pages.map((page) => (
              <MenuItem
                key={page}
                onClick={() => {
                  navigate(page.route);
                }}
              >
                <Typography textAlign="center">{page.name}</Typography>
              </MenuItem>
            ))}
          </Box>
          <Button
            color="inherit"
            onClick={() => (user.name ? {} : navigate("/login"))}
          >
            {user.name ? user.name : "Login"}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
