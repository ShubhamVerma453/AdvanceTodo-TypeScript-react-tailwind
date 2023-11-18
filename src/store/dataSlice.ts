import { createSlice } from '@reduxjs/toolkit';
import demoData from "./data.json";

interface Subtask {
    title: string;
    isCompleted: boolean;
}
interface Task {
    title: string;
    description: string;
    status: number;
    subtasks: Subtask[];
}
interface Column {
    name: string;
    tasks: Task[];
}
interface MyData {
    name: string;
    isActive: boolean;
    columns: Column[];
}
type dataFormat = MyData[] | [];

const getInitialStateFromLocal = (): dataFormat => {
    // let localData = localStorage.getItem("todoPlusData");
    // if (localData) {
    //     try {
    //         return JSON.parse(localData);
    //     } catch (error) {
    //         console.error("Error parsing local data:", error);
    //     }
    // }
    // return [];
    return demoData.boards;
}

// const getDemoData = (): dataFormat => {
//     return demoData.boards;
// }

const initialState = {
    data: getInitialStateFromLocal(),
    activeIndex: 0,
};

export const dataSlice = createSlice({
    name: "todoData",
    initialState,
    reducers: {
        setActiveIndex(state, action) {
            state.activeIndex = action.payload;
        },

        addTask(state, action){
            const { title, status, description, subtasks} = action.payload;
            const task = { title, description, subtasks, status };
            const column = state.data[state.activeIndex].columns[status];
            column.tasks.push(task);
        }

    }
})

export const selectData = (state: { data: { data: dataFormat, activeIndex: number } }) => state.data.data;
export const selectIndex = (state: { data: { data: dataFormat, activeIndex: number } }) => state.data.activeIndex;
export const { setActiveIndex, addTask } = dataSlice.actions;
export default dataSlice.reducer;