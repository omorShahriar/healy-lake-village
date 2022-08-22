import { supabase } from "~/utils/supabase";

export const getAudios = async (folder, limit, offset = 0) => {
  const { data } = await supabase.storage.from("audio").list(folder, {
    limit,
    offset,
    sortBy: { column: "name", order: "asc" },
  });

  if (data.length != 0) {
    const audioPaths = data.map((audio) => `${folder}/${audio.name}`);

    const audioLinks = await supabase.storage
      .from("audio")
      .createSignedUrls(audioPaths, 3600);

    const audioData = audioLinks.data.map((audio) => ({
      name: audio.path.split("/")[1].split(".mp3")[0],
      url: audio.signedURL,
    }));
    return audioData;
  }

  return null;
};

export const getPodcastAudios = async (url) => {
  const offsetParams = Object.fromEntries(url.searchParams);
  if (Object.keys(offsetParams).length !== 0) {
    const offset = offsetParams["offset"];

    const audios = await getAudios("stream", 5, offset);

    return { audios };
  }

  const audios = await getAudios("stream", 5);

  return { audios };
};
