import { Fragment } from "react";
import Nav from "./components/layout/Nav";
import LargeDisplay from "./components/timezoneCards/LargeDisplay";
import SavedTimeZonesList from "./components/timezoneCards/SavedTimeZonesList";
import "./index.css";

function App() {
  return (
    <Fragment>
      <Nav />
      <LargeDisplay />
      <SavedTimeZonesList />
    </Fragment>
  );
}

export default App;
