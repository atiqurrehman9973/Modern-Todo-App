import { configureStore } from "@reduxjs/toolkit";
import myreducer from "./TodoSlice";
 export const MyStore = configureStore({
reducer:{
    todo: myreducer,
}
});