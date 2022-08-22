import { Player, links as playerStyles } from "~/components/AudioPlayer";
import { useState, useEffect } from "react";
import { useLoaderData, useFetcher } from "@remix-run/react";
import { json } from "@remix-run/cloudflare";
import { getPodcastAudios } from "~/utils/audioApi";

import { Container } from "~/components/Container";
export const links = () => [...playerStyles()];

export async function loader({ request }) {
  const url = new URL(request.url);
  const audios = await getPodcastAudios(url);

  return json(audios, {
    headers: {
      "Cache-Control": "max-age=6000000",
    },
  });
}

const Audio = () => {
  const { audios } = useLoaderData();
  console.log("this is client: ", audios);
  return (
    <div>
      <Container>
        <div className=" flex flex-col gap-y-10">
          {audios.map((audio, i) => {
            return <Player key={i} src={audio.url} title={audio.name} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default Audio;
