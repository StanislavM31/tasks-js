/* import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";


const superstore = configureStore({
    reducer:{
        collectedInput: function(state, data){
            return data.payload;
        }

    }
})
const counterSum = createSlice({
    name:"inputCounter",
    initialState: 0,
    reducers:{
        sum:{
            function(e){
                return e.target.value;
            }
        }
    }
})

export default counterSum.reducer;
export const{sum} = counterSum.actions; */