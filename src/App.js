import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import AddPlayer from "./components/AddPlayer.js";
import Dice from "./components/Dice.js";
import Player from "./components/Player.js";
import SidePlayer from "./components/sidePlayer.js";


function App() {
  return (
    <div style={{width: '100%', maxWidth: '700px'}} className="d-flex">
      <div>

        <AddPlayer />
        <Dice />

        <Player />
      </div>
      <div>

        <SidePlayer />  

      </div>
    </div>
  )
}

export default App;