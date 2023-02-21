import React from "react";

import { useTranslation } from "react-i18next";

const Introduction = () => {
  const { t } = useTranslation("global");
  return (
    <div>
      <div style={{ textAlign: "center", fontWeight: "500" }}>
        {t("intro.label")}
      </div>
      {t("details.label")}
    </div>
  );
};

export default Introduction;
