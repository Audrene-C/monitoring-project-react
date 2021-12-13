// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'api',
  // All of our requests will have URLs starting with this
  baseQuery: fetchBaseQuery({ 
      baseUrl: 'http://monitoring-project-api.test/api',
      prepareHeaders: (headers = {}) => {
        const token = localStorage.getItem('jwt_token');
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
      }
    }),
  // The "endpoints" represent operations and requests for this server
  endpoints: builder => ({
    // The `auth` endpoint is a "query" operation that returns data
    auth: builder.query({
        query: (email, password) => {
            return {
                url: '/login', 
                method: 'POST', 
                body: {
                    email: email,
                    password: password
                }};
        }
    }),
    getUser: builder.query({
        query: userId => `/users/${userId}`
    }),
    getAlertesByUser: builder.query({
        query: userId => `/users/${userId}/alertes`
    }),
    getSitesByUser: builder.query({
      query: userId => `/users/${userId}/sites`
  }),
  })
});

// Export the auto-generated hook for the `auth` query endpoint
export const { useAuthQuery, 
  useGetUserQuery, 
  useGetAlertesByUserQuery,
  useGetSitesByUserQuery
} = apiSlice;