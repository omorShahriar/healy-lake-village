import AudioPlayer from "react-h5-audio-player";
import { PlayButton, PauseButton } from "./Button";
import styles from "./styles.css";

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

const Header = ({ title }) => {
  return (
    <div className="">
      <h2 className="   lg:text-6xl text-[30px] font-medium transition-all duration-300  ">
        {title}
      </h2>
    </div>
  );
};

export const Player = ({ src, title }) => {
  return (
    <>
      <AudioPlayer
        src={src}
        showJumpControls={false}
        showDownloadProgress={false}
        header={<Header title={title} />}
        customIcons={{ play: <PlayButton />, pause: <PauseButton /> }}
        preload="none"
        // other props here
      />
    </>
  );
};
