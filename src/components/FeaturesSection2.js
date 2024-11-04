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

// function FeaturesSection2(props) {
//   const { t } = useLanguage();
//   const classes = useStyles();

//   const items = [
//     {
//       title: t.environmentTitle, // Use translated text for Environment
//       body: t.environmentBody, // Use the same for the body
//       image: "/leaf.png",
//     },
//     {
//       title: t.versatilityTitle, // Translated text for Versatility
//       body: t.versatilityBody,
//       image: "/clock.png",
//     },
//     {
//       title: t.expertTeamTitle, // Translated text for Expert Team
//       body: t.expertTeamBody,
//       image: "/choose_box.png",
//     },
//     {
//       title: t.durablePrintsTitle, // Translated text for Durable Prints
//       body: t.durablePrintsBody,
//       image: "/value.png",
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

// export default FeaturesSection2;

import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { emphasize } from "@material-ui/core/styles/colorManipulator";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import AspectRatio from "components/AspectRatio";
import Image from "next/image";
import { useLanguage } from "contexts/languageContext";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: "black", // Set entire section background to black
  },
  gridItem: {
    textAlign: "center",
    padding: 0,
    margin: 0,
  },
  imageContainer: {
    margin: "0 auto",
    width: "150px", // Adjust this to control image size
    height: "150px", // Set a specific height for consistency
    backgroundColor: "black",
    display: "flex",
    
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "contain", // Adjust image to fit within bounds
      border: "none", // Ensure no border or shadow
      
    },
  },
  card: {
    backgroundColor: "transparent", // Make card background transparent
    // marginLeft: 15,
  },
  title: {
    color: "white", // Set title color to white
  },
  body: {
    color: "white", // Set body text color to white for readability
  },
}));

function FeaturesSection2(props) {
  const { t } = useLanguage();
  const classes = useStyles();

  const items = [
    {
      body: "Our vegan ink, meticulously crafted in the EU, ensures top-notch quality and sustainability.",
      // body: t.environmentBody,
      image: "/leaf.png",
    },
    {
      body: "Offers lightfast, true-to-color quality with ICC profiling, easy cleaning, and resistance to water and solvents.",
      // body: t.versatilityBody,
      image: "/clock.png",
    },
    {
      body: "Long-lasting prints that apply directly to walls—no drilling, no dust, and no need for frames.",
      // body: t.expertTeamBody,
      image: "/value.png",
    },
    {
      body: "​Capable of printing up to 4 meters in height and unlimited width, compatible with almost any surface and technique.",
      // body: t.durablePrintsBody,
      image: "/choose_box.png",
    },
  ];

  return (
    <Section
      className={classes.section}
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <Card raised={false} className={classes.card}>
          <Grid container={true} spacing={0}>
            {items.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} className={classes.gridItem} key={index}>
                <Box p={1}>
                  <div className={classes.imageContainer}>
                    <AspectRatio ratio={4 / 3}>
                      <img src={item.image} alt={item.title} />
                    </AspectRatio>
                  </div>
                  <Typography variant="h5" gutterBottom={true} className={classes.title}>
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1" className={classes.body}>
                    {item.body}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Card>
      </Container>
    </Section>
  );
}

export default FeaturesSection2;