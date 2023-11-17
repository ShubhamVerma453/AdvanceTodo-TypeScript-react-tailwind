import React, { useState } from "react";
import ConfigureMenu from "../components/ConfigureMenu";
import DeleteModal from "./DeleteModel";
import SubtaskBox from "../components/Subtask";
import { useSelector } from "react-redux";
import { selectData, selectIndex } from "../store/dataSlice";
import AddEditTaskModel from "./AddEditTaskModel";

interface Subtask {
    title: string;
    isCompleted: boolean;
}
interface Task {
    title: string;
    description: string;
    status: string;
    subtasks: Subtask[];
}
interface TaskModalProps {
    task: Task,
    setIsTaskModelOpen: (arg0: boolean) => void,
    colIndex: number,
    taskIndex: number,
}

const TaskModal: React.FC<TaskModalProps> = ({ task, setIsTaskModelOpen, colIndex, taskIndex }) => {
    const activeIndex = useSelector(selectIndex);
    const data = useSelector(selectData)[activeIndex];
    const columns = data.columns;
    const [isCongigureOpen, setIsCongigureOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isAddEditTaskModelOpen, setIsAddEditTaskModelOpen] = useState(false);

    return (
        <div onClick={(e) => {
            if (e.target !== e.currentTarget) return;
            setIsTaskModelOpen(false);
        }} className="fixed right-0 top-0 left-0 bottom-0 px-2 py-4 overflow-scroll z-50 justify-center items-center flex bg-[#00000050] dark:bg-[#000000b3]">
            <div className=" scrollbar-hide overflow-y-scroll whitespace-normal max-h-[95vh]  my-auto  bg-white dark:bg-[#2b2c37] text-black dark:text-white font-bold max-w-md mx-auto w-full px-8 py-8 rounded-xl ">
                <div className=" relative flex justify-between w-full items-center">
                    <h1 className=" text-lg">{task.title}</h1>
                    <i className="fa-solid fa-ellipsis-vertical fa-lg cursor-pointer" onClick={() => { setIsCongigureOpen(preState => !preState) }}></i>
                    {isCongigureOpen && <ConfigureMenu type="Board" setIsDeleteModalOpen={setIsDeleteModalOpen} setEditModelOpen={setIsAddEditTaskModelOpen} />}
                </div>

                <p className=" text-gray-500 font-[600] tracking-wide text-xs pt-6 whitespace-normal"> {task.description} </p>

                <p className=" pt-6 text-gray-500 tracking-widest text-sm">
                    Subtasks ({task.subtasks.reduce((acc, curr) => curr.isCompleted ? acc + 1 : acc, 0)} of {task.subtasks.length})
                </p>

                <div className=" mt-3 space-y-2">
                    {task.subtasks.map((subtask, index) => {
                        return (
                            <SubtaskBox key={index} title={subtask.title} isCompleted={subtask.isCompleted} />
                        );
                    })}
                </div>

                <div className="mt-8 flex flex-col space-y-3">
                    <label className="text-sm dark:text-white text-gray-500">
                        Current Status
                    </label>
                    <select
                        className=" flex-grow px-4 py-2 rounded-md text-sm bg-transparent focus:border-0  border-[1px] border-gray-300 focus:outline-[#03C988] outline-none"
                        value={task.status}
                    //   onChange={onChange}
                    >
                        {columns.map((col, index) => (
                            <option className=" dark:text-black" key={index}>
                                {col.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {isDeleteModalOpen &&
                <DeleteModal type="Task" title={task.title} setIsDeleteModalOpen={setIsDeleteModalOpen} />
            }

            {isAddEditTaskModelOpen &&
                <AddEditTaskModel setIsAddEditTaskModelOpen={setIsAddEditTaskModelOpen} type="Edit" colIndex={colIndex} taskIndex={taskIndex} />
            }
        </div>
    )
}

export default TaskModal;