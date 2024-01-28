import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const links = navLinks.map((item, i) => {
    return (
      <li key={item.label}>
        <a
          href={item.href}
          className="font-monts errat leading-normal text-lg text-slate-gray"
        >
          {item.label}
        </a>
      </li>
    );
  });
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {links}
        </ul>
        <div className=" lg:hidden">
          <img src={hamburger} alt="Hamburger" height={25} width={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
