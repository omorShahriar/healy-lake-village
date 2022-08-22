import { supabase } from "~/utils/supabase";
import { cache } from "~/utils/cache";
export const getImages = async (column, limit, offset = 0) => {
  const { data } = await supabase.storage.from("images").list(column, {
    limit,
    offset,
    sortBy: { column: "name", order: "asc" },
  });
  console.log(data);
  if (data.length != 0) {
    const imagePaths = data.map((img) => `${column}/${img.name}`);
    const imageLinks = await supabase.storage
      .from("images")
      .createSignedUrls(imagePaths, 600000);

    const imageData = imageLinks.data.map((img) => ({
      name: img.path.split("/")[1].split(".")[0],
      url: img.signedURL,
    }));
    return imageData;
  }

  return null;
};

export const getGalleryImages = async (url) => {
  const offsetParams = Object.fromEntries(url.searchParams);
  if (Object.keys(offsetParams).length !== 0) {
    const leftOffset = offsetParams["left-offset"];
    const rightOffset = offsetParams["right-offset"];

    const leftColumn = await getImages("left-column", 8, leftOffset);
    const rightColumn = await getImages("right-column", 6, rightOffset);

    return { leftColumn, rightColumn };
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

  return { leftColumn, rightColumn };
};
