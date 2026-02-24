import { Box, Button, Card, Typography, Stack } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  const items = [
    {
      icon: <EmailIcon />,
      text: "jean.freddy.aguilar@gmail.com",
      href: "mailto:jean.freddy.aguilar@gmail.com",
    },
    {
      icon: <PhoneIcon />,
      text: "8365 5888",
      href: "https://wa.me/50683655888",
    },
    { icon: <PlaceIcon />, text: "San José, Costa Rica", href: "" },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        bgcolor: "background.default",
      }}
    >
      <Card
        sx={{
          width: 520,
          p: 6,
          borderRadius: "28px",
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
          backdropFilter: "blur(20px)",
          boxShadow: "0 25px 60px rgba(0,0,0,0.35)",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: 600,
            letterSpacing: "-0.5px",
            mb: 6,
            opacity: 0,
            animation: "fadeUp 0.9s ease forwards",
          }}
        >
          Contact
        </Typography>

        <Stack spacing={4}>
          {items.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                px: 2,
                py: 1.8,
                borderRadius: "14px",
                transition: "all 0.3s ease",
                opacity: 0,
                animation: "fadeUp 0.9s ease forwards",
                animationDelay: `${0.2 * (index + 1)}s`,
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.05)",
                  transform: "translateX(4px)",
                },
              }}
            >
              <Box sx={{ color: "primary.main" }}>{item.icon}</Box>

              <Typography
                sx={{
                  fontSize: "0.95rem",
                  fontWeight: 400,
                  letterSpacing: "-0.2px",
                }}
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </Stack>

        <Button
          href="https://www.linkedin.com/in/jean-aguilar-m/"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<LinkedInIcon />}
          fullWidth
          sx={{
            mt: 6,
            py: 1.4,
            borderRadius: "14px",
            textTransform: "none",
            fontWeight: 500,
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))",
            border: "1px solid rgba(255,255,255,0.1)",
            transition: "all 0.3s ease",
            opacity: 0,
            animation: "fadeUp 0.9s ease forwards",
            animationDelay: "0.8s",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 15px 35px rgba(0,0,0,0.4)",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))",
            },
          }}
        >
          View LinkedIn
        </Button>
      </Card>

      <style>
        {`
            @keyframes fadeUp {
              from {
                opacity: 0;
                transform: translateY(40px);
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

export default Contact;
