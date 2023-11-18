import React, { useState } from "react";
import "./globals.css";
import ReactPlayer from "react-player";
import { Button, Tooltip } from "@nextui-org/react";

function LevelsPlayer({
  streamVideo,
  levelItem,
}: {
  streamVideo: string;
  levelItem: string;
}) {

  const spaceString = (str: string) => {
    return str
      .substring(26)
      .replace(/([A-Z])/g, " $1")
      .trim();
  };
  return (
    <div>
      <div className="my-3">
        <Tooltip
          className="text-white tooltip-player"
          placement="right"
          color="secondary"
          content={
            <div>
              <ReactPlayer
                url={streamVideo}
                classname="react-player"
                playing
                muted
                loop
                controls                
              />{" "}
            </div>
          }>
          <Button>{levelItem ? spaceString(levelItem) : "Base"}</Button>
        </Tooltip>
      </div>
    </div>
  );
}

export default LevelsPlayer;
