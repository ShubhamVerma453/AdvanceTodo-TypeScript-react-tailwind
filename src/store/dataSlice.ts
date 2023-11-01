import { createSlice } from '@reduxjs/toolkit';
import demoData from "./data.json";

type dataFormat = Array<object> | [];

const getInitialStateFromLocal = (): dataFormat => {
    let localData = localStorage.getItem("todoPlusData");
    if (localData) {
        try {
            return JSON.parse(localData) as Array<object>;
        } catch (error) {
            console.error("Error parsing local data:", error);
        }
    }
    // return [];
    return  demoData.boards;
}

const getDemoData = (): dataFormat => {
    return demoData.boards;
}

const initialState = {
    data: getInitialStateFromLocal(),
};

export const dataSlice = createSlice({
    name: "todoData",
    initialState,
    reducers: {

    }
})

export const selectData = (state: { data: { data: dataFormat } }) => state.data.data;
export default dataSlice.reducer;