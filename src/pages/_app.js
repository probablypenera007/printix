import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import "util/analytics";
import Chat from "components/Chat";
import { ThemeProvider } from "util/theme";
import { QueryClientProvider } from "util/db";
import lightmodelogo from "../assets/logo_lightmode.png"
import darkmodelogo from "../assets/logo_darkmode.png"
import { LanguageProvider } from "contexts/languageContext";

//https://imgur.com/a/wNpLH8J darkmode
// https://imgur.com/a/Cis24Yu  lightmode

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider>
      <ThemeProvider>
      <LanguageProvider> 
        <Chat />
        <>
          <Navbar
            color="default"
            // logo="https://uploads.divjoy.com/logo.svg"
            logo={lightmodelogo}
            logoInverted={darkmodelogo}
          />

          <Component {...pageProps} />

          <Footer
            bgColor="default"
            size="medium"
            bgImage=""
            bgImageOpacity={1}
            description="A short description of what you do here"
            copyright={`© ${new Date().getFullYear()} Company`}
            logo={lightmodelogo}
            logoInverted={darkmodelogo}
            sticky={true}
          />
        </>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
