import { Container } from "./Container";
import { LinkButton } from "./Button";
const Footer = () => {
  return (
    <>
      {" "}
      <section className=" mb-44 ">
        <Container>
          <div className="mt-56 flex items-center justify-center ">
            <div className=" pt-12 pl-16 pr-8 text-right border-r-2 border-r-black ">
              <h2 className=" max-w-xl text-6xl font-medium leading-tight ">
                Share your Dot Lake Village Memories
              </h2>
            </div>
            <div className=" pl-8 ">
              <p className=" text-2xl leading-10 mb-12 text-white  ">
                If you have any memory from Dot Lake Village that you would like
                to share, contact us: we are eager to share it with our people.
              </p>
              <LinkButton to="#">Contact Us</LinkButton>
            </div>
          </div>
        </Container>
      </section>
      <footer className=" py-16 ">
        <div className=" flex flex-col items-center">
          <img src="/brand-logo.png" alt="logo" className=" w-20 mb-14" />
          <p className=" font-semibold text-xl mb-11 ">
            Dot Lake Village Council
          </p>
          <p className=" mb-8 text-xl">P.O. Box 70494. Fairbanks, AK 99707</p>
          <div className=" text-xl flex justify-between mb-8 gap-x-9">
            <p className="  ">Phone: (907) 882-2695</p>
            <p className="  ">Fax: (907) 882-5558</p>
          </div>

          <p className=" text-xl">DLVCouncil@dotlakevillage.org</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
