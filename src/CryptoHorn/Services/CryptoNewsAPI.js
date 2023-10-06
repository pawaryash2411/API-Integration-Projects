import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeader = {
  // "X-BingApis-SDK": "true",
  // "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
  // "X-RapidAPI-Key": "39a9a9af84msheb2b784e0a992fbp14578bjsnd9ef74ea49a8",
  // "x-bingapis-sdk": "true",
  // "x-rapidapi-key": "bing-news-search1.p.rapidapi.com",
  // "x-rapidapi-host": "39a9a9af84msheb2b784e0a992fbp14578bjsnd9ef74ea49a8",
  "X-RapidAPI-Key": "39a9a9af84msheb2b784e0a992fbp14578bjsnd9ef74ea49a8",
  "X-RapidAPI-Host": "crypto-news16.p.rapidapi.com",
};

const baseUrl = "https://crypto-news16.p.rapidapi.com";
const makeRequest = (url) => ({ url, headers: cryptoNewsHeader });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () =>
        // makeRequest(
        //   `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        // ),
        makeRequest(`/news/all`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
