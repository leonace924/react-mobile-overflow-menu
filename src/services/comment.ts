import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const commentApi = createApi({
  reducerPath: 'commentApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getCommentById: builder.query<Comment, number>({
      query: (id: number) => `comments/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetCommentByIdQuery } = commentApi;
