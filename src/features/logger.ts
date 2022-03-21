import {
  MiddlewareAPI,
  isRejectedWithValue,
  isFulfilled,
  Middleware,
} from "@reduxjs/toolkit";
import { toast } from "react-toastify";
/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
    if (isRejectedWithValue(action)) {
      toast.error(action.payload, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }

    return next(action);
  };
