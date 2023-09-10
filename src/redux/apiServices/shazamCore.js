
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const shazamCoreApi = createApi({
    reducerPath:'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '9eb1c3e4fbmsh496ad6c7c4d5dd2p1c8162jsn3921bbe0ee59');
            headers.set('X-RapidAPI-Host', 'shazam.p.rapidapi.com' )
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getChartsTrack: builder.query({
          query: () => '/charts/track'
        }),
    }),
});


export const {useGetChartsTrackQuery} = shazamCoreApi;

