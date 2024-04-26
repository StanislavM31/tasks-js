import { createSlice } from "@reduxjs/toolkit";

const inputCounter = createSlice({
  name: "inputCounter",
  initialState: {
    value1: 0,
    value2: 0,
    result: 0,
  }, //2 input 2 литерала(поля)
  reducers: {
    stateValue1: function (state, val1) {
      return {
        ...state,
        value1: val1.payload,
      };
    },
    stateValue2: function (state, val2) {
      return {
        ...state,
        value2: val2.payload,
      };
    },
    sum: function (state) {
      console.log(state.value1);
      return {
        ...state,
        result: (+state.value1) + (+state.value2),
      };
    },
  },
});

export default inputCounter.reducer;
export const { sum, stateValue1, stateValue2 } = inputCounter.actions;
