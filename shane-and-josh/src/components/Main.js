import "../App.css";
import React, { useEffect, useState } from "react";
import Image from "./Image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import TypeAnimation from "react-type-animation";
import { ReactComponent as Sort } from "../sort.svg";
import Typed from "react-typed";
import Fade from 'react-reveal/Fade';

import Background from "./sf2.jpg";

function Main() {
  const [images, setImages] = useState([]);
  const importAll = (r) => {
    return r.keys().map(r);
  };
  const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const listOfImages = shuffle(importAll(
    require.context("../../img", false, /\.(JPG|jpeg|png|jpg)$/)
  ));
  useEffect(() => {
    setImages(listOfImages.slice(0, 5));
  }, []);

  window.addEventListener('scroll', function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 700) {
      let endIndex = images.length + 10;
      if (images.length + 10 > listOfImages.length) {
        endIndex = listOfImages.length;
      }
       setImages([...images, ...listOfImages.slice(images.length, endIndex)]);
    }
 });

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
          <Fade left delay={500}>
            <p>{listOfImages.length} pictures taken.</p>
        </Fade>
        <Fade left delay={1000} duration={1000}>
            <div>San Francisco '22.</div>
        </Fade>
        </div>
      </div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 3 }}>
        <Masonry gutter={10}>
          {images.map((image, index) => (
            <>
              <Image key={index} src={image} meta={`${index + 1}`} />
            </>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default (Main);
