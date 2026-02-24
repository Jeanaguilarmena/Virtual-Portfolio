import { Box, Typography, Button, Stack, Chip } from "@mui/material";
import React, { useState } from "react";
import DemoVideoModal from "../demoVideoModal/demoVideoModal";

function ProjectDetails({
  name,
  tagline,
  heroImage,
  description,
  problem,
  solution,
  techStack = [],
  architecture = [],
  liveDemo,
  githubLink,
}) {
  const [activeSection, setActiveSection] = useState("problem");
  const [demoOpen, setDemoOpen] = useState(false);
  function handleWatchDemo() {
    setDemoOpen(true);
  }
  return (
    <Box sx={{ background: "#ffffff", width: "100%", overflow: "hidden" }}>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          px: 3,
          background: "linear-gradient(to bottom, #ffffff 0%, #f5f5f7 100%)",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "42px", md: "72px" },
            fontWeight: 600,
            letterSpacing: "-2px",
            color: "#1d1d1f",
          }}
        >
          {name}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "18px", md: "24px" },
            color: "#6e6e73",
            mt: 3,
            maxWidth: 700,
          }}
        >
          {tagline}
        </Typography>

        <Box
          component="img"
          src={heroImage}
          alt={name}
          sx={{
            width: "100%",
            maxWidth: 900,
            mt: 8,
            borderRadius: "28px",
            boxShadow: "0 40px 100px rgba(0,0,0,0.15)",
            transition: "all 0.8s cubic-bezier(.22,1,.36,1)",
            "&:hover": {
              transform: "scale(1.02)",
            },
          }}
        />

        <Stack direction="row" spacing={3} sx={{ mt: 6 }}>
          {liveDemo && (
            <Button
              onClick={handleWatchDemo}
              variant="contained"
              target="_blank"
              sx={{
                borderRadius: "999px",
                px: 5,
                py: 1.5,
                textTransform: "none",
                background: "#1d1d1f",
                "&:hover": { background: "#000" },
              }}
            >
              Live Demo
            </Button>
          )}

          {githubLink && (
            <Button
              variant="outlined"
              href={githubLink}
              target="_blank"
              sx={{
                borderRadius: "999px",
                px: 5,
                py: 1.5,
                textTransform: "none",
              }}
            >
              View Code
            </Button>
          )}
        </Stack>
      </Box>

      {/* Section Selector */}
      <Box
        sx={{
          py: 10,
          display: "flex",
          justifyContent: "center",
          background: "#ffffff",
        }}
      >
        <Box
          sx={{
            display: "flex",
            background: "#f2f2f2",
            borderRadius: "999px",
            p: "6px",
            gap: "6px",
          }}
        >
          {[
            { key: "problem", label: "Problem", show: !!problem },
            { key: "solution", label: "Solution", show: !!solution },
            {
              key: "architecture",
              label: "Architecture",
              show: architecture.length > 0,
            },
            {
              key: "tech",
              label: "Technology",
              show: techStack.length > 0,
            },
          ]
            .filter((item) => item.show)
            .map((item) => (
              <Button
                key={item.key}
                onClick={() => setActiveSection(item.key)}
                sx={{
                  borderRadius: "999px",
                  px: 4,
                  py: 1.2,
                  textTransform: "none",
                  fontWeight: 500,
                  fontSize: "14px",
                  background:
                    activeSection === item.key ? "#1d1d1f" : "transparent",
                  color: activeSection === item.key ? "#ffffff" : "#1d1d1f",
                  transition: "all 0.4s cubic-bezier(.22,1,.36,1)",
                  "&:hover": {
                    background:
                      activeSection === item.key ? "#000" : "rgba(0,0,0,0.06)",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
        </Box>
      </Box>

      <Box
        sx={{
          py: { xs: 10, md: 16 },
          px: 3,
          background: "#f5f5f7",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          key={activeSection}
          sx={{
            width: "100%",
            maxWidth: 900,
            p: { xs: 5, md: 10 },
            borderRadius: "28px",
            background: "rgba(255,255,255,0.75)",
            backdropFilter: "blur(24px)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.05)",
            transition: "all 1s cubic-bezier(.22,1,.36,1)",
            opacity: 1,
            transform: "translateY(0px)",
            animation: "sectionFade 1s cubic-bezier(.22,1,.36,1)",
            "@keyframes sectionFade": {
              from: {
                opacity: 0,
                transform: "translateY(20px)",
              },
              to: {
                opacity: 1,
                transform: "translateY(0px)",
              },
            },
          }}
        >
          {/* PROBLEM */}
          {activeSection === "problem" && problem && (
            <Typography
              sx={{
                fontSize: { xs: "20px", md: "26px" },
                fontWeight: 400,
                lineHeight: 1.7,
                letterSpacing: "-0.2px",
                color: "text.secondary",
              }}
            >
              {problem}
            </Typography>
          )}

          {/* SOLUTION */}
          {activeSection === "solution" && solution && (
            <Typography
              sx={{
                fontSize: { xs: "18px", md: "22px" },
                fontWeight: 400,
                lineHeight: 1.8,
                color: "text.secondary",
              }}
            >
              {solution}
            </Typography>
          )}

          {/* ARCHITECTURE */}
          {activeSection === "architecture" && architecture.length > 0 && (
            <Stack spacing={6}>
              {architecture.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    p: 5,
                    borderRadius: "20px",
                    background: "#ffffff",
                    transition: "all 0.8s cubic-bezier(.22,1,.36,1)",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 25px 60px rgba(0,0,0,0.06)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      lineHeight: 1.8,
                      color: "text.secondary",
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Stack>
          )}

          {/* TECHNOLOGY */}
          {activeSection === "tech" && techStack.length > 0 && (
            <Stack direction="row" flexWrap="wrap" gap={2}>
              {techStack.map((tech, index) => (
                <Chip
                  key={index}
                  label={tech}
                  sx={{
                    fontSize: "14px",
                    px: 2,
                    py: 1,
                    borderRadius: "999px",
                    background: "#ffffff",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.04)",
                    transition: "all 0.8s cubic-bezier(.22,1,.36,1)",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 15px 40px rgba(0,0,0,0.06)",
                    },
                  }}
                />
              ))}
            </Stack>
          )}
        </Box>
      </Box>

      {demoOpen && (
        <DemoVideoModal
          open={demoOpen}
          video={liveDemo}
          onClose={() => setDemoOpen(false)}
        />
      )}
    </Box>
  );
}

export default ProjectDetails;
