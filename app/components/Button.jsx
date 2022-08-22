import { NavLink as Link } from "@remix-run/react";

export const LinkButton = ({
  to = "/",
  children,
  invert = false,
  normal = true,
}) => {
  return normal ? (
    <a
      href={to}
      target="_blank"
      rel="noreferrer"
      className={` pt-3  px-12 text-xl  ${
        invert == false ? "border-white text-white" : "border-black text-black"
      } border-2 `}
    >
      {children}
    </a>
  ) : (
    <Link to={to} className={` py-4 px-12 text-2xl text-white `}>
      {children}{" "}
    </Link>
  );
};
