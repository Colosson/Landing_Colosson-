"use client";

import { useLanguage, type Language } from "./LanguageContext";

const options: Language[] = ["en", "es"];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const label =
    language === "es" ? "Cambiar idioma" : "Change language";

  return (
    <div className="language-switcher" role="group" aria-label={label}>
      {options.map((option) => (
        <button
          aria-label={
            option === "es" ? "Cambiar a español" : "Switch to English"
          }
          aria-pressed={language === option}
          className={language === option ? "is-active" : ""}
          key={option}
          onClick={() => setLanguage(option)}
          type="button"
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
