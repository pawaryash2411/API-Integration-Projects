import axios from "axios";

const URL = "https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete";

const options = {
  url: URL,
  params: {
    bl_latitude: "11.847676",
    bl_longitude: "108.473209",
    tr_longitude: "109.149359",
    tr_latitude: "12.838442",
    limit: "30",
    currency: "USD",
    subcategory: "hotel,bb,specialty",
    adults: "1",
  },
  headers: {
    "X-RapidAPI-Key": "39a9a9af84msheb2b784e0a992fbp14578bjsnd9ef74ea49a8",
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
};
export const getPlaceData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, options);
    return data;
  } catch (error) {
    console.log(error);
  }
};
