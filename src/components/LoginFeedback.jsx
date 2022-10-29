import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const LoginFeedback = ({ isOpen, onClose, isLoading }) => {

  return (
    <>
      <Modal open={isOpen} onClose={onClose}>
        <Box sx={style}>
          {isLoading && (
            <Box ml={18}>
              <CircularProgress />
            </Box>
          )}
          {!isLoading && (
            <>
              <Typography variant="h6" component="h2">
                Usuário ou senha não encontrados!
              </Typography>
              <Box mt={2}>
                <Button onClick={onClose} variant="contained" color="button">
                  Tentar novamente
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default LoginFeedback;
