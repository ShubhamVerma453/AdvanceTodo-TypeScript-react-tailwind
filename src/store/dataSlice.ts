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

        addBoard(state, action) {
            const board: MyData = {
                name: action.payload.boardName,
                columns: action.payload.newColumns,
            };
            state.data = [...state.data, board];
            state.activeIndex = state.data.length - 1;
        },

        addTask(state, action) {
            const { title, status, description, subtasks } = action.payload;
            const task = { title, description, subtasks, status };
            const column = state.data[state.activeIndex].columns[status];
            column.tasks.push(task);
        },

        editBoard(state, action) {
            const updatedData = [...state.data];
            updatedData[state.activeIndex] = {
                name: action.payload.boardName,
                columns: action.payload.newColumns,
            };
            state.data = updatedData;
        },

    }
})

export const selectData = (state: { data: { data: dataFormat, activeIndex: number } }) => state.data.data;
export const selectIndex = (state: { data: { data: dataFormat, activeIndex: number } }) => state.data.activeIndex;
export const { setActiveIndex, addBoard, addTask, editBoard } = dataSlice.actions;
export default dataSlice.reducer;