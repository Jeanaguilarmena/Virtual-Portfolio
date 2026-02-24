import { Box, Typography } from "@mui/material";
import React from "react";
import ProjectDetails from "../../components/tryOnDetails/tryOnDetails";
import VirtualCVImage from "../../assets/virtualCV.png";
import virtualcvVideo from "../../assets/virtualcvvideo.mp4";

function CVDetailsPage() {
  const data = {
    name: "Virtual-CV",
    tagline: "Your professional identity, reimagined online.",
    heroImage: VirtualCVImage,

    problem:
      "Traditional resumes are static, limited in interactivity, and often fail to fully represent a person's personality, projects, and dynamic skills in a modern digital environment.",

    solution:
      "Virtual-CV transforms a traditional resume into a dynamic, interactive web experience. It allows users to present their personal brand through structured sections such as About Me, Projects, Skills, Fun, and Contact — creating a more engaging and memorable professional presence.",

    techStack: [
      "React",
      "JavaScript",
      "Vite",
      "Material UI (MUI)",
      "Responsive Design",
      "Modern UI/UX Principles",
    ],

    architecture: [
      "Frontend-only architecture with no backend or database integration.",
      "All content is statically defined within the codebase for simplicity and performance.",
      "Component-based design using reusable React components.",
      "Client-side routing implemented for smooth navigation between sections.",
      "Optimized build process using Vite for fast development and performance.",
    ],

    liveDemo: virtualcvVideo,
    githubLink: "https://github.com/Jeanaguilarmena/Try-on",
  };
  return (
    <Box>
      <ProjectDetails
        name={data.name}
        tagline={data.tagline}
        heroImage={data.heroImage}
        problem={data.problem}
        solution={data.solution}
        techStack={data.techStack}
        architecture={data.architecture}
        liveDemo={data.liveDemo}
        githubLink={data.githubLink}
      />
    </Box>
  );
}

export default CVDetailsPage;
