import { Box, Typography, Grid, Card } from "@mui/material";
import React from "react";

import EndlessSummer from "../../assets/EndlessSummer.mp3";
import InAPerfectWorld from "../../assets/InAPerfectWorld.mp3";
import Yesterday from "../../assets/Yesterday.mp3";
import Fire from "../../assets/Fire.mp3";
import MemoryLane from "../../assets/MemoryLane.mp3";

import YesterdayImage from "../../assets/YesterdayImage.png";
import InAPerfectWorldImage from "../../assets/InAPerfectWorldImage.png";
import FireImage from "../../assets/FireImage.png";
import EndlessSummerVideo from "../../assets/EndlessSummerVideo.mp4";
import { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VideoModal from "../videoModal/videoModal";
import EndlessSummerTumbnail from "../../assets/EndlessSummerThumbnail.jpg";
import EndlessSummerImage from "../../assets/EndlessSummer.jpg";
import MemoryLaneImage from "../../assets/MemoryLane.jpg";

function Fun() {
  const [openVideo, setOpenVideo] = useState(false);
  const featuredVideo = EndlessSummerVideo;

  const songs = [
    {
      title: "Endless Summer",
      description: "Electro house remix.",
      src: EndlessSummer,
      cover: EndlessSummerImage,
    },
    {
      title: "In A Perfect World",
      description: "Emotional remix.",
      src: InAPerfectWorld,
      cover: InAPerfectWorldImage,
    },
    {
      title: "Yesterday",
      description: "Atmospheric remix.",
      src: Yesterday,
      cover: YesterdayImage,
    },
    {
      title: "Fire",
      description: "Energetic remix.",
      src: Fire,
      cover: FireImage,
    },
    {
      title: "Memory Lane",
      description: "Melodic remix.",
      src: MemoryLane,
      cover: MemoryLaneImage,
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #ffffff 0%, #f5f5f7 40%, #ececf1 100%)",
        px: { xs: 3, md: 8 },
        py: { xs: 10, md: 16 },
        opacity: 0,
        animation: "pageReveal 1.2s ease forwards",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          maxWidth: 850,
          mx: "auto",
          mb: 16,
          opacity: 0,
          animation: "fadeBlurUp 1.4s cubic-bezier(.22,1,.36,1) forwards",
          animationDelay: "0.2s",
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
          Music
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "18px", md: "22px" },
            color: "#6e6e73",
            mt: 4,
            lineHeight: 1.7,
          }}
        >
          Music has always been more than a hobby to me. I love listening,
          playing instruments, and most of all, immersing myself in the creative
          process of building sound from nothing. Creating music feels similar
          to building software — it starts with an idea, evolves through
          experimentation, and becomes something deeply personal.
        </Typography>
      </Box>
      <Box
        sx={{
          maxWidth: 750,
          mx: "auto",
          mb: 20,
          textAlign: "center",
          opacity: 0,
          animation: "fadeBlurUp 1.4s cubic-bezier(.22,1,.36,1) forwards",
          animationDelay: "0.5s",
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#86868b",
            mb: 2,
          }}
        >
          Music Video
        </Typography>

        <Card
          onClick={() => setOpenVideo(true)}
          sx={{
            position: "relative",
            borderRadius: "36px",
            overflow: "hidden",
            cursor: "pointer",
            boxShadow: "0 40px 120px rgba(0,0,0,0.15)",
            transition: "all .8s cubic-bezier(.22,1,.36,1)",
            "&:hover": {
              transform: "scale(1.02)",
              boxShadow: "0 60px 160px rgba(0,0,0,0.25)",
            },
          }}
        >
          <Box
            component="img"
            src={EndlessSummerTumbnail}
            sx={{
              width: "100%",
              height: 400,
              objectFit: "cover",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all .6s cubic-bezier(.22,1,.36,1)",
            }}
          >
            <Box
              sx={{
                width: 90,
                height: 90,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(20px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all .5s cubic-bezier(.22,1,.36,1)",
                "&:hover": {
                  transform: "scale(1.1)",
                  background: "rgba(255,255,255,0.25)",
                },
              }}
            >
              <PlayArrowIcon sx={{ fontSize: 50, color: "#fff" }} />
            </Box>
          </Box>
        </Card>

        <Typography
          sx={{
            mt: 5,
            fontSize: "18px",
            color: "#6e6e73",
            maxWidth: 600,
            mx: "auto",
            lineHeight: 1.8,
          }}
        >
          An uplifting remix of Endless Summer by Alan Walker & Zak Abel,
          blending energetic beats with dreamy summer vibes. A track that
          captures the feeling of freedom, nostalgia, and endless golden nights.
          🎧
        </Typography>

        {openVideo && (
          <VideoModal
            open={openVideo}
            videoSrc={featuredVideo}
            onClose={() => setOpenVideo(false)}
          />
        )}
      </Box>

      <Grid
        container
        spacing={8}
        sx={{
          width: "100%",
          maxWidth: 1100,
          mx: "auto",
        }}
      >
        {songs.map((song, index) => (
          <Grid size={12} key={index}>
            <Card
              sx={{
                p: 5,
                borderRadius: "28px",
                background: "rgba(255,255,255,0.65)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
                transition: "all .6s cubic-bezier(.22,1,.36,1)",
                opacity: 0,
                animation: "fadeUp 1s cubic-bezier(.22,1,.36,1) forwards",
                animationDelay: `${0.8 + index * 0.15}s`,
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 40px 100px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 4,
                  alignItems: "center",
                  flexDirection: { xs: "column", md: "row" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <Box
                  component="img"
                  src={song.cover}
                  alt={song.title}
                  sx={{
                    width: 110,
                    height: 110,
                    borderRadius: "22px",
                    objectFit: "cover",
                    boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
                  }}
                />

                <Box sx={{ flex: 1 }}>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#1d1d1f",
                    }}
                  >
                    {song.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#6e6e73",
                      mb: 3,
                    }}
                  >
                    {song.description}
                  </Typography>

                  <Box
                    component="audio"
                    controls
                    src={song.src}
                    sx={{
                      width: "100%",
                      borderRadius: "16px",
                    }}
                  />
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <style>
        {`
          @keyframes pageReveal {
            from { opacity: 0; }
            to { opacity: 1; }
          }

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

          @keyframes fadeBlurUp {
            from {
              opacity: 0;
              transform: translateY(40px);
              filter: blur(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0);
            }
          }
        `}
      </style>
    </Box>
  );
}

export default Fun;
