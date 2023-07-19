import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  }
});

const handleUserChange = () => {
  const user = store.getState().user;
  if (user.email) {
    localStorage.setItem("user", JSON.stringify(user));
  } else {
    localStorage.removeItem("user");
  }
}

store.subscribe(handleUserChange)