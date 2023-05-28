import { configureStore } from "@reduxjs/toolkit";

import contactReducer from "./reducer";

export let store = configureStore({
  reducer: {
    contactReducer: contactReducer
  }
});
