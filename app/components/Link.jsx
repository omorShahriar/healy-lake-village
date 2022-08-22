import { NavLink } from "@remix-run/react";

const Link = ({ children, to, ...props }) => {
  return (
    <NavLink to={to} className=" text-white text-xl font-medium " {...props}>
      {children}
    </NavLink>
  );
};

export default Link;
