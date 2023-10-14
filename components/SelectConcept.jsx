import React, { useContext } from "react";
import { DARK_THEME, LanguageContext, ThemeContext } from "./layout";

export function SelectConcept({ text }) {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <img
        src="/images/select.png"
        alt="Seleccione runta"
        width={"30%"}
        className="mb-5 opacity-25"
        style={
          ...(theme === DARK_THEME ? {
                filter: "invert(1)"
          } : {})
        }
      />
      <h4>{text}</h4>
    </>
  );
}
