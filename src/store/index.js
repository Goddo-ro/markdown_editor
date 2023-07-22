import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import markdownReducer from "./slices/markdownSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    markdown: markdownReducer,
  }
});

let user;
const checkUserSave = () => {
  let previousUserValue = user;
  user = store.getState().user;
  if (previousUserValue !== user) {
    if (user.email) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }
}

let markdown;
const checkMarkdownSave = () => {
  let previousMarkdownValue = markdown;
  markdown = store.getState().markdown;
  if (previousMarkdownValue !== markdown) {
    if (markdown.id) {
      localStorage.setItem("curDoc", JSON.stringify(markdown));
    } else {
      localStorage.removeItem("curDoc");
    }
  }
}

const handleUserChange = () => {
  checkUserSave();
  checkMarkdownSave();
}

store.subscribe(handleUserChange)