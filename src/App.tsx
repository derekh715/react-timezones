import { Fragment } from "react";
import LargeDisplay from "./components/LargeDisplay";
import Nav from "./components/layout/Nav";
import "./index.css";

function App() {
  return (
    <Fragment>
      <Nav />
      <LargeDisplay />
    </Fragment>
  );
}

export default App;
