import React from "react";
import { Box, Typography, Stack, Divider, Chip, Button } from "@mui/material";
import { motion } from "framer-motion";
import profile from "../../assets/demo.png";
import ProfileImage from "../profileImage/profileimage";

const MotionBox = motion(Box);

function Curriculum() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        px: { xs: 3, md: 12 },
        py: 10,
        background: "linear-gradient(180deg, #fafafa 0%, #f2f2f2 100%)",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif",
      }}
    >
      <MotionBox
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          sx={{ mb: 8 }}
        >
          <ProfileImage src={profile} />

          <Stack spacing={2}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 600,
                letterSpacing: "-0.5px",
              }}
            >
              Jean Aguilar
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "text.secondary",
                maxWidth: 700,
                lineHeight: 1.6,
              }}
            >
              System-Oriented Software Engineer designing scalable systems —
              from architecture and cloud infrastructure to refined user
              experience.
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                // href="/Jean_Aguilar_Mena_Resume.pdf"
                download
                sx={{
                  borderRadius: 8,
                  textTransform: "none",
                  px: 4,
                  py: 1.2,
                  fontWeight: 500,
                }}
              >
                Download CV
              </Button>
            </Stack>
          </Stack>
        </Stack>

        <Divider sx={{ mb: 8 }} />

        <Stack spacing={6}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
              Systems & Architecture
            </Typography>

            <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
              Design and implementation of end-to-end scalable architectures
              using AWS infrastructure, API Gateway, DynamoDB, and CloudFront.
              Strong understanding of static vs dynamic delivery strategies,
              authentication flows (JWT, Cognito), and performance-driven
              frontend architecture.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
              Impact
            </Typography>

            <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
              • Designed cloud-based architectures integrating CDN and dynamic
              APIs • Implemented secure authentication flows with JWT & AWS
              Cognito • Optimized data delivery reducing unnecessary backend
              calls • Built production-ready applications with maintainable
              system design • Currently developing AI-based Virtual Try-On
              platform with scalable backend infrastructure
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
              Experience
            </Typography>

            <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
              Software Developer at Helbits — contributing to scalable digital
              health systems with focus on architecture clarity, performance,
              and production-ready frontend engineering.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
              Core Skills
            </Typography>

            <Stack direction="row" flexWrap="wrap" gap={1.5}>
              {[
                "React",
                "TypeScript",
                "System Design",
                "AWS",
                "firebase",
                "API Architecture",
                "Cognito",
                "JWT",
                "CloudFront",
                "DynamoDB",
                "Performance Optimization",
                "State Management",
                "Scalable Web Apps",
                "AI Integration",
              ].map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  sx={{
                    borderRadius: 6,
                    fontWeight: 500,
                    backgroundColor: "#ffffff",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                  }}
                />
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
              Philosophy
            </Typography>

            <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
              I care about clarity. I design systems that scale. I think beyond
              features — I think in flows, infrastructure, and long-term
              maintainability.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
              Professional Reference
            </Typography>

            <Typography sx={{ color: "text.secondary" }}>
              Gerald Vindas Aguilar — Software Development Engineer 2, Amazon
            </Typography>
            <Divider></Divider>
            <Typography sx={{ color: "text.secondary" }}>
              geraldvindasa@gmail.com
            </Typography>
          </Box>
        </Stack>
      </MotionBox>
    </Box>
  );
}

export default Curriculum;
