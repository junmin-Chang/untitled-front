import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosPrivateInstance } from "../../services";
import { addPost } from "../../services/post";

interface PostReg {
  title: string;
  content: string;
  isbn: string;
}
const initialState: PostReg[] = [];

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: axiosPrivateInstance,
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: (isbn) => `/post?isbn=${isbn}`,
    }),
    getPostById: builder.query({
      query: (id: string) => `/post/${id}`,
    }),
  }),
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  refetchOnReconnect: false,
});
export const createPost = createAsyncThunk(
  "post/add",
  async (post: PostReg, thunkAPI) => {
    try {
      const response = await addPost(post);
      return response.data;
    } catch (err: any) {
      thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(createPost.rejected, (state, action) => {
      return state;
    });
  },
});
export const { useGetAllPostsQuery, useGetPostByIdQuery } = postApi;
const { reducer } = postSlice;
export default reducer;
