import React from "react";

import { useTranslation } from "react-i18next";
import { useRememberState } from "use-remember-state";
import { useEffect } from "react";

const LanguageSelector = () => {
  const { i18n } = useTranslation('global');
  const [lng, setLng] = useRememberState("lng", "es");

  useEffect(() => {
    i18n.changeLanguage(lng)
  }, [lng,i18n]);

  return (
    <div>
      <button onClick={() => setLng("es")}> ES </button>
      <button onClick={() => setLng("en")}> EN </button>
    </div>

  );

};
export default LanguageSelector;