// import React from "react";
// import Container from "@material-ui/core/Container";
// import Box from "@material-ui/core/Box";
// import Button from "@material-ui/core/Button";
// import Link from "next/link";
// import Section from "components/Section";
// import SectionHeader from "components/SectionHeader";

// function HeroSection(props) {
//   return (
//     <Section
//       bgColor={props.bgColor}
//       size={props.size}
//       bgImage={props.bgImage}
//       bgImageOpacity={props.bgImageOpacity}
//     >
//       <Container>
//         <Box textAlign="center">
//           <SectionHeader
//             title={props.title}
//             subtitle={props.subtitle}
//             size={4}
//           />
//           <Link href={props.buttonPath} passHref={true}>
//             <Button variant="contained" size="large" color={props.buttonColor}>
//               {props.buttonText}
//             </Button>
//           </Link>
//         </Box>
//       </Container>
//     </Section>
//   );
// }

// export default HeroSection;



import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";

function HeroSection(props) {
  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      // Comment out bgImage since we will handle the video background in a different way
      // bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Video Background */}
      {props.bgVideo ? (
        <video
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
            objectFit: "cover",
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
          <SectionHeader
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