import { Outlet } from "@remix-run/react";
import { LinkButton } from "~/components/Button";

export default function Archives() {
  return (
    <div>
      <section className=" lg:bg-blend-overlay lg:bg-black/40 lg:bg-[url(/archives-hero.png)] bg-cover bg-center bg-black mt-44 lg:mt-0  ">
        <div className="flex items-center justify-center lg:pt-96 lg:pb-72 pb-20 pt-[120px] relative ">
          <div className=" absolute lg:hidden  inset-0  mx-4 ">
            <img
              src="/archive-hero-mobile.jpg"
              alt="archive mobile hero"
              className=" object-cover object-center "
            />
          </div>
          <h1 className=" text-white lg:text-9xl text-[52px] text-center relative z-10 ">
            Archives
          </h1>
        </div>
      </section>
      <section>
        <div className=" flex justify-center items-center lg:py-24 py-16 ">
          <LinkButton to="images" normal={false}>
            Images
          </LinkButton>
          <LinkButton to="audio" normal={false}>
            Audio
          </LinkButton>
        </div>
        <div>
          <Outlet />
        </div>
      </section>
    </div>
  );
}
