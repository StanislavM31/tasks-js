import { configureStore } from "@reduxjs/toolkit";
import counter from "../slice/Counter";
import counter_2 from "../slice/Counter_2";

const store = configureStore({
  reducer: { counter: counter, counter_2: counter_2 },
});

export default store;
