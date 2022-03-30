import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import classes from './layout.module.scss';
interface Props {
  open: boolean;
  setOpen: Function;
}

const menuData = [
  {
    label: 'Business',
    link: '/for-business',
  },
  {
    label: 'App',
    link: '/app',
  },
  {
    label: 'Journeys',
    link: '/journeys',
  },
  {
    label: 'Team',
    link: '/team',
  },
  {
    label: 'Contact',
    link: '/contact',
  },
  {
    label: 'FAQ',
    link: '/faq',
  },
  {
    label: 'Privacy Policy',
    link: '/privacy-policy',
  },
  {
    label: 'Terms & Conditions',
    link: '/terms',
  },
];

export const Drawer = ({ open, setOpen }: Props) => {
  let [attachedClasses, setAttachedClasses] = useState([classes.sideDrawer, classes.close]);
  useEffect(() => {
    if (open) {
      document.getElementsByTagName('body')[0].className = 'overflow-hidden';
      setAttachedClasses([classes.sideDrawer, classes.open]);
    } else {
      setAttachedClasses([classes.sideDrawer, classes.close]);
      document.getElementsByTagName('body')[0].className = 'overflow-auto';
    }
  }, [open]);

  return (
    <div className={`${attachedClasses.join(' ')} text-white`}>
      <div className="flex pl-5">
        <img src="/svg/close.svg" onClick={() => setOpen(false)} />
        <Link href="/">
          <a>
            <img src="/svg/small-logo.svg" className="ml-[22px]" />
          </a>
        </Link>
      </div>
      <div className="mt-[64px] flex flex-col">
        <div className="flex flex-col pl-5">
          {menuData.map(({ label, link }, i) => (
            <Link href={link} key={i}>
              <a className=" text-lg font-[500] leading-[40px] mb-[15px]">{label}</a>
            </Link>
          ))}
        </div>
        <div className="mt-[50px] pl-2">
          <span className="mr-2">
            <u>EN</u>
          </span>
          <span>|</span>
          <span className="text-gray-400 ml-2">DE</span>
        </div>
      </div>
    </div>
  );
};
