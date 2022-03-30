/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Link from 'next/link';
import { Drawer } from './drawer';
import styles from './layout.module.scss';

interface Props {
  transparent?: boolean;
}
export default function Header(props: Props) {
  const { transparent } = props;
  const [openDrawer, setOpenDrawer]: [boolean, Function] = useState(false);
  return (
    <div className={transparent ? styles.header : 'bg-black'}>
      <Drawer open={openDrawer} setOpen={setOpenDrawer} />
      <div className=" w-[95%] mx-auto py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              width="24px"
              height="24px"
              className="cursor-pointer md:hidden mr-[16px]"
              src="/svg/icon-menu.svg"
              alt="menu"
              onClick={() => setOpenDrawer(!openDrawer)}
            />
          </div>
          <div className="uppercase flex items-center">
            <div className="pr-4 sm:block hidden">for business</div>
            <div className="flex align-center">
              <select className={transparent ? styles.invisible : 'bg-primary'}>
                <option>EN</option>
              </select>
              {/* <span className="pr-1">EN</span>{' '}
            <Image width={'16px'} height="16px" alt="chevron" src={'/svg/icon-chevron-down.svg'} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
