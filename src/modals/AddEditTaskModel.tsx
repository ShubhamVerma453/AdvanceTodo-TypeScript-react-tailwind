import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectData, selectIndex } from "../store/dataSlice";

interface AddEditTaskModelProps {
    setIsAddEditTaskModelOpen: (arg0: boolean) => void,
}

const AddEditTaskModel: React.FC<AddEditTaskModelProps> = ({ setIsAddEditTaskModelOpen }) => {
    const activeIndex = useSelector(selectIndex);
    const data = useSelector(selectData)[activeIndex];
    const [taskName, setTaskName] = useState("");
    const [taskDisc, setTaskDisc] = useState("");
    const [taskStatus, setTaskStatus] = useState(getCurrStatus());
    const [showError, setShowError] = useState(false);
    const [subtasks, setSubtasks] = useState([
        { title: "", isCompleted: false },
    ]);

    function getCurrStatus() {
        return data.columns[0].name;
    }

    function onDeleteSubtask(title: string) {
        setSubtasks(pre => pre.filter((curr) => curr.title !== title));
    }

    function onChangeSubtask(index: number, newTitle: string) {
        setSubtasks((prevSubtasks) => {
            return prevSubtasks.map((subtask, i) =>
                i === index ? { ...subtask, title: newTitle } : subtask
            );
        });
    }

    function validate() {
        if (taskName === "") return false;
        const subtaskTitles = subtasks.map((subtask) => subtask.title);
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

                <h3 className=" text-lg ">Add New Task </h3>

                <div className="mt-8 flex flex-col space-y-1">
                    <label className="text-sm dark:text-white text-gray-500"> Task Name </label>
                    <input
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        id="task-name-input"
                        type="text"
                        className="bg-transparent px-4 py-2 focus:border-0 rounded-md text-sm border-[0.5px] border-gray-600 focus:outline-[#635fc7] outline-none"
                        placeholder="e.g Take coffee break"
                    />
                </div>

                <div className="mt-8 flex flex-col space-y-1">
                    <label className="  text-sm dark:text-white text-gray-500"> Description </label>
                    <textarea
                        value={taskDisc}
                        onChange={(e) => setTaskDisc(e.target.value)}
                        id="task-description-input"
                        className="bg-transparent outline-none min-h-[200px] focus:border-0 px-4 py-2 rounded-md text-sm border-[0.5px] border-gray-600 focus:outline-[#635fc7] outline-[1px] "
                        placeholder="e.g. It's always good to take a break. This 
                            15 minute break will  recharge the batteries 
                            a little."
                    />
                </div>

                <div className="mt-8 flex flex-col space-y-3">
                    <label className="text-sm dark:text-white text-gray-500"> Subtasks </label>

                    {subtasks.map((subtask, subTaskIndex) => (
                        <div key={subTaskIndex} className=" flex items-center w-full ">
                            <input
                                onChange={(e) => {
                                    onChangeSubtask(subTaskIndex, e.target.value);
                                }}
                                type="text"
                                value={subtask.title}
                                className=" bg-transparent outline-none focus:border-0 flex-grow px-4 py-2 rounded-md text-sm  border-[0.5px] border-gray-600 focus:outline-[#635fc7] outline-[1px]  "
                                placeholder=" e.g Take coffee break"
                            />
                            <i className="fa-solid fa-xmark fa-lg m-4 cursor-pointer"
                                onClick={() => {
                                    onDeleteSubtask(subtask.title);
                                }}
                            ></i>
                        </div>
                    ))}

                    <button className="w-full items-center dark:text-[#635fc7] dark:bg-white text-white bg-[#635fc7] py-2 rounded-full"
                        onClick={() => {
                            setSubtasks((state) => [
                                ...state,
                                { title: "", isCompleted: false },
                            ]);
                        }}
                    > + Add New Subtask </button>
                </div>

                <div className="mt-8 flex flex-col space-y-3">
                    <label className="  text-sm dark:text-white text-gray-500"> Current Status </label>
                    <select
                        value={taskStatus}
                        onChange={(e) => setTaskStatus(e.target.value)}
                        className=" select-status flex-grow px-4 py-2 rounded-md text-sm bg-transparent focus:border-0  border-[1px] border-gray-300 focus:outline-[#635fc7] outline-none"
                    >
                        {data.columns.map((column, index) => (
                            <option key={index} className="dark:text-black">{column.name}</option>
                        ))}
                    </select>
                    <button className=" w-full items-center text-white bg-[#635fc7] py-2 rounded-full "
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