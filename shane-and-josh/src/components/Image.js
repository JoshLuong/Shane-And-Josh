import "../App.css";

function Image(props) {
  return (
    <div style={{position: 'relative'}}>
    <div className="hover-div">
      {props.meta}
    </div>
    <img height="100%" width='100%' src={props.src}></img>
    </div>
  );
}

export default Image;
