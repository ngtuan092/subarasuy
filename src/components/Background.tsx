import React from "react";
import background from "../assets/background.jpeg";

const Background: React.FC = () => {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="h-full w-full bg-no-repeat bg-center bg-cover absolute -z-50 m-0 p-0"
    ></div>
  );
};

export default Background;
