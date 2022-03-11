import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../services/auth";
const userData = localStorage.getItem("user");
const user = userData && JSON.parse(userData);

export const register = createAsyncThunk(
  "auth/register",
  async (
    {
      userName,
      userId,
      password,
    }: { userName: string; userId: string; password: string },
    thunkAPI
  ) => {
    try {
      const response = await authService.register(userName, userId, password);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue("register failed");
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (
    { userId, password }: { userId: string; password: string },
    thunkAPI
  ) => {
    try {
      const data = await authService.login(userId, password);
      return { user: data };
    } catch (err) {
      thunkAPI.rejectWithValue("login failed");
    }
  }
);
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoggedIn = false;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isLoggedIn = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload?.user;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    });
  },
});

const { reducer } = authSlice;
export default reducer;
