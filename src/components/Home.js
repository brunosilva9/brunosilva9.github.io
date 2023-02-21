import React from "react";
import Multitap from "./Multitap";

import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("global");
  return (
    <div>
      <div style={{ textAlign: "center", fontWeight: "500" }}>
        {t("home.details")}
      </div>
      <Multitap />
    </div>
  );
};

export default Home;
