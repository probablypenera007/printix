import React, { useRef, useEffect } from "react"; // Import useRef and useEffect
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import SectionHeroHeader from "./SectionHeaderHero";

function HeroSection(props) {
  const videoRef = useRef(null); // Create a ref for the video

  // Set the playback speed when the component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 4; // Set playback speed to 16
    }
  }, [props.bgVideo]); // Run effect when bgVideo changes

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Video Background */}
      {props.bgVideo ? (
        <video
          ref={videoRef} // Attach the ref to the video element
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "fill",
            zIndex: -1,
            opacity: props.bgImageOpacity || 1,
          }}
        >
          <source src={props.bgVideo} type="video/mp4" />
          {/* You can add fallbacks for other types of videos here */}
        </video>
      ) : (
        <div
          style={{
            backgroundImage: `url(${props.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            opacity: props.bgImageOpacity || 1,
          }}
        ></div>
      )}

      <Container>
        <Box textAlign="center">
          <SectionHeroHeader
            title={props.title}
            subtitle={props.subtitle}
            size={4}
          />
          <Link href={props.buttonPath} passHref={true}>
            <Button variant="contained" size="large" color={props.buttonColor}>
              {props.buttonText}
            </Button>
          </Link>
        </Box>
      </Container>
    </Section>
  );
}

export default HeroSection;
