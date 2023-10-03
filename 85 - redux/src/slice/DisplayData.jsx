/*
3. Создайте компонент текстового поля, который позволяет пользователю вводить
текст и отображает его в реальном времени.
*/

import {createSlice}  from "@reduxjs/toolkit";

const display = createSlice(
    {
        name: "display",
        initialState:"",
        reducers:{
            showInRealTime: function(state, action){
                console.log(`парметр_1:${state}, парметр_2:${action}`);
                return  action.payload; // Обновляем состояние текстом, переданным из экшена
            }
        }
    }
)

export default display.reducer;
export const {showInRealTime} = display.actions;