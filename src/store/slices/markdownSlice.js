import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("curDoc")
  ? JSON.parse(localStorage.getItem("curDoc"))
  : {
    title: null,
    body: null,
    id: null,
    userId: null,
  };

const markdownSlice = createSlice({
  name: 'markdown',
  initialState,
  reducers: {
    setMarkdown(state, action) {
      state.title = action.title;
      state.body = action.body;
      state.id = action.id;
      state.userId = action.userId;
    },
    removeMarkdown(state) {
      state.title = state.body = state.id = state.userId = null;
    },
  },
});

export const {setMarkdown, removeMarkdown} = markdownSlice.actions;
export default markdownSlice.reducer;