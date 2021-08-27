import React from "react";
import Map from './components/Map';
import './App.css';
import Route from './components/Route';

function App() {
  return (
    <div className="App">
      <Route path="/">
        <React.Fragment>
        <Map />
       <button className="capture-button"><img src="/captureWhite.png" height="50" width="50" alt="capture"/></button>
        </React.Fragment>
      </Route>
     <Route path="/abc">
       <div>cube here</div>
     </Route>
    </div>
  );
}

export default App;
