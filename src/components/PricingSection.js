import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CheckIcon from "@material-ui/icons/Check";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import { useAuth } from "util/auth";
import { useLanguage } from "contexts/languageContext";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: theme.spacing(3),
  },
  price: {
    display: "flex",
    alignItems: "baseline",
  },
  listItem: {
    paddingTop: 2,
    paddingBottom: 2,
  },
  perkIcon: {
    minWidth: 34,
    color: theme.palette.success.main,
  },
}));

function PricingSection(props) {
  const { t } = useLanguage(); // Access the translations
  const classes = useStyles();
  const auth = useAuth();

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={t.pricingTitle} // "Pricing"
          subtitle={t.pricingSubtitle} // "Affordable Wall Printing for Every Project Size"
          size={4}
          textAlign="center"
        />

        <Typography variant="body1" align="center" margin-left="40" paragraph>
          {t.pricingDescription} {/* "At Printix, we offer competitive pricing..." */}
        </Typography>

        <Grid container={true} justifyContent="center" spacing={4}>
          {/* Plan 1 */}
          <Grid item={true} xs={12} md={4}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography variant="h6" component="h2">
                  {t.price1Title} {/* "1-2 sq meters" */}
                </Typography>
                <Box className={classes.price} mt={1}>
                  <Typography variant="h3">{t.price1Price}</Typography>
                </Box>

                <List aria-label="perks">
                  <ListItem className={classes.listItem} disableGutters={true}>
                    <ListItemIcon className={classes.perkIcon}>
                      <CheckIcon />
                    </ListItemIcon>
                    <Typography variant="body2">{t.price1Perks}</Typography>
                  </ListItem>
                </List>

                <Box mt="auto" pt={3}>
                  <Link
                    href={
                      auth.user
                        ? `/purchase/plan1`
                        : `/auth/signup?next=/purchase/plan1`
                    }
                    passHref={true}
                  >
                    <Button
                      component="a"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth={true}
                    >
                      {t.getStarted} {/* "Get Started" */}
                    </Button>
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Plan 2 */}
          <Grid item={true} xs={12} md={4}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography variant="h6" component="h2">
                  {t.price2Title} {/* "2-4 sq meters" */}
                </Typography>
                <Box className={classes.price} mt={1}>
                  <Typography variant="h3">{t.price2Price}</Typography>
                </Box>

                <List aria-label="perks">
                  <ListItem className={classes.listItem} disableGutters={true}>
                    <ListItemIcon className={classes.perkIcon}>
                      <CheckIcon />
                    </ListItemIcon>
                    <Typography variant="body2">{t.price2Perks}</Typography>
                  </ListItem>
                </List>

                <Box mt="auto" pt={3}>
                  <Link
                    href={
                      auth.user
                        ? `/purchase/plan2`
                        : `/auth/signup?next=/purchase/plan2`
                    }
                    passHref={true}
                  >
                    <Button
                      component="a"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth={true}
                    >
                      {t.getStarted} {/* "Get Started" */}
                    </Button>
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Plan 3 */}
          <Grid item={true} xs={12} md={4}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography variant="h6" component="h2">
                  {t.price3Title} {/* "4-6 sq meters" */}
                </Typography>
                <Box className={classes.price} mt={1}>
                  <Typography variant="h3">{t.price3Price}</Typography>
                </Box>

                <List aria-label="perks">
                  <ListItem className={classes.listItem} disableGutters={true}>
                    <ListItemIcon className={classes.perkIcon}>
                      <CheckIcon />
                    </ListItemIcon>
                    <Typography variant="body2">{t.price3Perks}</Typography>
                  </ListItem>
                </List>

                <Box mt="auto" pt={3}>
                  <Link
                    href={
                      auth.user
                        ? `/purchase/plan3`
                        : `/auth/signup?next=/purchase/plan3`
                    }
                    passHref={true}
                  >
                    <Button
                      component="a"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth={true}
                    >
                      {t.getStarted} {/* "Get Started" */}
                    </Button>
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box mt={4}>
          <Typography variant="body2" align="center">
            {t.priceNote} {/* "For projects larger than 6 sq meters..." */}
          </Typography>
          <Typography variant="body2" align="center">
            {t.priceDisclaimer} {/* "Prices include consultation..." */}
          </Typography>
        </Box>
      </Container>
    </Section>
  );
}

export default PricingSection;