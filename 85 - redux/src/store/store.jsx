import { configureStore } from "@reduxjs/toolkit";
import counter from "../slice/Counter";
import counter_2 from "../slice/Counter_2";
import display from "../slice/DisplayData";



const store = configureStore({
  reducer: {
    counter: counter,
    counter_2: counter_2,
    display:display },
});

export default store;
