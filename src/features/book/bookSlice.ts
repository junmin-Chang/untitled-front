import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi } from "@reduxjs/toolkit/query/react";
import { store } from "../../app/store";
import { axiosPrivateInstance } from "../../services";
import bookService from "../../services/book/indext";

interface Book {
  id: string;
  createdAt?: string;
  updatedAt?: string;
  title: string;
  image: string;
  isbn: string;
  hasRead: boolean;
  willRead: boolean;
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

export const getBooks = createAsyncThunk(
  "book/getAll",
  async (sortBy: string, thunkAPI) => {
    try {
      const resposne = await bookService.getBooks(sortBy);
      return resposne.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const deleteBook = createAsyncThunk(
  "/book/delete",
  async (book: Book, thunkAPI) => {
    try {
      const response = await bookService.deleteBook(book);
      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);
export const updateBook = createAsyncThunk(
  "/book/update",
  async (
    {
      id,
      hasRead,
      willRead,
    }: { id: string; hasRead: boolean; willRead: boolean },
    thunkAPI
  ) => {
    try {
      const response = await bookService.updateBook(id, {
        hasRead,
        willRead,
      });
      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);
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
      return action.payload;
    });
    builder.addCase(getBooks.rejected, (state, action) => {
      return initialState;
    });
    builder.addCase(deleteBook.fulfilled, (state, action) => {
      return state.filter((book) => book.id !== action.payload.id);
    });
    builder.addCase(deleteBook.rejected, (state, action) => {
      return state;
    });
    builder.addCase(updateBook.fulfilled, (state, action) => {
      const { id } = action.payload;
      return state.map((book) => {
        if (id !== book.id) return book;
        return {
          ...action.payload,
        };
      });
    });
    builder.addCase(updateBook.rejected, (state, action) => {
      return state;
    });
  },
});
const { reducer } = bookSlice;
export const { useGetBooksByNameQuery } = bookApi;
export default reducer;
