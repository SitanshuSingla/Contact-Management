import { createSlice } from "@reduxjs/toolkit";

let initialValue = {
  value: []
};

let contactReducer = createSlice({
  name: "contact",
  initialState: initialValue, // corrected property name
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.value.splice(action.payload, 1);
    },
    update: (state, action) => {
      state.value[action.payload.index] = action.payload.editData;
    }
  }
});

export let { add } = contactReducer.actions;
export let { deleteContact } = contactReducer.actions;
export let { update } = contactReducer.actions;
export let selector = (state) => state.contactReducer.value;

export default contactReducer.reducer;
