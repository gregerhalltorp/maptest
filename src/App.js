import React, { Component } from "react";

import "./App.css";
import MapThingy from "./MapThingy";

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.defaultProps = {
      center: { lat: 27.976164, lng: -15.577938 },
      zoom: 10,
    };
    this.state = {
      pois: [
        {
          name: "Laikas",
          pos: { lat: 28.10439, lng: -15.422037 },
        },
      ],
    };
  }

  changeLocation = loc => {
    this.setState({
      center: {
        lat: loc.latitude,
        lng: loc.longitude,
      },
    });
  };

  render() {
    if (navigator && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.changeLocation(position.coords);
      });
    } else {
      console.log("damit");
    }
    return (
      <div className="App">
        <MapThingy
          isMarkerShown={true}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `732px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          center={this.state.center || this.defaultProps.center}
          zoom={this.defaultProps.zoom}
          pois={this.state.pois}
        />
      </div>
    );
  }
}

// import React, { Component } from "react";
// import GoogleMapReact from "google-map-react";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class App extends Component {
//   static defaultProps = {
//     center: { lat: 59.95, lng: 30.33 },
//     zoom: 11,
//   };

//   render() {
//     return (
//       <GoogleMapReact
//         defaultCenter={this.props.center}
//         defaultZoom={this.props.zoom}
//       >
//         <AnyReactComponent
//           lat={59.955413}
//           lng={30.337844}
//           text={"Kreyser Avrora"}
//         />
//       </GoogleMapReact>
//     );
//   }
// }

export default App;
