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

// function Gallery(props) {
//   const { t } = useLanguage();
//   const classes = useStyles();

//   const items = [
//     {
//       image: "/truck.png",
//     },
//     {
//       image: "/astronaut.png",
//     },
//     {
//       image: "/mandala.png",
//     },
//     {
//       image: "/rainforest.png",
//     },
//     {
//         image: "/bird.png",
//       },
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
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//         </Card>
//       </Container>
//     </Section>
//   );
// }

// export default Gallery;




import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import AspectRatio from "components/AspectRatio";
import { useLanguage } from "contexts/languageContext";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: "#d3d3d3", // Light gray background color for the entire section
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  gridItem: {
    textAlign: "center",
  },
  imageContainer: {
    margin: "0 auto",
    width: "115%", // Ensures image takes full width of container
    maxWidth: "800px", // Control image size
    height: "auto",
    "& img": {
      width: "100%",
      height: "auto",
      objectFit: "contain", // Prevent image cropping
      border: "none",
      boxShadow: "none",
    },
  },
  card: {
    backgroundColor: "transparent", // Make card background transparent
  },
  sectionHeader: {
    marginBottom: theme.spacing(4), // Add space below the title
  },
}));

function Gallery(props) {
  const { t } = useLanguage();
  const classes = useStyles();

  const items = [
    {
      image: "/truck.png",
    },
    {
      image: "/astronaut.png",
    },
    {
      image: "/mandala.png",
    },
    {
      image: "/rainforest.png",
    },
    {
      image: "/bird.png",
    },
  ];

  return (
    <Section
      className={classes.section} // Apply background color and padding
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title="Our Notable Works" // Fixed title as shown in the screenshot
          size={4}
          textAlign="center"
          className={classes.sectionHeader}
        />
        <Card raised={false} className={classes.card}>
          <Grid container spacing={4} justify="center">
            {items.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4} // Adjust columns to fit 3 images per row on medium screens
                className={classes.gridItem}
                key={index}
              >
                <Box p={2}>
                  <div className={classes.imageContainer}>
                    <AspectRatio ratio={4 / 3}>
                      <img src={item.image} alt={`Notable work ${index + 1}`} />
                    </AspectRatio>
                  </div>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Card>
      </Container>
    </Section>
  );
}

export default Gallery;