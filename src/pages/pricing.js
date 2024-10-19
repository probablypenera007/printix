import React from "react";
import Meta from "components/Meta";
import PricingSection from "components/PricingSection";
import { useLanguage } from "contexts/languageContext";

function PricingPage(props) {
  const {t} = useLanguage()
  return (
    <>
      <Meta title={t.pricingTitle} />
      <PricingSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title={t.pricingTitle}
        subtitle={t.pricingSubtitle}
      />
    </>
  );
}

export default PricingPage;
