import Main from "./components/Main";
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as Arrow } from "./arrow.svg";

import "./App.css";

function App() {
  return (
    <>
      <ScrollToTop smooth  component={<Arrow />} />
      <Main className="body"/>
    </>
  );
}

export default App;
