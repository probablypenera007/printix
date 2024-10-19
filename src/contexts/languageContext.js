// LanguageContext.js
import React, { useState, createContext, useContext } from "react";
import { translations } from "../util/translations"; // Import your translations

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Default to English

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "ar" : "en"));
  };

  
  const t = translations[language]; // Get the appropriate translations
  // Create a function to get the translation based on the key
  // const t = (key) => translations[language][key] || key; // Fallback to the key itself if no translation is found

  // Function to get translation by key
  // const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};