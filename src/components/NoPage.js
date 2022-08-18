import React from "react";

import { useTranslation } from "react-i18next";


const NoPage = () => {
  const { t } = useTranslation('global');
  return (
    <div>
      <div style={{ textAlign: "center", fontWeight: "500" }}>
        {t("404.details")}
      </div>
    </div>

  );

};


export default NoPage;