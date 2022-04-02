import React from "react";

const Video = () => {
  return (
    <div>
      <h1>Video Page</h1>
      {
        <iframe
          width="890"
          height="500"
          src="https://www.youtube.com/embed/XKfgdkcIUxw"
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      }
    </div>
  );
};

export default Video;
