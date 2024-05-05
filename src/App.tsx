import "leaflet/dist/leaflet.css";
import { Fragment } from "react";
import Nav from "./components/layout/Nav";
import TimezoneInfoModal from "./components/modal/TimezoneInfoModal";
import LargeDisplay from "./components/timezoneCards/LargeDisplay";
import SavedTimeZonesList from "./components/timezoneCards/SavedTimeZonesList";
import "./index.css";

function App() {
  return (
    <Fragment>
      <Nav />
      <LargeDisplay />
      <SavedTimeZonesList />
      <TimezoneInfoModal />
    </Fragment>
  );
}

export default App;
