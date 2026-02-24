import { Box, Typography } from "@mui/material";
import React from "react";
import demo3 from "../../assets/demo3.jpg";
import demo4 from "../../assets/demo4.jpeg";
import tryOn from "../../assets/Try-on.png";
import virtualCV from "../../assets/virtualCV.png";
import ImagePreview from "../imagePreview/imagePreview";

function Projects() {
  const projects = [
    { src: tryOn, title: "Try-on", path: "/tryon" },
    { src: virtualCV, title: "Virtual CV", path: "/virtualcv" },
    { src: demo3, title: "Trust!", path: "/trust" },
    { src: demo4, title: "Melodics", path: "/melodics" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 10, md: 16 },
        px: { xs: 3, md: 8 },
        background: "#f5f5f7",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "28px", md: "40px" },
          fontWeight: 600,
          letterSpacing: "-0.5px",
          mb: 8,
          color: "#1d1d1f",
          opacity: 0,
          animation: "fadeUp 1s ease forwards",
        }}
      >
        My Projects
      </Typography>

      <Box
        sx={{
          width: "100%",
          maxWidth: 1200,
          display: "flex",
          justifyContent: "center",
          gap: { xs: 4, md: 6 },
          flexWrap: "wrap",
        }}
      >
        {projects.map((project, index) => (
          <Box
            key={project.title}
            sx={{
              opacity: 0,
              animation: `fadeUp 1s ease forwards`,
              animationDelay: `${0.2 * index}s`,
            }}
          >
            <ImagePreview
              src={project.src}
              title={project.title}
              path={project.path}
            />
          </Box>
        ))}
      </Box>

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

export default Projects;
