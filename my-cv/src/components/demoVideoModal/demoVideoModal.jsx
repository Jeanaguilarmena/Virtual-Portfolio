import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { keyframes } from "@mui/system";
import React from "react";

const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.92);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

function DemoVideoModal({ open, video, onClose }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        zIndex: 2000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "blur(20px)",
        backgroundColor: "rgba(0,0,0,0.55)",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: { xs: "95%", md: "80%" },
          maxWidth: "1100px",
          borderRadius: "32px",
          overflow: "hidden",
          background: "rgba(20,20,20,0.9)",
          boxShadow: "0 40px 120px rgba(0,0,0,0.4)",
          animation: `${fadeInScale} 0.4s cubic-bezier(.22,1,.36,1)`,
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 20,
            right: 20,
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            color: "white",
            zIndex: 10,
            "&:hover": {
              background: "rgba(255,255,255,0.2)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        <Box
          component="video"
          src={video}
          controls
          autoPlay
          sx={{
            width: "100%",
            display: "block",
          }}
        />
      </Box>
    </Modal>
  );
}

export default DemoVideoModal;
