import "../Styles/TravelGuide.css";

const PlaceDetails = (props) => {
  return <h1 className="place-details">{props.place.name}</h1>;
};

export default PlaceDetails;
