import React from "react";
import { Link } from "react-router";

const navlinks: { label: string; link: string }[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Tours",
    link: "/packages",
  },
  {
    label: "About Us",
    link: "/about-us",
  },
  {
    label: "Contact Us",
    link: "/contact-us",
  },
];

const NavLinks = () => {
  return (
    <div className="flex gap-2 tracking-wider text-lg font-semibold text-gray-900/80">
      {navlinks.map((item) => {
        return (
          <Link to={item.link}>
            <span>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
