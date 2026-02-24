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

      <Box
        sx={{
          py: { xs: 12, md: 20 },
          px: 3,
          textAlign: "center",
          background: "#ffffff",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "28px", md: "44px" },
            fontWeight: 500,
            maxWidth: 900,
            mx: "auto",
            lineHeight: 1.4,
          }}
        >
          {problem}
        </Typography>
      </Box>

      <Box
        sx={{
          py: { xs: 12, md: 20 },
          px: { xs: 3, md: 10 },
          background: "#f5f5f7",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "22px", md: "32px" },
            maxWidth: 800,
            mx: "auto",
            lineHeight: 1.6,
            color: "#1d1d1f",
          }}
        >
          {solution}
        </Typography>
      </Box>

      {architecture.length > 0 && (
        <Box
          sx={{
            py: { xs: 12, md: 20 },
            px: { xs: 3, md: 10 },
            background: "#ffffff",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "26px", md: "40px" },
              fontWeight: 600,
              mb: 8,
              textAlign: "center",
            }}
          >
            Built with a Scalable Architecture
          </Typography>

          <Stack spacing={4} sx={{ maxWidth: 900, mx: "auto" }}>
            {architecture.map((item, index) => (
              <Box
                key={index}
                sx={{
                  p: 4,
                  borderRadius: "24px",
                  background: "#f2f2f2",
                  transition: "all 0.5s cubic-bezier(.22,1,.36,1)",
                  "&:hover": {
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Typography sx={{ fontSize: "18px" }}>{item}</Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      )}

      {techStack.length > 0 && (
        <Box
          sx={{
            py: { xs: 12, md: 20 },
            px: 3,
            background: "#f5f5f7",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "24px", md: "36px" },
              fontWeight: 600,
              mb: 6,
            }}
          >
            Technology
          </Typography>

          <Stack
            direction="row"
            justifyContent="center"
            flexWrap="wrap"
            gap={2}
          >
            {techStack.map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                sx={{
                  fontSize: "14px",
                  background: "#e5e5e7",
                  px: 2,
                }}
              />
            ))}
          </Stack>
        </Box>
      )}

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
