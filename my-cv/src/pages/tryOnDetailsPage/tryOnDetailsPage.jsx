import { Box } from "@mui/material";
import React from "react";
import ProjectDetails from "../../components/tryOnDetails/tryOnDetails";
import TryOn from "../../assets/Try-on.png";
import tryOnVideo from "../../assets/tryOnVideo.mp4";

function TryOnDetailsPage() {
  const data = {
    name: "Try-On",
    tagline: "See it before you wear it.",
    heroImage: TryOn,
    problem:
      "Online shopping lacks physical certainty. Customers cannot truly see how a garment will look on them before purchasing.",
    solution:
      "Try-On uses AI-powered image generation to merge user photos with selected garments, producing realistic previews in seconds.",
    techStack: [
      "React",
      "Javascript",
      "Node.js",
      "Express.js",
      "Firebase",
      "Firebase Auth",
      "Firestore",
      "AI Image Processing",
    ],
    architecture: [
      "Secure authentication flow with AWS Cognito and JWT validation.",
      "Image uploads handled via API Gateway and processed in memory using Multer.",
      "Garment and static assets distributed globally via CloudFront CDN.",
      "Scalable backend deployed with stateless API design.",
    ],
    liveDemo: tryOnVideo,
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

export default TryOnDetailsPage;
