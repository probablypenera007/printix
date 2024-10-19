import React from "react";
import Meta from "components/Meta";
import HeroSection from "components/HeroSection";
import FeaturesSection from "components/FeaturesSection";
import NewsletterSection from "components/NewsletterSection";
import CtaSection from "components/CtaSection";
import { useLanguage } from "contexts/languageContext";

function IndexPage(props) {
  const { t } = useLanguage(); // Use the translations

  return (
    <>
      <Meta />
           <HeroSection
        bgColor="primary"
        size="large"
        bgImage="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1600&h=800&q=80"
        bgImageOpacity={0.3}
        title={t.mainPageTitle} // Translated title
        subtitle={t.mainPageSubtitle} // Translated subtitle
        buttonText={t.getStarted} // Translated button text
        buttonColor="default"
        buttonPath="/pricing"
      />
          <FeaturesSection
        bgColor="default"
        size="medium"
        title={t.featuresTitle} // Translated features title
        subtitle={t.featuresSubtitle} // Translated features subtitle
      />
      <NewsletterSection
        bgColor="light"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title={t.newsletterTitle}
        subtitle={t.newsletterSubtitle}
        buttonText={t.newsletterButtonText}
        buttonColor="primary"
        inputPlaceholder={t.newsletterInputPlaceholder}
        subscribedMessage={t.newsletterSubscribedMessage}
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

export default IndexPage;
