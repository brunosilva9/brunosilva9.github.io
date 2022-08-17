import React from "react";

import { useTranslation } from "react-i18next";
import { useRememberState } from "use-remember-state";
import { useEffect } from "react";
import { Dropdown } from 'semantic-ui-react'


const languageOptions = [
  { key: 'English', text: 'English', value: 'en', flag: "ireland" },
  { key: 'Spanish', text: 'Español', value: 'es', flag: "chile" },
]


const NavBar = () => {
  const { i18n } = useTranslation('global');
  const [lng, setLng] = useRememberState("lng", "es");

  useEffect(() => {
    i18n.changeLanguage(lng)
  }, [lng, i18n]);

  return (
    <div>
      <div class="ui large vertically attached inverted menu">
        <div class='right floated item'>
          <Dropdown
            button
            className='icon'
            floating
            labeled
            icon='world'
            //options={languageOptions}
            search
            text='Select Language'
          >
            <Dropdown.Menu>
              {languageOptions.map(lang => (

                <Dropdown.Item
                  key={lang.key}
                  flag={lang.flag}
                  value={lang.value}
                  text={lang.text}
                  onClick={() => setLng(lang.value)}

                />
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>

  );

};
export default NavBar;
