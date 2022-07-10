import "../App.css";
import React, { useEffect, useState } from "react";
import Image from "./Image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import myVideo from "../videos/intro.mov";

function Main() {
  const [images, setImages] = useState([]);
  const importAll = (r) => {
    return r.keys().map(r);
  };
  useEffect(() => {
    const listOfImages = importAll(
      require.context("../../img", false, /\.(JPG)$/)
    );
    setImages(listOfImages);
  }, []);

  return (
    <div>
      <div className="video-container">
        <video playsinline autoPlay loop muted width="100%" height="100%" className="video">
          <source src={myVideo} type="video/mp4"></source>
        </video>
      </div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter={10}>
          {images.map((image, index) => (
            <>
            {image}
            <Image key={index} src={image} />

            </>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default Main;
