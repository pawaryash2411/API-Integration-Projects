import GoogleMapReact from "google-map-react";
import "../Styles/TravelGuide.css";

const Map = () => {
  const coordinates = { lat: 0, lng: 0 };
  return (
    <>
      <div className="main_map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB67jcpgndlPf9hMt8LMtPnmFfYt8K-urc" }}
          defaultZoom={14}
          center={coordinates}
          defaultCenter={coordinates}
          margin={[50, 50, 50, 50]}
          options={""}
          onChange={""}
          onChildClick={""}
        ></GoogleMapReact>
      </div>
    </>
  );
};

export default Map;
