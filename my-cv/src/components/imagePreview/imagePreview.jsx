import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function ImagePreview({ src, title, path }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(path);
  }

  return (
    <Box
      onClick={handleClick}
      sx={{
        position: "relative",
        width: { xs: 260, md: 320 },
        height: { xs: 340, md: 420 },
        borderRadius: "24px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.8s cubic-bezier(.2,.8,.2,1)",
        boxShadow: `
          0 30px 80px rgba(0,0,0,0.12),
          0 10px 25px rgba(0,0,0,0.08)
        `,
        "&:hover": {
          transform: "translateY(-12px)",
          boxShadow: `
            0 60px 140px rgba(0,0,0,0.18),
            0 20px 60px rgba(0,0,0,0.12)
          `,
        },
      }}
    >
      <Box
        component="img"
        src={src}
        alt={title}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 1.2s cubic-bezier(.2,.8,.2,1)",
          "&:hover": {
            transform: "scale(1.04)",
          },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.1), transparent)",
        }}
      />

      <Typography
        sx={{
          position: "absolute",
          bottom: 24,
          left: 24,
          color: "#fff",
          fontSize: "20px",
          fontWeight: 500,
          letterSpacing: "-0.3px",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}

export default ImagePreview;
