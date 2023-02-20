import React from "react";

import { useTranslation } from "react-i18next";
import { useRememberState } from "use-remember-state";


const ApiTest = () => {
  const { t } = useTranslation('global');
  const axios = require('axios');
  var [listPj, setListPj] = useRememberState("localPj",[]);
  axios.get('https://swapi.dev/api/people')
    .then(resp => {
      console.log(resp.data);
      setListPj(resp.data.results);
    })


  return (
    <div>
      <div style={{ textAlign: "center", fontWeight: "500" }}>
        {t("testApi.header")}
        {listPj.map((pj) => {
          return (
            <p>{pj.name}</p>
          )
        })}
      </div>
    </div>

  );

};


export default ApiTest;