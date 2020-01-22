import React, { Component } from "react";
import DisplayContacts from "./components/Contact/DisplayContacts";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <DisplayContacts />
      </div>
    );
  }
}

export default App;
