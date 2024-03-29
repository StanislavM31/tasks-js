import { configureStore } from "@reduxjs/toolkit";
import counter from "../slice/Counter";
import counter_2 from "../slice/Counter_2";
import inputValue from "../slice/inputValue";
import Polyndrom from "../slice/Polyndrom";
import display from "../slice/displayText";
import Validation  from "../slice/Validation";
import inputCounter from "../slice/SumInputs"


const store = configureStore({
  reducer: {
    counter: counter,
    counter_2: counter_2,
    inputValue:inputValue,
    polyndrom: Polyndrom,
    displayText: display,
    validation: Validation,
    inputCounter: inputCounter,
  },
});

export default store;
