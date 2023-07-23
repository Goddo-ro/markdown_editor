import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("curDoc")
  ? JSON.parse(localStorage.getItem("curDoc"))
  : {
    isNew: true,
    title: "",
    body: "",
    id: "",
    userId: "",
  };

const markdownSlice = createSlice({
  name: 'markdown',
  initialState,
  reducers: {
    setMarkdown(state, action) {
      state.isNew = false;
      state.title = action.payload.title;
      state.body = action.payload.body;
      state.id = action.payload.id;
      state.userId = action.payload.userId;
    },
    removeMarkdown(state) {
      state.title = state.body = state.id = state.userId = "";
      state.isNew = true;
    },
  },
});

export const {setMarkdown, removeMarkdown} = markdownSlice.actions;
export default markdownSlice.reducer;