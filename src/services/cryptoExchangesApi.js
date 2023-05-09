import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoExchangesApiHeaders = {
  'X-CoinAPI-Key': import.meta.env.VITE_CRYPTO_EXCHANGES_API_KEY,
  'X-CoinAPI-Host': 'rest.coinapi.io',
};

const baseUrl = 'https://rest.coinapi.io';

const createRequest = (url) => ({ url, headers: cryptoExchangesApiHeaders });

export const cryptoExchangesApi = createApi({
  reducerPath: 'cryptoExchangesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getExchanges: builder.query({
      query: () => createRequest(`/v1/exchanges`),
    }),
    getIcons: builder.query({
      query: () => createRequest(`/v1/exchanges/icons/64`),
    }),
  }),
});

export const { useGetExchangesQuery, useGetIconsQuery } = cryptoExchangesApi;
