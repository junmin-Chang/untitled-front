import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import authService from "../../services/auth/index";
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
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data.message);
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
      const response = await authService.login(userId, password);
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return { user: response.data };
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

export const getProfile = createAsyncThunk("auth/profile", async () => {
  await authService.getProfile();
});

export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    return await authService.refresh(state.auth.user?.refreshToken);
  }
);

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
    builder.addCase(refreshToken.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    });
  },
});

const { reducer } = authSlice;
export default reducer;
