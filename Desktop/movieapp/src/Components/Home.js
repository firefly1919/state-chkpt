import React from "react";
import vid from "./video1.mp4"

const Home = () => {

return (
    <div className="home">
    <video src={vid} autoPlay loop muted></video>
      
    </div>
  );
};

export default Home;
