import { useState } from "react";
import PlaceDetails from "../Components/PlaceDetails";

const Lists = () => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  const places = [
    { name: "Delhi" },
    { name: "Kolkata" },
    { name: "Agra" },
    { name: "Indore" },
    { name: "Bhopal" },
    { name: "Mathura" },
    { name: "Mumbai" },
    { name: "Dodhar" },
  ];
  return (
    <>
      <div className="main_list">
        <div className="list_heading">
          <h1>Get the Restaurants, Hotels & Attractions near you!!</h1>
        </div>

        <div className="list_align">
          <div>
            <label>Type</label>

            <select
              className="list_select"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="restaurants">Restaurants</option>
              <option value="hotels">Hotels</option>
              <option value="attractions">Attractions</option>
            </select>
          </div>

          <div>
            <label>Rating</label>
            <select
              className="list_select"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option value={0}>All</option>
              <option value={3}>Above 3.0</option>
              <option value={4}>Above 4.0</option>
            </select>
          </div>
        </div>

        <div className="list_places">
          {places?.map((place, i) => (
            <div key={i} className="places_details">
              <PlaceDetails place={place} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Lists;
