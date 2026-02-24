import { Box, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const elements = [
    { path: "/", name: "Me", icon: "😊" },
    { path: "/projects", name: "Projects", icon: "💼" },
    { path: "/skills", name: "Skills", icon: "🗂️" },
    { path: "/fun", name: "Fun", icon: "🎉" },
    { path: "/contact", name: "Contact", icon: "🔍" },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 30,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: 3,
        px: 4,
        py: 2,
        borderRadius: "32px",
        background: "transparent",
        boxShadow: "none",
        zIndex: 1500,
      }}
    >
      {elements.map((element) => {
        const active = location.pathname === element.path;

        return (
          <Box
            key={element.path}
            onClick={() => navigate(element.path)}
            sx={{
              width: 110,
              height: 100,
              borderRadius: "24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              cursor: "pointer",
              position: "relative",
              transition: "all 0.4s cubic-bezier(.2,.8,.2,1)",

              background: active
                ? "rgba(255,255,255,0.8)"
                : "rgba(255,255,255,0.3)",

              boxShadow: active
                ? "0 15px 40px rgba(0,0,0,0.12)"
                : "0 5px 20px rgba(0,0,0,0.05)",

              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
              },

              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -20,
                left: 0,
                right: 0,
                height: 30,
                borderRadius: "24px",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 80%)",
                filter: "blur(8px)",
                opacity: 0.5,
                transform: "scaleY(-1) perspective(100px) rotateX(15deg)",
                pointerEvents: "none",
                transition: "opacity 0.4s ease",
              },

              "&:hover::after": {
                opacity: 0.7,
              },
            }}
          >
            <Box
              sx={{
                fontSize: 28,
                color: active ? "#111" : "rgba(0,0,0,0.6)",
              }}
            >
              {element.icon}
            </Box>

            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                color: active ? "#111" : "rgba(0,0,0,0.6)",
              }}
            >
              {element.name}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}

export default Header;
