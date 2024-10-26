import React from "react";
import Meta from "components/Meta";
import HeroSection2 from "components/HeroSection2";
import StatsSection from "components/StatsSection";
import TeamBiosSection from "components/TeamBiosSection";
import CtaSection from "components/CtaSection";
import { useLanguage } from "contexts/languageContext";

function AboutPage(props) {
  const {t} = useLanguage()
  return (
    <>
      <Meta title="About" description="Learn about our company and team" />
      <HeroSection2
        bgColor="default"
        size="large"
        bgImage=""
        bgImageOpacity={1}
        title="Printix.AE"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!"
      />
      <StatsSection
        bgColor="light"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
      />
      <TeamBiosSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Meet the Team"
        subtitle=""
      />
      <CtaSection
        bgColor="primary"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title={t.contactTitle}
        subtitle=""
        buttonText="Get Started"
        buttonColor="default"
        buttonPath="/pricing"
      />
    </>
  );
}

export default AboutPage;
