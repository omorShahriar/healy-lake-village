import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/cloudflare";

import { supabase } from "~/utils/supabase";
import { Container } from "~/components/Container";
import { cache } from "~/utils/cache";
import { HomeSlider, links as sliderStyles } from "~/components/HomeSlider";

export const links = () => [...sliderStyles()];

export async function loader() {
  if (await cache.has("imageData")) return json(await cache.get("imageData"));

  const { data } = await supabase.storage.from("images").list("home-slider");
  const imagePaths = data.map((img) => `home-slider/${img.name}`);
  const imageLinks = await supabase.storage
    .from("images")
    .createSignedUrls(imagePaths, 3600);

  const imageData = imageLinks.data.map((img) => ({
    name: img.path.split("/")[1].split(".")[0],
    url: img.signedURL,
  }));

  await cache.set("imageData", imageData);

  return json(imageData);
}

export default function Index() {
  const data = useLoaderData();

  return (
    <div className="  pt-56  ">
      <section>
        <Container>
          <div className=" relative ">
            <h1 className="text-white w-full lg:text-[105px] text-[48px] text-center absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-center  ">
              Healy Lake Village
            </h1>
            <img
              src="/hero-image.jpg"
              alt=" hero"
              className=" lg:w-1/2 w-3/4  mx-auto "
            />
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className=" lg:mt-64 mt-20 ">
            <p className=" text-white lg:mx-16 mx-4 lg:text-2xl text-xl lg:leading-10 leading-8 ">
              There has been human habitation of the Healy Lake area for around
              11;000 years. Carbon dating conducted by scientists have shown
              that Healy Lake was used as a camping area by our ancestors long
              before the permanent village was established in the early 1900’s.
            </p>
          </div>

          <h2 className=" font-medium lg:text-6xl text-[40px] lg:mx-0 mx-4 leading-tight lg:mt-40 mt-24 max-w-2xl ">
            Where is Healy Lake Village located?
          </h2>
          <p className="lg:mt-24 mt-16 text-white lg:mx-16 mx-4 lg:text-2xl text-xl lg:leading-10 leading-8 ">
            Healy Lake is a rural community, roughly 30 miles east of Delta, in
            Interior Alaska. Healy Lake is not on the road system , and the only
            way to access the village is by river or plane.
          </p>
        </Container>
      </section>
      <section>
        <Container>
          <div className="relative lg:mt-64 mt-32">
            {" "}
            <h2 className="absolute top-0 left-0 z-10 lg:text-6xl text-[40px]   font-medium md:max-w-md max-w-[276px] md:border-l-white md:border-l-4 ml-8  md:pl-12 md:py-28  ">
              Our History, Our Memories.
            </h2>
            <HomeSlider imageUrls={data} />
            <div className=" h-[140px] w-1 bg-white z-20 absolute right-[10%] top-[10%] md:hidden   "></div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <p className="lg:mt-28 mt-14  text-white  lg:text-2xl text-xl lg:mx-32 mx-4  lg:leading-10 leading-8 ">
            On this site, you will find stories and interviews with our elders,
            describing the way life was in the Village during their time and
            through stories that were handed down to them from their parents and
            grandparents.
          </p>
          <p className="lg:mt-14 mt-10  text-white   lg:text-2xl text-xl lg:mx-32 mx-4  lg:leading-10 leading-8 ">
            If you have any items of cultural or historical significance that
            you would like to share, please contact the council and we will make
            arrangements for your story, photos, items, etc. to be made
            available to everyone.
          </p>
          <p className="lg:mt-14 mt-10 text-white lg:text-2xl text-xl lg:mx-32 mx-4  lg:leading-10 leading-8   ">
            We are Mendas Cha'ag.
          </p>
        </Container>
      </section>
    </div>
  );
}
