import "../App.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Image(props) {
  return (
    <LazyLoadImage
      placeholderSrc={props.src}
      effect="blur"
      src={props.src} // use normal <img> attributes as props
      width="100%"
    />
  );
}

export default Image;
