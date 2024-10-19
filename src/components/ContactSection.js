// import React from "react";
// import Container from "@material-ui/core/Container";
// import Section from "components/Section";
// import SectionHeader from "components/SectionHeader";
// import Contact from "components/Contact";

// function ContactSection(props) {
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
//         <Contact
//           showNameField={props.showNameField}
//           buttonText={props.buttonText}
//           buttonColor={props.buttonColor}
//         />
//       </Container>
//     </Section>
//   );
// }

// export default ContactSection;



import React from "react";
import Container from "@material-ui/core/Container";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import Contact from "components/Contact";

function ContactSection(props) {
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
        <Contact
          showNameField={props.showNameField}
          buttonText={props.buttonText}
          buttonColor={props.buttonColor}
        />
        {/* Add contact details like English/Arabic contact numbers and email */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <p>{props.contactInfoEng}</p>
          <p>{props.contactInfoAr}</p>
          <p>{props.email}</p>
        </div>
      </Container>
    </Section>
  );
}

export default ContactSection;