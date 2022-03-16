import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import authReducer from "../features/auth/authSlice";
import { bookApi } from "../features/book/bookSlice";
import bookReducer from "../features/book/bookSlice";
import postReducer, { postApi } from "../features/post/postSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    book: bookReducer,
    post: postReducer,
    [bookApi.reducerPath]: bookApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware),
});

setupListeners(store.dispatch);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
