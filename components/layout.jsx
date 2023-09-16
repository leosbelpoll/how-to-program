import "bootstrap-icons/font/bootstrap-icons.css";

import Head from "next/head";
import Script from "next/script";
import React from "react";
import Nav from "./nav";
import Footer from "./footer";

function Layout({ children }) {
    return (
        <>
            <Nav />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default Layout;
