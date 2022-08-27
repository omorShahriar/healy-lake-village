import { useState } from "react";
import { Link as RemixLink } from "@remix-run/react";
import Link from "../Link";
import { LinkButton } from "../Button";
const Cross = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 19.5l15-15m-15 0l15 15"
    />
  </svg>
);

const Bars = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g id="Group_60" data-name="Group 60" transform="translate(-177 -95)">
      <rect
        id="Rectangle_76"
        data-name="Rectangle 76"
        width="24"
        height="24"
        transform="translate(177 95)"
        fill="none"
      />
      <g id="Menu" transform="translate(-159 69)">
        <rect
          id="Rectangle_69"
          data-name="Rectangle 69"
          width="24"
          height="2"
          rx="1"
          transform="translate(336 32)"
          fill="#fff"
        />
        <rect
          id="Rectangle_70"
          data-name="Rectangle 70"
          width="24"
          height="2"
          rx="1"
          transform="translate(336 38)"
          fill="#fff"
        />
        <rect
          id="Rectangle_71"
          data-name="Rectangle 71"
          width="20"
          height="2"
          rx="1"
          transform="translate(340 44)"
          fill="#fff"
        />
      </g>
    </g>
  </svg>
);

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" md:hidden  ">
      <div className="h-full flex justify-between">
        <div className=" w-16 h-16  ">
          <RemixLink to="/">
            <img alt="brand logo" src="/brand-logo.png" />
          </RemixLink>
        </div>
        <div className=" absolute z-20 top-12 right-8 ">
          <button onClick={(e) => setOpen(!open)}>
            {open ? <Cross /> : <Bars />}
          </button>
        </div>
      </div>
      <div
        className={`w-screen h-screen flex bg-black absolute z-10 top-0 left-0 ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-all duration-700 ease-in-out flex justify-center items-center `}
      >
        <ul className=" flex flex-col gap-y-8 items-center ">
          <li onClick={(e) => setOpen(!open)}>
            <Link to="/" end>
              Home
            </Link>
          </li>
          <li onClick={(e) => setOpen(!open)}>
            {" "}
            <Link to="/archives/images">Archives</Link>
          </li>
          <li className="mt-8" onClick={(e) => setOpen(!open)}>
            {" "}
            <LinkButton to="https://teejuh.org/">Teejuh</LinkButton>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
