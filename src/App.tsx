import "leaflet/dist/leaflet.css";
import { Fragment } from "react";
import LargeDisplay from "./components/largeDisplay/LargeDisplay";
import Nav from "./components/layout/Nav";
import EditTimezoneInfoModal from "./components/modal/EditTimezoneInfoModal";
import TimezoneInfoModal from "./components/modal/TimezoneInfoModal";
import SavedTimeZonesList from "./components/timezoneCards/SavedTimeZonesList";
import "./index.css";

function App() {
  return (
    <Fragment>
      <Nav />
      <LargeDisplay />
      <SavedTimeZonesList />
      <TimezoneInfoModal />
      <EditTimezoneInfoModal />
    </Fragment>
  );
}

export default App;
