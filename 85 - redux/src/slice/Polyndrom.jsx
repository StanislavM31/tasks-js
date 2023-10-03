/*
4. Создайте компонент формы. По клику на кнопку собрать данные из input и
проверить вводимую строку на палиндром
 */

import { createSlice } from "@reduxjs/toolkit";

const polyndrome = createSlice({
  name: "polyndrome",
  initialState: {
    input: "",
    result: false,
  },
  reducers: {
    fillInput: function (state, data) {
      return { ...state, input: data.payload };
    },
    isPolyndrom: function (state) {
      if (state.input == state.input.split(``).reverse().join(``)) {
        return {
          ...state,
          result: true,
        };
      } else {
        return {
          ...state,
          result: false,
        };
      }
    },
  },
});

export default polyndrome.reducer;
export const { fillInput, isPolyndrom } = polyndrome.actions;
