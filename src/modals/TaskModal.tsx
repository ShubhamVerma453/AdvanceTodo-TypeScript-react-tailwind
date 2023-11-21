import React, { useState } from "react";
import ConfigureMenu from "../components/ConfigureMenu";
import DeleteModal from "./DeleteModel";
import SubtaskBox from "../components/Subtask";
import { useDispatch, useSelector } from "react-redux";
import { changeSubtaskState, deleteTask, selectData, selectIndex } from "../store/dataSlice";
import AddEditTaskModel from "./AddEditTaskModel";

interface TaskModalProps {
    setIsTaskModelOpen: (arg0: boolean) => void,
    colIndex: number,
    taskIndex: number,
}

const TaskModal: React.FC<TaskModalProps> = ({ setIsTaskModelOpen, colIndex, taskIndex }) => {
    const activeIndex = useSelector(selectIndex);
    const data = useSelector(selectData)[activeIndex];
    const task = data.columns[colIndex].tasks[taskIndex];
    const [isCongigureOpen, setIsCongigureOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isAddEditTaskModelOpen, setIsAddEditTaskModelOpen] = useState(false);
    const dispatch = useDispatch();

    function onDeleteTask() {
        setIsTaskModelOpen(false);
        dispatch(deleteTask({ taskIndex, colIndex }));
    }

    function onChangeSubtask(subtaskIndex: number) {
        dispatch(changeSubtaskState({ colIndex, taskIndex, subtaskIndex }));
    }

    return (
        <div onClick={(e) => {
            if (e.target !== e.currentTarget) return;
            setIsTaskModelOpen(false);
        }} className="fixed right-0 top-0 left-0 bottom-0 px-2 py-4 overflow-scroll z-50 justify-center items-center flex bg-[#00000050] dark:bg-[#000000b3]">
            <div className=" scrollbar-hide overflow-y-scroll whitespace-normal max-h-[95vh]  my-auto  bg-white dark:bg-[#2b2c37] text-black dark:text-white font-bold max-w-md mx-auto w-full px-8 py-8 rounded-xl ">
                <div className=" relative flex justify-between w-full items-center">
                    <h1 className=" text-lg">{task.title}</h1>
                    <i className="fa-solid fa-ellipsis-vertical fa-lg cursor-pointer" onClick={() => { setIsCongigureOpen(preState => !preState) }}></i>
                    {isCongigureOpen && <ConfigureMenu type="Task" setIsDeleteModalOpen={setIsDeleteModalOpen} setEditModelOpen={setIsAddEditTaskModelOpen} />}
                </div>

                <p className=" text-gray-500 font-[600] tracking-wide text-xs pt-6 whitespace-normal"> {task.description} </p>

                <p className=" pt-6 text-gray-500 tracking-widest text-sm">
                    Subtasks ({task.subtasks.reduce((acc, curr) => curr.isCompleted ? acc + 1 : acc, 0)} of {task.subtasks.length})
                </p>

                <div className=" mt-3 space-y-2">
                    {task.subtasks.map((subtask, index) => {
                        return (
                            <SubtaskBox
                                key={index}
                                onChangeSubtask={() => onChangeSubtask(index)}
                                title={subtask.title}
                                isCompleted={subtask.isCompleted}
                            />
                        );
                    })}
                </div>

                <div className="mt-8 flex flex-col space-y-3">
                    <label className="text-sm dark:text-white text-gray-500">
                        Current Status
                    </label>
                    <div className=" w-full flex hover:bg-[#635fc740] dark:hover:bg-[#635fc740] rounded-md relative items-center justify-start dark:bg-[#20212c]  p-3 gap-4  bg-[#f4f7fd]">
                        {data.columns[task.status].name}
                    </div>
                </div>
            </div>

            {isDeleteModalOpen &&
                <DeleteModal type="Task" title={task.title} onDeleteBtnClick={onDeleteTask} setIsDeleteModalOpen={setIsDeleteModalOpen} />
            }

            {isAddEditTaskModelOpen &&
                <AddEditTaskModel setIsAddEditTaskModelOpen={setIsAddEditTaskModelOpen} setIsTaskModelOpen={setIsTaskModelOpen} type="Edit" colIndex={colIndex} taskIndex={taskIndex} />
            }
        </div>
    )
}

export default TaskModal;