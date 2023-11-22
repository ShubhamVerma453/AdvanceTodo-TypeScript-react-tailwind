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
    let localData = localStorage.getItem("todoPlusData");
    if (localData) {
        try {
            return JSON.parse(localData);
        } catch (error) {
            console.error("Error parsing local data:", error);
        }
    } else {
        return [];
    }
    return [];
}

const saveDataToLocalStorage = (data : MyData[] | []) => {
    localStorage.setItem("todoPlusData", JSON.stringify(data))
}

const initialState = {
    data: getInitialStateFromLocal(),
    activeIndex: 0,
};

export const dataSlice = createSlice({
    name: "todoData",
    initialState,
    reducers: {
        populateDemoData(state) {
            state.data = demoData.boards;
            localStorage.setItem("todoPlusData", JSON.stringify(demoData.boards))
        },

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
            saveDataToLocalStorage(state.data)
        },

        addTask(state, action) {
            const { title, status, description, subtasks } = action.payload;
            const task = { title, description, subtasks, status };
            const column = state.data[state.activeIndex].columns[status];
            column.tasks.push(task);
            saveDataToLocalStorage(state.data)
        },

        editBoard(state, action) {
            const updatedData = [...state.data];
            updatedData[state.activeIndex] = {
                name: action.payload.boardName,
                columns: action.payload.newColumns,
            };
            state.data = updatedData;
            saveDataToLocalStorage(state.data)
        },

        editTask(state, action) {
            const { title, status, description, subtasks, taskIndex, colIndex } = action.payload;
            const task = { title, description, subtasks, status };
            const column = state.data[state.activeIndex].columns[colIndex];
            if (colIndex !== task.status) {
                column.tasks = [...column.tasks.slice(0, taskIndex), ...column.tasks.slice(taskIndex + 1)];
                const updatedColumn = state.data[state.activeIndex].columns[status];
                updatedColumn.tasks = [task, ...updatedColumn.tasks];
            } else {
                column.tasks = [...column.tasks.slice(0, taskIndex), task, ...column.tasks.slice(taskIndex + 1)]
            }
            saveDataToLocalStorage(state.data)
        },

        deleteBoard(state, action) {
            state.activeIndex = 0;
            state.data = [...state.data.slice(0, action.payload), ...state.data.slice(action.payload + 1)];
            saveDataToLocalStorage(state.data)
        },

        deleteTask(state, action) {
            const { taskIndex, colIndex } = action.payload;
            const column = state.data[state.activeIndex].columns[colIndex];
            column.tasks = [...column.tasks.slice(0, taskIndex), ...column.tasks.slice(taskIndex + 1)];
            saveDataToLocalStorage(state.data)
        },

        changeSubtaskState(state, action) {
            const { colIndex, taskIndex, subtaskIndex } = action.payload;
            const subtask = state.data[state.activeIndex].columns[colIndex].tasks[taskIndex].subtasks[subtaskIndex];
            subtask.isCompleted = !subtask.isCompleted;
            saveDataToLocalStorage(state.data)
        },

        dragTask(state, action) {
            const {prevColIndex, taskIndex, colIndex} = action.payload;
            if(prevColIndex === colIndex) return;
            const column = state.data[state.activeIndex].columns[colIndex];
            const preCol = state.data[state.activeIndex].columns[prevColIndex];
            const task = state.data[state.activeIndex].columns[prevColIndex].tasks[taskIndex];
            task.status = colIndex;
            preCol.tasks = [...preCol.tasks.slice(0, taskIndex), ...preCol.tasks.slice(taskIndex + 1)];
            column.tasks = [task, ...column.tasks];
            saveDataToLocalStorage(state.data)
        },
    }
})

export const selectData = (state: { data: { data: dataFormat, activeIndex: number } }) => state.data.data;
export const selectIndex = (state: { data: { data: dataFormat, activeIndex: number } }) => state.data.activeIndex;
export const { populateDemoData, setActiveIndex, addBoard, addTask, editBoard, editTask, deleteBoard, deleteTask, changeSubtaskState, dragTask } = dataSlice.actions;
export default dataSlice.reducer;