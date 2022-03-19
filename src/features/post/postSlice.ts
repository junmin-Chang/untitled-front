import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosPrivateInstance } from "../../services";
import { addPost, deleteComment, deletePost } from "../../services/post";

interface PostReg {
  title: string;
  content: string;
  isbn: string;
  id?: string;
  comment?: any[];
}
const initialState: PostReg[] = [];

export const postApi = createApi({
  tagTypes: ["Post"],
  reducerPath: "postApi",
  baseQuery: axiosPrivateInstance,
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: (isbn) => `/post?isbn=${isbn}`,
      providesTags: (result, err, id) => [{ type: "Post", id: "LIST" }],
    }),
    getPostById: builder.query({
      query: (id: string) => `/post/${id}`,
      providesTags: (result, err, id) => [{ type: "Post", id }],
    }),
    addComment: builder.mutation({
      queryFn: ({ id, data }) =>
        axiosPrivateInstance({
          url: `/comment/${id}`,
          method: "POST",
          data,
        }),
      invalidatesTags: (result, err, arg) => {
        console.log("arg", arg);
        return [
          { type: "Post", id: arg.id },
          { type: "Post", id: "LIST" },
        ];
      },
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

export const removePost = createAsyncThunk(
  "post/delete",
  async (id: string, thunkAPI) => {
    try {
      const response = await deletePost(id);
      return response.data;
    } catch (err: any) {
      thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const removeComment = createAsyncThunk(
  "post/removeComment",
  async ({ commentId }: { commentId: string }, thunkAPI) => {
    try {
      const response = await deleteComment(commentId);
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
    builder.addCase(removePost.fulfilled, (state, action) => {
      return state.filter((post) => post.id !== action.payload.id);
    });
    builder.addCase(removePost.rejected, (state, action) => {
      return state;
    });
  },
});
export const {
  useGetAllPostsQuery,
  useGetPostByIdQuery,
  useAddCommentMutation,
} = postApi;
const { reducer } = postSlice;
export default reducer;
