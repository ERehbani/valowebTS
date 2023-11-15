import React, { useState } from "react";
import "./globals.css";
import ReactPlayer from "react-player";
import { Button, Tooltip } from "@nextui-org/react";
import Image from "next/image";

function LevelsPlayer({
  streamVideo,
  levelItem,
}: {
  streamVideo: string;
  levelItem: string;
}) {
  const [volume, setVolume] = useState(0);

  const spaceString = (str: string) => {
    return str
      .substring(26)
      .replace(/([A-Z])/g, " $1")
      .trim();
  };
  return (
    <div>
      <div className="my-5 flex ">
        <Tooltip
          className="text-white tooltip-player"
          placement="right"
          color="secondary"
          content={
            <div>
              <ReactPlayer
                url={streamVideo}
                volume={volume}
                classname="react-player"
                playing
                loop
              />{" "}
              <label className="slider">
                <input
                  type="range"
                  className="level mt-1"
                  min={0}
                  max={1}
                  step="any"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                />
                <Image
                  src="/volume.svg"
                  alt="volume"
                  onClick={() => setVolume(0)}
                  width={20}
                  height={0}
                  className="mr-2 mt-1"
                />
              </label>
            </div>
          }>
          <Button>{levelItem ? spaceString(levelItem) : "Base"}</Button>
        </Tooltip>
      </div>
    </div>
  );
}

export default LevelsPlayer;
