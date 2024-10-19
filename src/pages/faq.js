import React from "react";
import Meta from "components/Meta";
import FaqSection from "components/FaqSection";
import CtaSection from "components/CtaSection";
import { useLanguage } from "contexts/languageContext";

function FaqPage(props) {
  const {t} = useLanguage()
  return (
    <>
      <Meta title={t.faqTitle} />
      <FaqSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title={t.faqTitle}
        subtitle=""
      />
      <CtaSection
        bgColor="primary"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title={t.contactTitle}
        subtitle=""
        buttonText={t.getStarted}
        buttonColor="default"
        buttonPath="/pricing"
      />
    </>
  );
}

export default FaqPage;
