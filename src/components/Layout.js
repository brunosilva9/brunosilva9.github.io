import { Outlet, Link } from "react-router-dom";
import React from 'react'
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

const Layout = () => {
    const { t } = useTranslation('global');
    return (
        <>
            <LanguageSelector />
            <nav>
                <ul>
                    <li>
                        <Link to="/">{t("layaout.home" )}</Link>
                    </li>
                    <li>
                        <Link to="/ModalExampleModal">{t("layaout.modalExample" )}</Link>
                    </li>
                    <li>
                        <Link to="/ApiTest">{t("layaout.ApiTest" )}</Link>
                    </li>
                    <li>
                        <Link to="/MultiTap">{"Multi Tap"}</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
};

export default Layout;