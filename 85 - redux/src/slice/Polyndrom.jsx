/*
4. Создайте компонент формы. По клику на кнопку собрать данные из input и
проверить вводимую строку на палиндром
 */

import { createSlice } from "@reduxjs/toolkit";

const polyndrome = createSlice({
  name: "polyndrome",
  initialState: "",
  reducers: {
    isPolyndrom: function (state, action) {
      console.log(`параметр_1:${state}, параметр_2:${action.payload}`);
      return action.payload;
    },
  },
});

export default polyndrome.reducer;
export const { isPolyndrom } = polyndrome.actions;