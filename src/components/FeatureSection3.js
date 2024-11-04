// import React from "react";
// import Container from "@material-ui/core/Container";
// import Card from "@material-ui/core/Card";
// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// import Section from "components/Section";
// import SectionHeader from "components/SectionHeader";
// import AspectRatio from "components/AspectRatio";
// import { useLanguage } from "contexts/languageContext";

// const useStyles = makeStyles((theme) => ({
//   gridItem: {
//     textAlign: "center",
//   },
//   imageContainer: {
//     margin: "0 auto",
//     width: "100%", // Ensures image takes full width of container
//     height: "auto",
//     maxWidth: "280px", // Adjust to resize images as needed
//     "& img": {
//       width: "100%",
//       height: "auto",
//       objectFit: "contain", // Ensure images fit within container without being cropped
//       border: "none", // Remove any borders around images
//       boxShadow: "none", // Remove any shadow
//     },
//   },
//   card: {
//     backgroundColor: "transparent", // Make card background transparent
//   },
// }));

// function FeaturesSection3(props) {
//   const { t } = useLanguage();
//   const classes = useStyles();

//   const items = [
//     {
//       image: "/wood.png",
//     },
//     {
//       image: "/brick.png",
//     },
//     {
//       image: "/tiles.png",
//     },
//     {
//       image: "/fabric.png",
//     },
//     {
//       image: "/concrete.png",
//     },
//     {
//       image: "/poster.png",
//     },
//     {
//       image: "/metal.png",
//     },
//     {
//       image: "/leather.png",
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
//           title="Surfaces we print on" // Set fixed title
//           size={4}
//           textAlign="center"
//         />
//         <Card raised={false} className={classes.card}>
//           <Grid container spacing={4} justify="center">
//             {items.map((item, index) => (
//               <Grid
//                 item
//                 xs={12}
//                 sm={6}
//                 md={3} // Set columns for large screens to 4 across
//                 className={classes.gridItem}
//                 key={index}
//               >
//                 <Box p={1}>
//                   <div className={classes.imageContainer}>
//                     <AspectRatio ratio={4 / 3}>
//                       <img src={item.image} alt={`Surface ${index + 1}`} />
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

// export default FeaturesSection3;

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
    backgroundColor: "#f5f5f5", // Set a very light gray background color for the section
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  gridItem: {
    textAlign: "center",
  },
  imageContainer: {
    margin: "0 auto",
    width: "100%", // Ensures image takes full width of container
    height: "auto",
    maxWidth: "280px", // Adjust to resize images as needed
    "& img": {
      width: "100%",
      height: "auto",
      objectFit: "contain", // Ensure images fit within container without being cropped
      border: "none", // Remove any borders around images
      boxShadow: "none", // Remove any shadow
    },
  },
  card: {
    backgroundColor: "transparent", // Make card background transparent
  },
}));

function FeaturesSection3(props) {
  const { t } = useLanguage();
  const classes = useStyles();

  const items = [
    {
      image: "/wood.png",
    },
    {
      image: "/brick.png",
    },
    {
      image: "/tiles.png",
    },
    {
      image: "/fabric.png",
    },
    {
      image: "/concrete.png",
    },
    {
      image: "/st-glass.png",
    },
    {
      image: "/metal.png",
    },
    {
      image: "/leather.png",
    },
  ];

  return (
    <Section
      className={classes.section} // Apply the light gray background style here
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title="Surfaces we print on" // Set fixed title
          size={4}
          textAlign="center"
        />
        <Card raised={false} className={classes.card}>
          <Grid container spacing={4} justify="center">
            {items.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3} // Set columns for large screens to 4 across
                className={classes.gridItem}
                key={index}
              >
                <Box p={1}>
                  <div className={classes.imageContainer}>
                    <AspectRatio ratio={4 / 3}>
                      <img src={item.image} alt={`Surface ${index + 1}`} />
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

export default FeaturesSection3;
