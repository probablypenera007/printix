import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // Add bottom margin if element below
    "&:not(:last-child)": {
      marginBottom: "2rem",
    },
    position: "relative", // For positioning the header
    zIndex: 1, // Ensure the header is above the background
  },
  title: {
    textShadow: "1px 1px 2px rgba(255, 255, 255, 0.8)", // Light shadow for contrast
    fontWeight: 900, // Increase font weight
    color: "black", // Strong black color for better readability
  },
  subtitle: {
    // Subtitle text generally isn't very long
    maxWidth: 700,
    display: "inline-block",
    color: "black", // Change subtitle color to strong black
  },
}));

function SectionHeroHeader(props) {
  const classes = useStyles();
  const { subtitle, title, size, className, ...otherProps } = props;

  // Render nothing if no title or subtitle
  if (!title && !subtitle) {
    return null;
  }

  return (
    <Box
      component="header"
      className={classes.root + (className ? ` ${className}` : "")}
      {...otherProps}
    >
      {title && (
        <Typography
          variant={`h${size}`}
          gutterBottom={subtitle ? true : false}
          className={classes.title} // Apply title styles
        >
          {title}
        </Typography>
      )}

      {subtitle && (
        <Typography variant="subtitle1" className={classes.subtitle}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}

export default SectionHeroHeader;
