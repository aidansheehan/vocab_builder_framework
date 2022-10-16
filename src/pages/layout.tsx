import React from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/header/header.component";

const Layout = () => {
    return (
        <>
            <HeaderComponent />
            <Outlet />
        </>

    );
};

export default Layout;