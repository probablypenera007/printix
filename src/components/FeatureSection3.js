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
  gridItem: {
    // Add border that contrasts lightly with background color.
    // We use boxShadow so that it's hidden around outer edge
    // due to container <Card> having overflow: hidden
    boxShadow: `1px 1px 0 0 ${emphasize(theme.palette.background.paper, 0.08)}`,
    textAlign: "center",
  },
  imageContainer: {
    margin: "0 auto",
    maxWidth: "100%",
    marginBottom: "30px",
    "& img": {
      width: "100%",
    },
  },
}));

function FeaturesSection3(props) {
  const { t } = useLanguage();
  const classes = useStyles();

  const items = [
    {
      title: t.environmentTitle, // Use translated text for Environment
      body: t.environmentBody, // Use the same for the body
      image: "/wood.png",
    },
    {
      title: t.versatilityTitle, // Translated text for Versatility
      body: t.versatilityBody,
      image: "/brick.png",
    },
    {
      title: t.expertTeamTitle, // Translated text for Expert Team
      body: t.expertTeamBody,
      image: "/tiles.png",
    },
    {
      title: t.durablePrintsTitle, // Translated text for Durable Prints
      body: t.durablePrintsBody,
      image: "/fabric.png",
    },
    {
        title: t.environmentTitle, // Use translated text for Environment
        body: t.environmentBody, // Use the same for the body
        image: "/concrete.png",
      },
      {
        title: t.versatilityTitle, // Translated text for Versatility
        body: t.versatilityBody,
        image: "/poster.png",
      },
      {
        title: t.expertTeamTitle, // Translated text for Expert Team
        body: t.expertTeamBody,
        image: "/metal.png",
      },
      {
        title: t.durablePrintsTitle, // Translated text for Durable Prints
        body: t.durablePrintsBody,
        image: "/leather.png",
      },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={t.whyChooseTitle}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <Card raised={false}>
          <Grid container={true}>
            {items.map((item, index) => (
              <Grid
                item={true}
                xs={12}
                md={6}
                className={classes.gridItem}
                key={index}
              >
                <Box p={6}>
                  <div className={classes.imageContainer}>
                    <AspectRatio ratio={4 / 3}>
                      <img src={item.image} alt={item.title} />
                    </AspectRatio>
                  </div>
                  <Typography variant="h5" gutterBottom={true}>
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1">{item.body}</Typography>
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
