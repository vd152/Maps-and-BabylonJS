import React from "react";
import Map from "./components/Map";
import "./App.css";
import Route from "./components/Route";
import Cuboid from "./components/BabylonJS/Cuboid";
import Link from "./components/Link";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <React.Fragment>
          <Map />
          <button className="capture-button">
            <img src="/captureWhite.png" height="50" width="50" alt="capture" />
          </button>
          <Link href="/abc" className="capture-link link-right"><img src="/arrow-right.png" height="50" width="50" alt="capture" /></Link>
        </React.Fragment>
      </Route>
      <Route path="/abc">
        <Cuboid/>
        <Link href="/" className="capture-link link-left"><img src="/arrow-left.png" height="50" width="50" alt="capture" /></Link>
      </Route>
    </div>
  );
}

export default App;
