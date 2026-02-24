import React from "react";
import { Box, Typography, Stack, Divider, Chip, Button } from "@mui/material";
import { motion } from "framer-motion";
import profile from "../../assets/demo.png";
import ProfileImage from "../profileImage/profileimage";
import SectionCard from "../sectionCard/sectionCard";

const MotionBox = motion(Box);

function Curriculum() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        px: { xs: 3, md: 12 },
        py: 10,
        background:
          "linear-gradient(180deg, #fafafa 0%, #f3f3f5 50%, #eeeeef 100%)",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif",
      }}
    >
      <MotionBox
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          sx={{ mb: 10 }}
        >
          <ProfileImage src={profile} />

          <Stack spacing={3}>
            <Typography
              variant="h3"
              sx={{ fontWeight: 600, letterSpacing: "-0.5px" }}
            >
              Jean Aguilar
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "#6e6e73",
                maxWidth: 750,
                lineHeight: 1.7,
                fontWeight: 400,
              }}
            >
              System-Oriented Software Engineer specializing in scalable backend
              architectures, distributed systems, and AI integration. I design
              and deploy production-ready applications that combine cloud
              infrastructure, secure APIs, and intelligent services.
            </Typography>

            <Button
              variant="contained"
              href="http://localhost:5173/public/curriculum/Jean_Aguilar_Mena_Resume.pdf"
              download
              sx={{
                alignSelf: "flex-start",
                borderRadius: "999px",
                textTransform: "none",
                px: 4,
                py: 1.2,
                fontWeight: 500,
                background: "#1d1d1f",
                "&:hover": { background: "#000" },
              }}
            >
              Download CV
            </Button>
          </Stack>
        </Stack>

        <Divider sx={{ mb: 10, opacity: 0.4 }} />
        <Box
          sx={{
            display: "grid",
            gap: 6,
          }}
        >
          <SectionCard title="Systems & Architecture">
            <Typography
              sx={{
                color: "#6e6e73",
                lineHeight: 1.9,
                fontSize: "1.05rem",
              }}
            >
              Design and implementation of scalable, event-driven architectures
              using AWS (Lambda, DynamoDB, EventBridge, S3, CloudFront) and
              Firebase. Deep understanding of serverless infrastructure, CDN
              distribution strategies, secure authentication systems (JWT,
              Cognito, Firebase Auth), and AI-powered backend workflows.
            </Typography>
          </SectionCard>

          <SectionCard title="Impact">
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: 3,
              }}
            >
              {[
                "Architected scalable cloud systems integrating CDN and dynamic APIs.",
                "Designed secure authentication flows with JWT & AWS Cognito.",
                "Optimized backend communication reducing network overhead.",
                "Built modular, production-ready distributed systems.",
                "Integrated AI APIs with inference validation, rate limiting, and cost optimization.",
                "Structured AI-driven backend pipelines enabling intelligent features.",
                "Currently developing an AI-powered Virtual Try-On platform with distributed infrastructure.",
              ].map((item, index) => (
                <Typography
                  key={index}
                  sx={{
                    color: "#6e6e73",
                    lineHeight: 1.8,
                    fontSize: "1rem",
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </SectionCard>

          <SectionCard title="Experience">
            <Typography sx={{ color: "#6e6e73", lineHeight: 1.9 }}>
              Software Developer at Helbits — contributing to scalable digital
              health systems with focus on backend architecture clarity, API
              design, performance optimization, and production-ready frontend
              engineering. Designing maintainable system structures balancing
              user experience and infrastructure scalability.
            </Typography>
          </SectionCard>

          <SectionCard title="Core Skills">
            <Stack direction="row" flexWrap="wrap" gap={1.5}>
              {[
                "React",
                "TypeScript",
                "Node.js",
                "System Design",
                "AWS (Lambda, DynamoDB, S3)",
                "Firebase",
                "Serverless Architecture",
                "REST API Design",
                "JWT & Cognito",
                "CloudFront",
                "Event-Driven Systems",
                "Performance Optimization",
                "Distributed Systems",
                "AI API Integration",
                "AI-Oriented Backend Design",
                "Secure API Orchestration",
              ].map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  sx={{
                    borderRadius: "999px",
                    px: 2,
                    height: 36,
                    fontWeight: 500,
                    background: "rgba(0,0,0,0.05)",
                    color: "#1d1d1f",
                    transition: "all .4s cubic-bezier(.22,1,.36,1)",
                    "&:hover": {
                      background: "rgba(0,0,0,0.1)",
                      transform: "scale(1.05)",
                    },
                  }}
                />
              ))}
            </Stack>
          </SectionCard>

          <SectionCard title="Philosophy">
            <Typography sx={{ color: "#6e6e73", lineHeight: 1.9 }}>
              I value clarity in architecture, scalability in systems, and
              intentional design in user experience. I build software that is
              not only functional, but sustainable and structurally elegant.
            </Typography>
          </SectionCard>
          <SectionCard title={"References"}>
            <Typography sx={{ color: "#6e6e73", lineHeight: 1.9 }}>
              Gerald Vindas Aguilar — Software Development Engineer 2, Amazon
            </Typography>
          </SectionCard>
        </Box>
      </MotionBox>
    </Box>
  );
}

export default Curriculum;
