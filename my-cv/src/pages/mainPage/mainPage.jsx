import React from "react";
import { Box, Typography } from "@mui/material";
import demo from "../../assets/demo.png";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/curriculum");
  }
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 3,
        pt: { xs: 10, md: 14 },
        pb: { xs: 12, md: 18 },
        position: "relative",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif",
        background: "#ffffff",
      }}
    >
      <Typography
        sx={{
          fontSize: "15px",
          color: "rgba(0,0,0,0.5)",
          fontWeight: 500,
          mb: 2,
          letterSpacing: "0.2px",
          opacity: 0,
          animation: "fadeUp 1s ease forwards",
        }}
      >
        Hey, I’m Jean 👋
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "36px", md: "56px" },
          fontWeight: 600,
          letterSpacing: "-1.5px",
          lineHeight: 1.1,
          mb: 4,
          maxWidth: 900,
          background: "linear-gradient(180deg, #1d1d1f 0%, #4b4b4f 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          transition: "transform 0.6s cubic-bezier(.2,.8,.2,1)",
          "&:hover": {
            transform: "translateY(-4px)",
          },
          opacity: 0,
          animation: "fadeUp 1.2s ease forwards",
        }}
      >
        System-Oriented Software Engineer
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "16px", md: "19px" },
          color: "rgba(0,0,0,0.65)",
          maxWidth: 640,
          mx: "auto",
          mb: 5,
          lineHeight: 1.7,
          fontWeight: 400,
          transition: "transform .6s cubic-bezier(.2,.8,.2,1)",
          "&:hover": {
            transform: "translateY(-3px)",
          },
          opacity: 0,
          animation: "fadeUp 1.4s ease forwards",
        }}
      >
        I design scalable systems with clarity — from architecture and
        infrastructure to refined user experience.
      </Typography>

      <Typography
        sx={{
          fontSize: "13px",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          color: "rgba(0,0,0,0.4)",
          mb: 4,
          opacity: 0,
          animation: "fadeUp 1.6s ease forwards",
        }}
      >
        React · TypeScript · Node · AWS · System Design
      </Typography>

      <Typography
        onClick={handleClick}
        sx={{
          fontSize: "15px",
          fontWeight: 500,
          cursor: "pointer",
          color: "#1d1d1f",
          transition: "all .4s cubic-bezier(.2,.8,.2,1)",
          position: "relative",
          display: "inline-block",
          "&:hover": {
            opacity: 0.6,
            transform: "translateY(-2px)",
          },
          opacity: 0,
          animation: "fadeUp 1.8s ease forwards",
        }}
      >
        Explore my work →
      </Typography>

      <Box
        sx={{
          position: "absolute",
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(60px)",
          zIndex: 0,
          top: "45%",
        }}
      />

      <Box
        component="img"
        src={demo}
        sx={{
          mt: 8,
          width: { xs: 240, md: 320 },
          height: { xs: 300, md: 420 },
          objectFit: "cover",
          borderRadius: "36px",
          zIndex: 1,
          backdropFilter: "blur(6px)",
          transition: "all 0.8s cubic-bezier(.2,.8,.2,1)",
          boxShadow: `
            0 40px 100px rgba(0,0,0,0.12),
            0 15px 35px rgba(0,0,0,0.08)
          `,
          opacity: 0,
          animation: "fadeUp 2s ease forwards",
          "&:hover": {
            transform: "translateY(-10px) scale(1.02)",
            boxShadow: `
              0 70px 140px rgba(0,0,0,0.18),
              0 25px 60px rgba(0,0,0,0.12)
            `,
          },
        }}
      />

      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </Box>
  );
}

export default MainPage;
