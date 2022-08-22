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
            <h1 className="text-white text-[120px] text-center absolute z-10 top-[42%] right-[8%] ">
              Dot Lake Village
            </h1>
            <img
              src="/hero-image.jpg"
              alt=" hero"
              className=" w-1/2  mx-auto "
            />
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className=" mt-64 ">
            <p className=" text-white mx-16 text-2xl leading-10 ">
              Village of Dot Lake is a traditional Upper Tanana Athabascan
              village, located south of the Tanana River, two-tenths of a mile
              southeast of the Alaska Highway near Dot Lake, 50 miles northwest
              of Tok and 155 road miles southeast of Fairbanks.
            </p>
            <h2 className=" font-medium text-6xl leading-tight mt-24 max-w-2xl ">
              Story behind the name of Dot Lake Village
            </h2>
            <p className="mt-24 text-white mx-16 text-2xl leading-10 ">
              It has always been a mystery how Dot Lake got its’ name. Some
              thoughts are it was because the lake looked like a dot, others
              thought it was because the lake was so small.
            </p>
            <p className=" mt-14 text-white mx-16 text-2xl leading-10 ">
              With the loss of all the elders, the true origin of the name may
              never be known.
            </p>
          </div>

          <h2 className=" font-medium text-6xl leading-tight mt-40 max-w-2xl ">
            Where is Dot Lake Village located?
          </h2>
          <p className="mt-24 text-white mx-16 text-2xl leading-10 ">
            Dot Lake Village is located near Dot Lake on the Alaska Highway, 50
            miles northwest of Tok and 155 road miles southeast of Fairbanks,
            and two miles south of the Tanana River.
          </p>
          <p className="mt-14 text-white mx-16 text-2xl leading-10 ">
            The Dot Lake is composed of two sub communities; the Native Village
            of Dot Lake, which is located north of the Alaska Highway, between
            milepost 1360.5 and milepost 1361.5 and extends north to the Tanana
            River. It includes U.S. Survey No. 3217, U.S. Survey No. 3123, U.S.
            Survey No. 4285, and all lands conveyed to the State of Alaska
            intrust under Section 14 (c) (3) of the Alaska Native Claims
            Settlement Act (ANCSA).
          </p>
          <p className="mt-14 text-white mx-16 text-2xl leading-10 ">
            The other community is referred to as the Highway Community, which
            is located outside of the native village boundaries and includes
            U.S. Survey No. 4325.
          </p>
          <p className="mt-14 text-white mx-16 text-2xl leading-10 ">
            All other lands within the area, with the exception of a few Native
            Allotments, belong to the Dot Lake Native Corporation.
          </p>
        </Container>
      </section>
      <section>
        <Container>
          <div className="relative mt-64">
            {" "}
            <h2 className="absolute top-0 left-0 z-10 text-6xl font-medium max-w-md border-l-black border-l-4 ml-8 pl-12 py-28  ">
              Our History, Our Memories.
            </h2>
            <HomeSlider imageUrls={data} />
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <h2 className="mx-16 font-medium text-6xl leading-tight mt-44 max-w-2xl ">
            Village History
          </h2>
          <p className="mt-28 mx-32 text-white  text-2xl leading-10 ">
            Archelogical evidence at nearby Healy Lake revealed more than 10,000
            years of human habitation. Dot Lake and Tanacross. A Native freight
            trail ran north to the Yukon River through Northway, Tetlin,
            Tanacross, and Dot Lake.
          </p>
          <p className="mt-14 mx-32 text-white  text-2xl leading-10 ">
            Several local Natives worked on the road project. During
            construction of the Alaska Highway in 1942-43, a work camp called
            Sears City occupied Dot Lake’s present location.
          </p>
          <p className="mt-14 mx-32 text-white  text-2xl leading-10 ">
            Upon completion of this section of the highway the camp was
            abandoned and the structures left in place.
          </p>
          <p className="mt-14 mx-32 text-white  text-2xl leading-10 ">
            Dot Lake Village is now a census-designated place (CDP).
          </p>
        </Container>
      </section>
      <section className="pt-24 pb-32 my-56  bg-[#C7C7C7] relative ">
        <img
          src="/people-of-dot-lake-village.png"
          alt="people of dot lake village"
          className=" absolute h-full right-0 top-0"
        />

        <div className="relative z-20">
          <Container>
            <h2 className="mx-16 font-medium text-6xl leading-tight  max-w-2xl text-dotOrange ">
              People of <br /> Dot Lake Village
            </h2>
            <p className="mt-16 mx-32   text-2xl leading-10 ">
              The Native Village was first settled by{" "}
              <span className=" block font-semibold ">
                Doris Charles and her family in 1946.
              </span>
            </p>
          </Container>
        </div>
      </section>
      <section>
        <Container>
          <p className=" mx-32 text-white  text-2xl leading-10 ">
            During the mid 1940’s, in search of a better life for her and her
            family, Doris Charles set out from Tanacross with her children.
          </p>
          <p className="mt-14 mx-32 text-white  text-2xl leading-10 ">
            She caught a ride to an area now called Paul’s Cabin, which was a
            traditional hunting camp for some of the natives of Tanacross.
          </p>
          <p className="mt-14 mx-32 text-white  text-2xl leading-10 ">
            Eventually, Doris moved her family to the area now known as Dot Lake
            and established her home.
          </p>
        </Container>
      </section>
    </div>
  );
}
