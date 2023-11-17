import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectData, selectIndex } from "../store/dataSlice";

interface AddEditTaskModelProps {
    setIsAddEditTaskModelOpen: (arg0: boolean) => void,
    type: "Add" | "Edit",
    colIndex?: number,
    taskIndex?: number,
}

const AddEditTaskModel: React.FC<AddEditTaskModelProps> = ({ setIsAddEditTaskModelOpen, type, colIndex = -1, taskIndex = -1 }) => {
    const activeIndex = useSelector(selectIndex);
    const data = useSelector(selectData)[activeIndex];
    const [task, setTask] = useState(getCurrTask());
    const [showError, setShowError] = useState(false);

    function getCurrTask() {
        if (colIndex === -1) {
            return {
                title: "",
                description: "",
                subtasks: [{ title: "", isCompleted: false }],
                status: data.columns[0].name,
            }
        } else {
            return data.columns[colIndex].tasks[taskIndex];
        }
    }

    function updateTask(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        const { name, value } = e.target;
        setTask((prevTask) => ({
            ...prevTask,
            [name]: value,
        }));
    }

    function onDeleteSubtask(index: number) {
        setTask(preTask => {
            const updatedSubtasks = [...preTask.subtasks.slice(0, index), ...preTask.subtasks.slice(index + 1)];
            return {
                ...preTask,
                subtasks: updatedSubtasks,
            }
        })
    }

    function onChangeSubtask(index: number, changeSubtask: string) {
        setTask(preTask => {
            const updatedSubtasks = [...preTask.subtasks];
            updatedSubtasks[index] = { ...updatedSubtasks[index], title: changeSubtask };
            return {
                ...preTask,
                subtasks: updatedSubtasks,
            }
        })
    }

    function validate() {
        if (task.title === "") return false;
        const subtaskTitles = task.subtasks.map((subtask) => subtask.title);
        const hasDuplicates = new Set(subtaskTitles).size !== subtaskTitles.length;
        const hasMissingTitles = subtaskTitles.includes('');

        return !(hasDuplicates || hasMissingTitles);
    }


    return (
        <div onClick={(e) => {
            if (e.target !== e.currentTarget) return;
            setIsAddEditTaskModelOpen(false);
        }} className="fixed right-0 top-0 left-0 bottom-0 px-2 py-4 overflow-scroll z-50 justify-center items-center flex bg-[#00000050] dark:bg-[#000000b3]">
            <div className=" scrollbar-hide overflow-y-scroll whitespace-normal max-h-[95vh]  my-auto  bg-white dark:bg-[#2b2c37] text-black dark:text-white font-bold max-w-md mx-auto w-full px-8 py-8 rounded-xl ">

                <h3 className=" text-lg ">{type === "Edit" ? "Edit" : "Add New"} Task </h3>

                <div className="mt-8 flex flex-col space-y-1">
                    <label className="text-sm dark:text-white text-gray-500"> Task Name </label>
                    <input className="bg-transparent px-4 py-2 rounded-md text-sm border-[0.5px] border-gray-600 focus:border-[#03C988] outline-none"
                        value={task.title}
                        onChange={updateTask}
                        name="title"
                        type="text"
                        placeholder="e.g Take coffee break"
                        autoComplete="off"
                    />
                </div>

                <div className="mt-8 flex flex-col space-y-1">
                    <label className="  text-sm dark:text-white text-gray-500"> Description </label>
                    <textarea className="bg-transparent min-h-[200px] px-4 py-2 rounded-md text-sm border-[0.5px] border-gray-600 focus:border-[#03C988] outline-none "
                        value={task.description}
                        onChange={updateTask}
                        name="description"
                        placeholder="e.g. It's always good to take a break. This 
                            15 minute break will  recharge the batteries 
                            a little."
                    />
                </div>

                <div className="mt-8 flex flex-col space-y-3">
                    <label className="text-sm dark:text-white text-gray-500"> Subtasks </label>

                    {task.subtasks.map((subtask, subTaskIndex) => (
                        <div key={subTaskIndex} className=" flex items-center w-full ">
                            <input className=" bg-transparent flex-grow px-4 py-2 rounded-md text-sm border-[0.5px] border-gray-600 focus:border-[#03C988] outline-none"
                                onChange={(e) => {
                                    onChangeSubtask(subTaskIndex, e.target.value);
                                }}
                                type="text"
                                value={subtask.title}
                                placeholder=" e.g Take coffee break"
                            />
                            <i className="fa-solid fa-xmark fa-lg m-4 cursor-pointer"
                                onClick={() => {
                                    onDeleteSubtask(subTaskIndex);
                                }}
                            ></i>
                        </div>
                    ))}

                    <button className="w-full items-center hover:opacity-70 dark:text-[#03C988] dark:bg-white text-white bg-[#03C988] py-2 rounded-full"
                        onClick={() => {
                            setTask(preTask => {
                                return {
                                    ...preTask,
                                    subtasks: [...preTask.subtasks, { title: "", isCompleted: false }]
                                }
                            })
                        }}
                    > + Add New Subtask </button>
                </div>

                <div className="mt-8 flex flex-col space-y-3">
                    <label className="text-sm dark:text-white text-gray-500"> Current Status </label>
                    <select className="select-status flex-grow px-4 py-2 rounded-md text-sm bg-transparent border-[1px] border-gray-300 focus:border-[#03C988] outline-none"
                        value={task.status}
                        onChange={updateTask}
                        name="status"
                    >
                        {data.columns.map((column, index) => (
                            <option key={index} className="dark:text-black">{column.name}</option>
                        ))}
                    </select>
                    <button className=" w-full items-center hover:opacity-70 text-white bg-[#03C988] py-2 rounded-full "
                        onClick={() => {
                            const isValid = validate();
                            if (isValid) {
                                // onSubmit(type);
                                setIsAddEditTaskModelOpen(false);
                            } else setShowError(true);
                        }}
                    > Create task </button>
                </div>
                <p className={`text-center text-xs pt-2 text-red-500 ${!showError && "opacity-0"}`}>Empty or Duplicate fields</p>
            </div>
        </div>
    )
}

export default AddEditTaskModel;