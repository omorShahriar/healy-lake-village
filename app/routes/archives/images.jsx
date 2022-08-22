import { useState, useEffect } from "react";
import { useLoaderData, useFetcher } from "@remix-run/react";
import { cache } from "~/utils/cache";
import { json } from "@remix-run/cloudflare";
import { Container } from "~/components/Container";
import { getImages } from "~/utils/galleryApi";

export async function loader({ request }) {
  const url = new URL(request.url);
  const offsetParams = Object.fromEntries(url.searchParams);
  if (Object.keys(offsetParams).length !== 0) {
    const leftOffset = offsetParams["left-offset"];
    const rightOffset = offsetParams["right-offset"];

    const leftColumn = await getImages("left-column", 8, leftOffset);
    const rightColumn = await getImages("right-column", 6, rightOffset);

    return json({ leftColumn, rightColumn });
  }

  if ((await cache.has("leftColumn")) && (await cache.has("rightColumn")))
    return {
      leftColumn: await cache.get("leftColumn"),
      rightColumn: await cache.get("rightColumn"),
    };

  const leftColumn = await getImages("left-column", 8);
  const rightColumn = await getImages("right-column", 6);

  await cache.set("leftColumn", leftColumn);
  await cache.set("rightColumn", rightColumn);

  return json({ leftColumn, rightColumn });
}

const Images = () => {
  const fetcher = useFetcher();
  const { leftColumn, rightColumn } = useLoaderData();
  const [loadButton, setLoadButton] = useState(true);
  const [lColumn, setLColumn] = useState(leftColumn);
  const [rColumn, setRColumn] = useState(rightColumn);
  const [lOffset, setLOffset] = useState(8);
  const [rOffset, setROffset] = useState(6);

  useEffect(() => {
    if (fetcher.data && (fetcher.data.leftColumn || fetcher.data.rightColumn)) {
      const { leftColumn, rightColumn } = fetcher.data;
      leftColumn && setLColumn((lColumn) => [...lColumn, ...leftColumn]);
      rightColumn && setRColumn((rColumn) => [...rColumn, ...rightColumn]);
      leftColumn && setLOffset((lOffset) => lOffset + 8);
      rightColumn && setROffset((rOffset) => rOffset + 6);
      return;
    }
    if (fetcher.data && !fetcher.data.leftColumn && !fetcher.data.rightColumn) {
      setLoadButton(false);
      return;
    }
  }, [fetcher.data]);

  return (
    <div className=" mt-10 ">
      <Container>
        <div className=" grid grid-cols-12 gap-x-4 ">
          <div className=" col-span-7 px-12 flex flex-col gap-y-12">
            {lColumn.map((image, i) => (
              <img src={image.url} alt={image.name} key={i} />
            ))}
          </div>
          <div className=" col-span-5 pl-3 pr-11 mt-20 flex flex-col gap-y-12 ">
            {rColumn.map((image, i) => (
              <img src={image.url} alt={image.name} key={i} />
            ))}
          </div>
        </div>
        <div className="mt-40">
          <div className="flex items-center justify-center">
            {loadButton ? (
              <fetcher.Form method="get">
                <input type="hidden" name="left-offset" value={lOffset} />
                <input type="hidden" name="right-offset" value={rOffset} />
                <button
                  className="pt-6 pb-3  px-12 text-xl border-2 border-white text-white"
                  type="submit"
                >
                  Load More
                </button>
              </fetcher.Form>
            ) : (
              <h2 className=" text-white text-2xl text-center ">
                Sorry, That's all for now!
              </h2>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Images;
