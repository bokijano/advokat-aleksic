import React, { Component } from "react";
import Contact from "./Contact.js";
import Form from "./Form.js";
import MapContainer from "./Map.js";
import "./form.css";

export default class DisplayContacts extends Component {
  render() {
    return (
      <div className="display-contact">
        <div className="cont">
          <Contact />
        </div>
        <div className="display-form">
          <Form />
        </div>
        <div className="display-map">
          <MapContainer />
        </div>
      </div>
    );
  }
}
