import { createSlice } from "@reduxjs/toolkit";

const LanguageSlice = createSlice({
  name: "language",
  initialState: { selectedLanguage: { identifier: "en", value: "English" } },
  reducers: {
    addSelectedLanguage: (state, action) => {
      state.selectedLanguage = action.payload;
    },
  },
});

export const { addSelectedLanguage } = LanguageSlice?.actions;
export default LanguageSlice?.reducer;
