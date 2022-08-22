import { Link as RemixLink, useLocation } from "@remix-run/react";

import { LinkButton } from "./Button";
import Link from "./Link";
const Header = () => {
  const { pathname } = useLocation();
  let pathCheck = false;
  const routes = ["/archives", "/archives/images", "/archives/audio"];
  routes.forEach((r) => {
    if (r == pathname) {
      return (pathCheck = true);
    }
  });
  return (
    <header
      className={`z-50 w-full fixed top-0 left-0 ${
        pathCheck ? "bg-transparent" : "bg-dotOrange"
      }  pt-10 pb-14 px-10`}
    >
      <nav className=" flex justify-between items-center ">
        <div className=" w-20 h-20  ">
          <RemixLink to="/">
            <img
              alt="brand logo"
              src={`${
                pathCheck ? "/brand-logo-white.png " : "/brand-logo.png"
              }`}
            />
          </RemixLink>
        </div>
        <ul className=" flex items-center gap-x-12">
          <li>
            <Link to="/" end>
              Home
            </Link>
          </li>
          <li>
            <Link to="/archives/images">Archives</Link>
          </li>
          <li>
            <LinkButton to="https://teejuh.org/">Teejuh</LinkButton>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
