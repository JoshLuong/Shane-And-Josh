import "../App.css";
import React, { useEffect, useState } from "react";
import Image from "./Image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import myVideo from "../videos/intro.mov";
import TypeAnimation from "react-type-animation";
import { ReactComponent as Sort } from "../sort.svg";
import Typed from "react-typed";
import { trackWindowScroll } from "react-lazy-load-image-component";

import Background from "./sf2.jpg";

function Main() {
  const [images, setImages] = useState([]);
  const [sort, setSort] = useState(false);
  const importAll = (r) => {
    return r.keys().map(r);
  };
  const listOfImages = importAll(
    require.context("../../img", false, /\.(JPG|jpeg|png|jpg)$/)
  );
  useEffect(() => {
    setImages(shuffle(listOfImages));
  }, []);

  useEffect(() => {
    if (sort) {
      setImages(shuffle(listOfImages));
    } else {
      setImages(listOfImages);
    }
  }, [sort]);

  const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  /**
 * 
 *       <div className="video-container">
        <video
          playsinline
          autoPlay
          loop
          muted
          width="100%"
          height="100%"
          className="video"
        >
          <source src={myVideo} type="video/mp4"></source>
        </video>
      </div>
 */

  /**
       *       <button className="fly-to-top" onClick={setSort}>
        <Sort />
      </button>
       */
  return (
    <div>
      <div className="background-container">
        <img
          className="background"
          height="100%"
          width="100%"
          src={Background}
        ></img>
      </div>
      <div className="title-container">
        <div className="title">
          <Typed
            strings={["San Francisco '22.", "Shane and Josh."]}
            typeSpeed={75}
            backSpeed={80}
          />
        </div>
      </div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 3 }}>
        <Masonry gutter={10}>
          {images.map((image, index) => (
            <>
              <Image key={index} src={image} />
            </>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default trackWindowScroll(Main);
