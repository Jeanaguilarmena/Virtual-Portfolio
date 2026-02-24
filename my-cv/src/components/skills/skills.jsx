import { Box, Typography } from "@mui/material";
import React from "react";

const sections = [
  {
    title: "Systems & Architecture",
    skills: [
      "End-to-End System Design",
      "Scalable Web Architecture",
      "API Design & Integration",
      "Authentication & Authorization Flows (Cognito, JWT)",
      "Cloud-Based Infrastructure (AWS)",
      "State Management Patterns",
      "Performance Optimization",
      "Data Flow & Application Layering",
    ],
  },
  {
    title: "Frontend Engineering Excellence",
    skills: [
      "Advanced React Architecture",
      "TypeScript for Large-Scale Applications",
      "Component-Driven Development",
      "UI Systems & Design Consistency",
      "Animation & Micro-Interactions",
      "Accessibility-Aware UI",
      "Clean Code & Maintainability",
    ],
  },
  {
    title: "Backend & Infrastructure",
    skills: [
      "Node.js Backend Architecture",
      "RESTful & Service-Based APIs",
      "Serverless Concepts",
      "Firebase & Cloud Storage",
      "Secure Auth Flows",
      "Database Modeling Fundamentals",
      "Error Handling & Resilience Patterns",
    ],
  },
  {
    title: "Product Thinking & Engineering Mindset",
    skills: [
      "Systems Thinking",
      "Technical Decision Making",
      "Product-Driven Engineering",
      "UX Sensitivity in Development",
      "End-User Focused Architecture",
      "Trade-Off Evaluation (Scalability vs Speed)",
      "Continuous Improvement Mindset",
    ],
  },
  {
    title: "Developer Identity",
    skills: [
      "Apple-Inspired Design Philosophy",
      "Clean & Minimal Interface Systems",
      "Attention to Detail",
      "Visual Hierarchy Awareness",
      "Consistency-Driven UI Systems",
    ],
  },
];

function Skills() {
  return (
    <Box
      sx={{
        width: "100%",
        background: "#f5f5f7",
        py: { xs: 10, md: 16 },
        px: { xs: 3, md: 8 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "32px", md: "44px" },
          fontWeight: 600,
          letterSpacing: "-0.5px",
          color: "#1d1d1f",
          mb: 10,
          opacity: 0,
          animation: "fadeUp 1s ease forwards",
        }}
      >
        Skills & Expertise
      </Typography>

      <Box sx={{ width: "100%", maxWidth: 1100 }}>
        {sections.map((section, index) => (
          <Box
            key={section.title}
            sx={{
              mb: 10,
              opacity: 0,
              animation: "fadeUp 1s ease forwards",
              animationDelay: `${0.2 * index}s`,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "20px", md: "24px" },
                fontWeight: 600,
                color: "#1d1d1f",
                mb: 4,
              }}
            >
              {section.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              {section.skills.map((skill) => (
                <Box
                  key={skill}
                  sx={{
                    px: 3,
                    py: 1.2,
                    borderRadius: "20px",
                    background: "#1d1d1f",
                    color: "#fff",
                    fontSize: "13px",
                    fontWeight: 400,
                    letterSpacing: "0.3px",
                    transition: "all 0.4s cubic-bezier(.2,.8,.2,1)",
                    cursor: "default",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      background: "#000",
                    },
                  }}
                >
                  {skill}
                </Box>
              ))}
            </Box>
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

export default Skills;
