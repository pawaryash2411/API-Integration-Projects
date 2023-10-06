import { useEffect, useState } from "react";
import Header from "./Header";
import Lists from "./Lists";
import Map from "./Map";
import { getPlaceData } from "../api";

const TravelGuide = () => {
  const [places, SetPlaces] = useState([]);
  useEffect(() => {
    getPlaceData().then((data) => {
      console.log("REAL DATA", data);
      SetPlaces(data);
    });
  }, []);
  return (
    <>
      <Header />
      <div className="main_grid">
        <Lists />
        <Map />
      </div>
    </>
  );
};

export default TravelGuide;
