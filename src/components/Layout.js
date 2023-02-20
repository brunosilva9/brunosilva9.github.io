import { Link, Outlet } from "react-router-dom";
import { Navbar, Nav, NavItem, Container } from "reactstrap";
import React from 'react'
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

const Layout = () => {
    const { t } = useTranslation('global');
    return (
        <>
            <Navbar color="light" light expand="md" className="d-flex justify-content-between align-items-center">
                <Link to="/" className="navbar-brand">{t("layaout.home")}</Link>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <Link to="/ModalExampleModal" className="nav-link">{t("layaout.modalExample")}</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/ApiTest" className="nav-link">{t("layaout.ApiTest")}</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/MultiTap" className="nav-link">{"Multi Tap"}</Link>
                    </NavItem>
                </Nav>
                <Nav navbar>
                    <NavItem>
                        <LanguageSelector />
                    </NavItem>
                </Nav>
            </Navbar>
            <Container className="mt-3">
                <Outlet></Outlet>
            </Container>
        </>
    )
};

export default Layout;
