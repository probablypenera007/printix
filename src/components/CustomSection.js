// CustomSection.js
import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { emphasize } from "@material-ui/core/styles/colorManipulator";
import capitalize from "@material-ui/core/utils/capitalize";

const useStyles = makeStyles((theme) => ({
  //   root: {
  //     position: "relative",
  //     "& > .MuiContainer-root": {
  //       position: "relative",
  //     },
  //   },
  //   ...[
  //     ["default", theme.palette.background.default],
  //     ["light", emphasize(theme.palette.background.default, 0.03)],
  //     ["primary", theme.palette.primary.main],
  //     ["secondary", theme.palette.secondary.main],
  //   ].reduce((acc, [name, value]) => {
  //     acc[`color${capitalize(name)}`] = {
  //       backgroundColor: value,
  //       color: theme.palette.getContrastText(value),
  //       [`& + &`]: {
  //         borderTop: `1px solid ${emphasize(value, 0.09)}`,
  //       },
  //     };
  //     return acc;
  //   }, {}),
  //   colorInherit: {
  //     color: "inherit",
  //   },
  //   colorTransparent: {
  //     backgroundColor: "transparent",
  //     color: "inherit",
  //   },
}));

const CustomSection = ({
  bgColor = "default",
  bgVideo,
  bgVideoOpacity = 0.8, // Control video opacity
  size = "normal",
  className,
  children,
  style,
  ...otherProps
}) => {
  const classes = useStyles();

  // Define padding based on size prop
  const verticalPadding = {
    normal: { xs: 6 },
    medium: { xs: 6, sm: 10 },
    large: { xs: 6, sm: 20 },
    auto: 0,
  }[size];

  return (
    <Box
      component="section"
      py={verticalPadding}
      className={`${classes.root} ${
        classes[`color${capitalize(bgColor)}`]
      } ${className}`}
      style={{
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
      {...otherProps}
    >
      {/* Background video */}
      {bgVideo && (
        <video
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
            opacity: bgVideoOpacity, // Control opacity of the video
          }}
          autoPlay
          loop
          muted
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Render children inside the section */}
      {children}
    </Box>
  );
};

export default CustomSection;
