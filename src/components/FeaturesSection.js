// import React from "react";
// import Container from "@material-ui/core/Container";
// import Card from "@material-ui/core/Card";
// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// import { emphasize } from "@material-ui/core/styles/colorManipulator";
// import Section from "components/Section";
// import SectionHeader from "components/SectionHeader";
// import AspectRatio from "components/AspectRatio";
// import Image from "next/image";
// import { useLanguage } from "contexts/languageContext";

// const useStyles = makeStyles((theme) => ({
//   gridItem: {
//     // Add border that contrasts lightly with background color.
//     // We use boxShadow so that it's hidden around outer edge
//     // due to container <Card> having overflow: hidden
//     boxShadow: `1px 1px 0 0 ${emphasize(theme.palette.background.paper, 0.08)}`,
//     textAlign: "center",
//   },
//   imageContainer: {
//     margin: "0 auto",
//     maxWidth: "100%",
//     marginBottom: "30px",
//     "& img": {
//       width: "100%",
//     },
//   },
// }));

// function FeaturesSection(props) {
//   const { t } = useLanguage();
//   const classes = useStyles();

//   const items = [
//     {
//       title: t.environmentTitle, // Use translated text for Environment
//       body: t.environmentBody, // Use the same for the body
//       image: "/mountain.png",
//     },
//     {
//       title: t.versatilityTitle, // Translated text for Versatility
//       body: t.versatilityBody,
//       image: "/robot.png",
//     },
//     {
//       title: t.expertTeamTitle, // Translated text for Expert Team
//       body: t.expertTeamBody,
//       image: "/woman.png",
//     },
//     {
//       title: t.durablePrintsTitle, // Translated text for Durable Prints
//       body: t.durablePrintsBody,
//       image: "/machine.png",
//     },
//   ];

//   return (
//     <Section
//       bgColor={props.bgColor}
//       size={props.size}
//       bgImage={props.bgImage}
//       bgImageOpacity={props.bgImageOpacity}
//     >
//       <Container>
//         <SectionHeader
//           title={t.whyChooseTitle}
//           subtitle={props.subtitle}
//           size={4}
//           textAlign="center"
//         />
//         <Card raised={false}>
//           <Grid container={true}>
//             {items.map((item, index) => (
//               <Grid
//                 item={true}
//                 xs={12}
//                 md={6}
//                 className={classes.gridItem}
//                 key={index}
//               >
//                 <Box p={6}>
//                   <div className={classes.imageContainer}>
//                     <AspectRatio ratio={4 / 3}>
//                       <img src={item.image} alt={item.title} />
//                     </AspectRatio>
//                   </div>
//                   <Typography variant="h5" gutterBottom={true}>
//                     {item.title}
//                   </Typography>
//                   <Typography variant="subtitle1">{item.body}</Typography>
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//         </Card>
//       </Container>
//     </Section>
//   );
// }

// export default FeaturesSection;





import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Section from "components/Section";
import SectionHeader from "./SectionHeader";
import AspectRatio from "components/AspectRatio";
import { useLanguage } from "contexts/languageContext";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: "#f5f5f5", // Light background for the whole section
    padding: theme.spacing(8, 0), // Increase top and bottom padding for more space
  },
  gridContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "100%", // Ensure full width usage
    minHeight: "70vh", // Set minimum height for each feature section
  },
  imageContainer: {
    width: "100%",
    "& img": {
      width: "110%",
      height: "auto",
      objectFit: "cover",
      borderRadius: theme.shape.borderRadius,
    },
  },
  textContainer: {
    padding: theme.spacing(6), // Increase padding around text for more emphasis
  },
  title: {
    fontSize: "2rem", // Larger title font for emphasis
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
  },
  body: {
    fontSize: "1.2rem", // Slightly larger body text for readability
    color: theme.palette.text.secondary,
  },
}));

function FeaturesSection(props) {
  const { t } = useLanguage();
  const classes = useStyles();

  const items = [
    {
      title: t.environmentTitle, // Use translated text for Environment
      body: t.environmentBody, // Use the same for the body
      image: "/mountain.png",
    },
    {
      title: t.versatilityTitle, // Translated text for Versatility
      body: t.versatilityBody,
      image: "/robot.png",
    },
    {
      title: t.expertTeamTitle, // Translated text for Expert Team
      body: t.expertTeamBody,
      image: "/woman.png",
    },
    {
      title: t.durablePrintsTitle, // Translated text for Durable Prints
      body: t.durablePrintsBody,
      image: "/machine.png",
    },
  ];

  return (
    <Section className={classes.section}>
             <SectionHeader
           title={t.whyChooseTitle}
           subtitle={props.subtitle}
           size={4}
           textAlign="center"
         />
      <Container maxWidth="xl">
        {items.map((item, index) => (
          <Grid
            container
            spacing={0}
            className={classes.gridContainer}
            key={index}
            direction={index % 2 === 0 ? "row" : "row-reverse"} // Alternate image/text position
          >
            <Grid item xs={12} md={6}>
              <Box className={classes.imageContainer}>
                <AspectRatio ratio={4 / 5}>
                  <img src={item.image} alt={item.title} />
                </AspectRatio>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} className={classes.textContainer}>
              <Typography variant="h5" className={classes.title}>
                {item.title}
              </Typography>
              <Typography variant="body1" className={classes.body}>
                {item.body}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Container>
    </Section>
  );
}

export default FeaturesSection;