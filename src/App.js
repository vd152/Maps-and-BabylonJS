import React from "react";
import Map from "./components/Map";
import "./App.css";
import Route from "./components/Route";
import Cuboid from "./components/BabylonJS/Cuboid";
import Link from "./components/Link";
class App extends React.Component {
  state = {
    image: "/arrow-right.png",
  };
  capture = () => {
    var c = document.getElementsByClassName("mapboxgl-canvas")[0];
    this.setState({ image: c.toDataURL("image/png") }, () => {
      window.history.pushState({}, "", "/view");
      const navEvent = new PopStateEvent("popstate");
      window.dispatchEvent(navEvent);
    });
  };
  render() {
    return (
      <div className="App">
        <Route path="/">
          <React.Fragment>
            <Map />
            <button
              className="capture-button"
              onClick={(e) => {
                this.capture();
              }}
            >
              <img
                src="/captureWhite.png" 
                alt="arrow"
              />
            </button>
            <Link href="/view" className="capture-link link-right">
              <img
                src="/arrow-right.png"
                alt="capture"
              />
            </Link>
          </React.Fragment>
        </Route>
        <Route path="/view">
          <Cuboid image={this.state.image} />
          <Link href="/" className="capture-link link-left">
            <img src="/arrow-left.png"  alt="arrow" />
          </Link>
        </Route>
      </div>
    );
  }
}

export default App;
