import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoExchangesApiHeaders = {
  'X-CMC_PRO_API_KEY': import.meta.env.VITE_CRYPTO_EXCHANGES_API_KEY,
  'Content-Type': 'application/json',
};

const baseUrl = 'https://pro-api.coinmarketcap.com';

const createRequest = (url) => ({ url, headers: cryptoExchangesApiHeaders });

export const cryptoExchangesApi = createApi({
  reducerPath: 'cryptoExchangesApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getExchanges: builder.query({
      query: (id) => createRequest(`/v1/exchange/info?&id=${id}`),
    }),
  }),
});

// const baseUrl = 'https://api.cryptorank.io';
// export const cryptoExchangesApi = createApi({
//   reducerPath: 'cryptoExchangesApi',
//   baseQuery: fetchBaseQuery({ baseUrl }),
//   endpoints: (builder) => ({
//     getExchanges: builder.query({
//       query: () =>
//         createRequest(
//           `/v1/exchanges?api_key=${
//             import.meta.env.VITE_CRYPTO_EXCHANGES_API_KEY
//           }`
//         ),
//     }),
//   }),
// });

export const { useGetExchangesQuery } = cryptoExchangesApi;
