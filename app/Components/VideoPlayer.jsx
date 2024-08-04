// components/VideoPlayer.js

import React, { useRef } from "react";

const VideoPlayer = ({ videoUrl, type, onFinish, className }) => {
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    if (onFinish) {
      onFinish();
    }
  };

  return (
    <video
      ref={videoRef}
      src={videoUrl}
      type={type}
      onEnded={handleVideoEnd}
      muted
      autoPlay
      className={className}
    />
  );
};

export default VideoPlayer;
