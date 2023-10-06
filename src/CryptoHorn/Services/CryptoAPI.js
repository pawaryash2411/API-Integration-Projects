import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeader = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "39a9a9af84msheb2b784e0a992fbp14578bjsnd9ef74ea49a8",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";
const createRequest = (url) => ({ url, headers: cryptoApiHeader });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCrypto: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinID) => createRequest(`/coin/${coinID}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(
          // `/coin/${coinId}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${timePeriod}`
          `/coin/${coinId}/history?&timePeriod=${timePeriod}`
        ),
    }),
  }),
});

export const {
  useGetCryptoQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
