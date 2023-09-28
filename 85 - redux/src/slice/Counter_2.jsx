/*
2. Создайте компонент, который будет отображать числовое значение и кнопки "+1"
и "-1". При нажатии на кнопку увеличивать и уменьшать значения счетчика.
*/

import { createSlice } from "@reduxjs/toolkit";

const counter_2 = createSlice({
    name: "counter_2",
    initialState: 0,
    reducers:{
        increment: function(prev_state){
            return prev_state + 1;
        },
        decrement: function(prev_state){
            return prev_state - 1;
        }
    }
})

export default counter_2.reducer;
export const{increment, decrement} = counter_2.actions;

