/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import styles from './layout.module.scss';

interface Props {
  transparent?: boolean;
}
export default function Header(props: Props) {
  const { transparent } = props;
  const [openDrawer, setOpenDrawer]: [boolean, Function] = useState(false);
  return (
    <div className={transparent ? styles.header : 'bg-white'}>
      <div className="w-11/12 mx-auto py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              width="24px"
              height="24px"
              className="cursor-pointer md:hidden mr-4"
              src="/svg/icon-menu.svg"
              alt="menu"
              onClick={() => setOpenDrawer(!openDrawer)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
