/*
5. Создайте компонент, который предоставляет две кнопки: "Показать" и "Скрыть".
При нажатии на "Показать" отображается текст, а при нажатии на "Скрыть" текст
скрывается.
*/

import { createSlice } from "@reduxjs/toolkit";


const display = createSlice({
    name: "displayText",
    initialState:{
        flag: false,
        result: ""
    },
    reducers:{
        showText: function () {
            return {
                flag:true,
                result: " Hi"
            }
        },
        hideText: function () {
            return {
                flag:false,
                result: ""
            }
        }
    }
})

export default display.reducer;
export const {showText, hideText} = display.actions;