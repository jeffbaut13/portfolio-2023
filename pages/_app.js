import Head from "next/head";
import { Fragment } from "react";
import "../styles/globals.css";
import "../public/css/basic.css";
import "../public/css/layout.css";
import "../public/css/magnific-popup.css";
import "../public/css/animate.css";
import "../public/css/jarallax.css";
import "../public/css/fontawesome.css";
import "../public/css/brands.css";
import "../public/css/solid.css";
import "../public/css/swiper.css";
import "../public/css/swiper.css";
import "../public/css/swiper.css";
import "../public/css/swiper.css";
import IndexOnePage from "./index_onepage";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Portfolio Jeff</title>

        <link rel="shortcut icon" href="images/favicons/favicon.ico" />
      </Head>
      <IndexOnePage />
    </Fragment>
  );
}

export default MyApp;
