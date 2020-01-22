import React, { Component } from "react";

export default class MapContainer extends Component {
  render() {
    return (
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            className="map-size"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=rentgenova%2031%20Nis&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
      </div>
    );
  }
}
