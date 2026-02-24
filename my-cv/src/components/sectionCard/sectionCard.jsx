import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";

const MotionBox = motion(Box);

function SectionCard({ title, children }) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1], // cubic-bezier Apple-like
      }}
      sx={{
        background: "rgba(255,255,255,0.7)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderRadius: "32px",
        p: { xs: 4, md: 6 },
        boxShadow: "0 10px 40px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.04)",
        transition: "all 0.6s cubic-bezier(.22,1,.36,1)",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow:
            "0 20px 60px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: "1.6rem",
          fontWeight: 600,
          letterSpacing: "-0.3px",
          mb: 3,
          color: "#1d1d1f",
        }}
      >
        {title}
      </Typography>

      {children}
    </MotionBox>
  );
}

export default SectionCard;
