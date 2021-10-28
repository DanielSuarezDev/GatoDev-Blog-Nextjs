/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import { Header } from "../Header/Header";
import Head from "next/head";

export const Layout = (props) => {
  return (
    <>
      <Head>
        <html lang="es" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,100&display=swap"
          rel="stylesheet"
        />
        <title>Gato Dev</title>
      </Head>
      <Header />
      <main>{props.children}</main>
    </>
  );
};
