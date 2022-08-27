import { Container } from "./Container";
import { LinkButton } from "./Button";
const Footer = () => {
  return (
    <>
      {" "}
      <section className=" lg:mb-44 mb-24 ">
        <Container>
          <div className="lg:mt-56 mt-36 flex items-center justify-center flex-col lg:flex-row ">
            <div className=" mb-12 lg:mb-0 pb-12 lg:pb-0 lg:pt-12  lg:pr-8 text-right lg:border-r-2 lg:border-r-white lg:border-b-0 border-b-2 border-b-white lg:mx-0 mx-4">
              <h2 className=" lg:text-right text-left max-w-xl text-6xl font-medium  lg:text-6xl text-[40px]  leading-tight    ">
                Share your Healy Lake Village Memories
              </h2>
            </div>
            <div className=" lg:pl-8 ">
              <p className="  mb-12 text-white   lg:mt-12  lg:mx-16 mx-4 lg:text-2xl text-xl lg:leading-10 leading-8   ">
                If you have any memory from Healy Lake Village that you would
                like to share, contact us: we are eager to share it with our
                people.
              </p>
              <div className=" lg:block lg:ml-16 flex items-center justify-center  ">
                <LinkButton to="#">Contact Us</LinkButton>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <footer className=" py-16 ">
        <div className=" flex flex-col items-center">
          <img src="/brand-logo.png" alt="logo" className=" w-20 mb-14" />
          <p className=" font-semibold text-xl mb-11 ">We are Mendas Cha’ag.</p>
          <p className=" mb-8 text-xl">600 University Ave., Suite 100</p>
          <div className=" text-xl flex flex-col items-center  md:flex-row md:justify-between gap-y-4 md:gap-y-0 mb-8 gap-x-9">
            <p className="  ">Fairbanks, AK 99709</p>
            <p className="  ">907-328-7726</p>
            <p className="  ">907-371-1898</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
