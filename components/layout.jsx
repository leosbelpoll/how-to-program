import "bootstrap-icons/font/bootstrap-icons.css";
import { GoogleAnalytics } from "nextjs-google-analytics";

import Head from "next/head";
import Script from "next/script";
import React from "react";
import Nav from "./nav";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
          crossorigin="anonymous"
        ></link>
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
        crossorigin="anonymous"
      />
      <body>
        <GoogleAnalytics trackPageViews />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default Layout;
