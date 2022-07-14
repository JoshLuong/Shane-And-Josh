import "../App.css";
import exifr from "exifr/dist/full.esm.mjs";
import React, { useState } from "react";

function Image(props) {
  const [metaData, setMetaData] = useState("");
  React.useEffect(() => {
    exifr.parse(props.src).then((output) => {
      setMetaData(output);
    });
  }, []);
  return (
    <div style={{ position: "relative" }}>
      <div className="hover-div">
        <div>{props.meta}</div>
        <div className="meta-text">{metaData.Model}</div>
        <div className="meta-text">
          {metaData?.Make === "Canon"
            ? metaData?.LensModel
            : metaData?.CreateDate?.toDateString()}
        </div>
      </div>
      <img height="100%" width="100%" src={props.src}></img>
    </div>
  );
}

export default Image;
