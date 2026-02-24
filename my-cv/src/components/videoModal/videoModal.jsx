import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

function VideoModal({ open, videoSrc, onClose }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      slotProps={{
        backdrop: {
          timeout: 800,
          sx: {
            backdropFilter: "blur(40px)",
            backgroundColor: "rgba(10,10,15,0.55)",
          },
        },
      }}
      sx={{
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: { xs: "96%", md: "78%" },
          maxWidth: 1100,
          borderRadius: "32px",
          overflow: "hidden",
          background:
            "linear-gradient(145deg, rgba(30,30,35,0.9), rgba(15,15,20,0.95))",
          boxShadow:
            "0 40px 120px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)",
          transform: open ? "scale(1)" : "scale(0.94)",
          opacity: open ? 1 : 0,
          transition: "all 800ms cubic-bezier(.22,1,.36,1)",
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 20,
            right: 20,
            zIndex: 10,
            width: 42,
            height: 42,
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
            color: "#fff",
            transition: "all .4s cubic-bezier(.22,1,.36,1)",
            "&:hover": {
              background: "rgba(255,255,255,0.18)",
              transform: "scale(1.08)",
            },
          }}
        >
          <CloseIcon sx={{ fontSize: 20 }} />
        </IconButton>

        <Box
          component="video"
          src={videoSrc}
          controls
          autoPlay
          sx={{
            width: "100%",
            display: "block",
            borderRadius: "32px",
          }}
        />
      </Box>
    </Modal>
  );
}

export default VideoModal;
