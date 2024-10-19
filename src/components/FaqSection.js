// import React from "react";
// import Container from "@material-ui/core/Container";
// import Accordion from "@material-ui/core/Accordion";
// import AccordionSummary from "@material-ui/core/AccordionSummary";
// import Typography from "@material-ui/core/Typography";
// import AccordionDetails from "@material-ui/core/AccordionDetails";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import { makeStyles } from "@material-ui/core/styles";
// import Section from "components/Section";
// import SectionHeader from "components/SectionHeader";

// const useStyles = makeStyles((theme) => ({
//   accordion: {
//     // Remove shadow
//     boxShadow: "none",
//     "&:before": {
//       // Remove default divider
//       display: "none",
//     },
//     // Add a custom border
//     "&:not(:last-child)": {
//       borderBottom: `1px solid ${theme.palette.divider}`,
//     },
//   },
//   expanded: {
//     margin: `0 !important`,
//   },
//   summary: {
//     minHeight: 78,
//   },
//   summaryContent: {
//     margin: "0 !important",
//   },
// }));

// function FaqSection(props) {
//   const classes = useStyles();

//   const items = [
//     {
//       question: "Integer ornare neque mauris?",
//       answer:
//         "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus. Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo.",
//     },
//     {
//       question: "Lorem ipsum dolor sit amet?",
//       answer:
//         "Nunc nulla mauris, laoreet vel cursus lacinia, consectetur sit amet tellus. Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo.",
//     },
//     {
//       question: "Suspendisse ut tincidunt?",
//       answer:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, metus et mattis ullamcorper. Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo.",
//     },
//     {
//       question: "Ut enim ad minim veniam?",
//       answer:
//         "Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo.",
//     },
//     {
//       question: "In velit mi, rhoncus dictum neque?",
//       answer:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
//     },
//   ];

//   return (
//     <Section
//       bgColor={props.bgColor}
//       size={props.size}
//       bgImage={props.bgImage}
//       bgImageOpacity={props.bgImageOpacity}
//     >
//       <Container maxWidth="md">
//         <SectionHeader
//           title={props.title}
//           subtitle={props.subtitle}
//           size={4}
//           textAlign="center"
//         />

//         {items.map((item, index) => (
//           <Accordion
//             classes={{
//               root: classes.accordion,
//               expanded: classes.expanded,
//             }}
//             key={index}
//           >
//             <AccordionSummary
//               classes={{
//                 root: classes.summary,
//                 content: classes.summaryContent,
//               }}
//               expandIcon={<ExpandMoreIcon />}
//               aria-controls={`faq-panel-${index}`}
//             >
//               <Typography variant="h6">{item.question}</Typography>
//             </AccordionSummary>
//             <AccordionDetails id={`faq-panel-${index}`}>
//               <Typography>{item.answer}</Typography>
//             </AccordionDetails>
//           </Accordion>
//         ))}
//       </Container>
//     </Section>
//   );
// }

// export default FaqSection;




import React from "react";
import Container from "@material-ui/core/Container";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import { useLanguage } from "contexts/languageContext"; // Assuming you're using this for translations

const useStyles = makeStyles((theme) => ({
  accordion: {
    // Remove shadow
    boxShadow: "none",
    "&:before": {
      // Remove default divider
      display: "none",
    },
    // Add a custom border
    "&:not(:last-child)": {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  },
  expanded: {
    margin: `0 !important`,
  },
  summary: {
    minHeight: 78,
  },
  summaryContent: {
    margin: "0 !important",
  },
}));

function FaqSection(props) {
  const classes = useStyles();
  const { t } = useLanguage(); // Get the translations

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container maxWidth="md">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />

        {/* Manually input each FAQ */}
        <Accordion classes={{ root: classes.accordion, expanded: classes.expanded }}>
          <AccordionSummary
            classes={{ root: classes.summary, content: classes.summaryContent }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="faq-panel-1"
          >
            <Typography variant="h6">{t.faqQuestion1}</Typography>
          </AccordionSummary>
          <AccordionDetails id="faq-panel-1">
            <Typography>{t.faqAnswer1}</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion classes={{ root: classes.accordion, expanded: classes.expanded }}>
          <AccordionSummary
            classes={{ root: classes.summary, content: classes.summaryContent }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="faq-panel-2"
          >
            <Typography variant="h6">{t.faqQuestion2}</Typography>
          </AccordionSummary>
          <AccordionDetails id="faq-panel-2">
            <Typography>{t.faqAnswer2}</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion classes={{ root: classes.accordion, expanded: classes.expanded }}>
          <AccordionSummary
            classes={{ root: classes.summary, content: classes.summaryContent }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="faq-panel-3"
          >
            <Typography variant="h6">{t.faqQuestion3}</Typography>
          </AccordionSummary>
          <AccordionDetails id="faq-panel-3">
            <Typography>{t.faqAnswer3}</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion classes={{ root: classes.accordion, expanded: classes.expanded }}>
          <AccordionSummary
            classes={{ root: classes.summary, content: classes.summaryContent }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="faq-panel-4"
          >
            <Typography variant="h6">{t.faqQuestion4}</Typography>
          </AccordionSummary>
          <AccordionDetails id="faq-panel-4">
            <Typography>{t.faqAnswer4}</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion classes={{ root: classes.accordion, expanded: classes.expanded }}>
          <AccordionSummary
            classes={{ root: classes.summary, content: classes.summaryContent }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="faq-panel-5"
          >
            <Typography variant="h6">{t.faqQuestion5}</Typography>
          </AccordionSummary>
          <AccordionDetails id="faq-panel-5">
            <Typography>{t.faqAnswer5}</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion classes={{ root: classes.accordion, expanded: classes.expanded }}>
          <AccordionSummary
            classes={{ root: classes.summary, content: classes.summaryContent }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="faq-panel-6"
          >
            <Typography variant="h6">{t.faqQuestion6}</Typography>
          </AccordionSummary>
          <AccordionDetails id="faq-panel-6">
            <Typography>{t.faqAnswer6}</Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Section>
  );
}

export default FaqSection;