import "leaflet/dist/leaflet.css";
import { Fragment, useState } from "react";
import Nav from "./components/layout/Nav";
import TimezoneInfoModal from "./components/modal/TimezoneInfoModal";
import LargeDisplay from "./components/timezoneCards/LargeDisplay";
import SavedTimeZonesList from "./components/timezoneCards/SavedTimeZonesList";
import "./index.css";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <Fragment>
      <Nav />
      <LargeDisplay />
      <SavedTimeZonesList />
      <TimezoneInfoModal visible={visible} dismiss={() => setVisible(false)} />
      {/* Temporary button */}
      <button onClick={() => setVisible(true)}>Test</button>
    </Fragment>
  );
}

export default App;
