import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Polygon,
} from "react-google-maps";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MapThingy = withScriptjs(
  withGoogleMap(props => {
    const potentialPois =
      props.pois &&
      props.pois.map &&
      props.pois.map((poi, i) => {
        return (
          <Marker
            key={i}
            position={poi.pos}
            label={poi.name}
            className="some-class-name"
          />
        );
      });
    return (
      <GoogleMap defaultZoom={props.zoom} defaultCenter={props.center}>
        {potentialPois}
        <Polygon
          path={[
            props.center,
            { lat: 28.10439, lng: -15.422037 },
            { lat: 28.124555, lng: -15.694249 },
          ]}
        />
      </GoogleMap>
    );
  })
);

export default MapThingy;
