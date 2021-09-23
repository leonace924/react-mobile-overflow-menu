import { configureStore } from '@reduxjs/toolkit';
import { commentApi } from 'services/comment';

export const store = configureStore({
  reducer: {
    [commentApi.reducerPath]: commentApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(commentApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
