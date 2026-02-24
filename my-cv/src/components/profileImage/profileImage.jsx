import React from "react";
import { Box } from "@mui/material";

function ProfileImage({ src }) {
  return (
    <Box
      component="img"
      src={src}
      alt="Jean Aguilar"
      sx={{
        width: 200,
        height: 200,
        objectFit: "cover",
        borderRadius: 4,
        boxShadow: `
          0 20px 60px rgba(0,0,0,0.08),
          0 8px 24px rgba(0,0,0,0.06)
        `,
        transition: "all 0.6s cubic-bezier(.2,.8,.2,1)",
        "&:hover": {
          transform: "translateY(-6px) scale(1.02)",
          boxShadow: `
            0 35px 90px rgba(0,0,0,0.12),
            0 15px 40px rgba(0,0,0,0.08)
          `,
        },
      }}
    />
  );
}

export default ProfileImage;
