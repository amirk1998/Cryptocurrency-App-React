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
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      headers.set(
        'X-CMC_PRO_API_KEY',
        import.meta.env.VITE_CRYPTO_EXCHANGES_API_KEY
      );
      return headers;
    },
    mode: 'cors',
  }),
  endpoints: (builder) => ({
    getExchanges: builder.query({
      query: (id) => createRequest(`/v1/exchange/info?&id=${id}`),
    }),
  }),
});

export const { useGetExchangesQuery } = cryptoExchangesApi;
