import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useRememberState } from "use-remember-state";
import Container from "./Container";

const ApiTest = () => {
  const { t } = useTranslation("global");
  const axios = require("axios");
  const [listPj, setListPj] = useRememberState("localPj", []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then((resp) => {
        setListPj(resp.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>{t("testApi.loading")}</div>;
  }

  return (
    <Container>
      <div>
        <h1>{t("testApi.header")}</h1>
        <div style={{ textAlign: "center", fontWeight: "500" }}>
          {listPj.map((pj) => {
            //console.log(pj)
            return <p key={pj.name}>{pj.name}</p>;
          })}
        </div>
      </div>
    </Container>
  );
};
export default ApiTest;
