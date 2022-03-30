/* eslint-disable @next/next/no-page-custom-font */
import React from 'react';
import Head from 'next/head';
import { useState } from 'react';
import Footer from './footer';
import Header from './header';
interface Props {
  children: any;
  transparent?: boolean;
}

const PrimaryLayout = ({ children, transparent }: Props) => {
  const [openCookieDrawer, setOpenCookieDrawer]: [boolean, Function] = useState(false);
  const [openCookieBottom, setOpenCookieBottom]: [boolean, Function] = useState(true);
  return (
    <div className="flex flex-col text-black justify-between">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,900&display=swap"
          rel="stylesheet"
        />
        <title>Wildman</title>
      </Head>
      <Header transparent={transparent} />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default PrimaryLayout;
