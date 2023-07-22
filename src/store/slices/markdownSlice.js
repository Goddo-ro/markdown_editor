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
      state.title = action.payload.title;
      state.body = action.payload.body;
      state.id = action.payload.id;
      state.userId = action.payload.userId;
    },
    removeMarkdown(state) {
      state.title = state.body = state.id = state.userId = null;
    },
  },
});

export const {setMarkdown, removeMarkdown} = markdownSlice.actions;
export default markdownSlice.reducer;