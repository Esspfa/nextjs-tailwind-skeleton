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
        <title>Nextjs</title>
      </Head>
      <Header transparent={transparent} />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default PrimaryLayout;
