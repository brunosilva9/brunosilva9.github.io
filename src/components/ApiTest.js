import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useRememberState } from "use-remember-state";

const ApiTest = () => {
  const { t } = useTranslation('global');
  const axios = require('axios');
  const [listPj, setListPj] = useRememberState("localPj",[]);

  useMemo(() => {
    axios.get('https://swapi.dev/api/people')
      .then(resp => {
        console.log(resp.data);
        setListPj(resp.data.results);
      });
  }, [listPj]);

  const characterList = useMemo(() => {
    return listPj.map(pj => <p>{pj.name}</p>);
  }, [listPj]);

  return (
    <div>
      <div style={{ textAlign: "center", fontWeight: "500" }}>
        {t("testApi.header")}
        {characterList}
      </div>
    </div>
  );
};

export default ApiTest;
