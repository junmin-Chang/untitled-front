import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosPrivateInstance } from "../../services";
import bookService from "../../services/book/indext";

interface Book {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  title: string;
  image: string;
  isbn: string;
  hasRead: boolean;
}
const initialState: Book[] = [];
export const addBook = createAsyncThunk(
  "book/add",
  async (book: Book, thunkAPI) => {
    try {
      const response = await bookService.addBook(book);
      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const getBooks = createAsyncThunk("book/getAll", async (_, thunkAPI) => {
  try {
    const resposne = await bookService.getBooks();
    return resposne.data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response.data.message);
  }
});
export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: axiosPrivateInstance,
  endpoints: (builder) => ({
    getBooksByName: builder.query({
      query: (name) => `/book/${encodeURI(encodeURIComponent(name))}`,
    }),
  }),
  refetchOnFocus: true,
  refetchOnReconnect: false,
});
const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(addBook.rejected, (state, action) => {
      return state;
    });
    builder.addCase(getBooks.fulfilled, (state, action) => {
      console.log(state);
      return action.payload;
    });
    builder.addCase(getBooks.rejected, (state, action) => {
      return initialState;
    });
  },
});
const { reducer } = bookSlice;
export const { useGetBooksByNameQuery } = bookApi;
export default reducer;
