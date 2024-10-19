import React from "react";
import Meta from "components/Meta";
import ContactSection from "components/ContactSection";
import { useLanguage } from "contexts/languageContext";

function ContactPage(props) {
  const {t} = useLanguage()
  return (
    <>
      <Meta title={t.contactTitle} />
      <ContactSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title={t.contactTitle}
        subtitle={t.contactDescription} 
        buttonText={t.sendMessage}
        contactInfoEng={t.contactInfoEng} // Pass English contact info
        contactInfoAr={t.contactInfoAr} // Pass Arabic contact info
        email={t.email}
        buttonColor="primary"
        showNameField={true}
      />
    </>
  );
}

export default ContactPage;
