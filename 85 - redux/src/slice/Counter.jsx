/*
1. Создайте компонент инкремента. Компонент возвращает кнопку и параграф, в
котором отображается значение (первоначальное значение 1). Ваша задача так
реализовать функционал, чтобы при клике на кнопку автоматически
прибавлялась +1 к значению параграфа
slice - совокупность action и reducer
*/

import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
    name: "counter", //название useState
    initialState: 0,
    reducers: {
        increment: function (prev_state){
            return prev_state + 1;
        }
    }
})

export default counter.reducer;
export const{increment} = counter.actions;
