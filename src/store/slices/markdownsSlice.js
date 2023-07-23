import { createSlice } from "@reduxjs/toolkit";
import MarkdownService from "../../services/MarkdownService";

const initialState = {
  markdowns: [],
}

const markdownSlice = createSlice({
  name: 'markdowns',
  initialState,
  reducers: {
    setMarkdowns(state, action) {
      state.markdowns = action.payload.markdowns;
    },
  },
});

export async function fetchMarkdowns(id, dispatch) {
  const data = await MarkdownService.getAll();
  const filteredData = data.docs.map((doc) =>
    ({ ...doc.data(), id: doc.id })).filter(doc => doc.userId === id);
  console.log(filteredData);
  dispatch(setMarkdowns({ markdowns: filteredData }));
}

export const { setMarkdowns } = markdownSlice.actions;
export default markdownSlice.reducer;
