import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { selectData, selectIndex } from "../store/dataSlice";

interface SideBarProps {
    isOpen: boolean;
}

const TodoBoard: React.FC<SideBarProps> = ({ isOpen }) => {

    const activeIndex = useSelector(selectIndex);
    let data = useSelector(selectData)[activeIndex];
    const [isCongigureOpen, setIsCongigureOpen] = useState(false);
    const colors = [
        "bg-red-500",
        "bg-yellow-500",
        "bg-blue-500",
        "bg-purple-500",
        "bg-green-500",
        "bg-indigo-500",
        "bg-orange-500",
        "bg-pink-500",
        "bg-sky-500",
    ];

    function toggleIsCongigureOpen() {
        setIsCongigureOpen(preState => !preState);
    }

    return <div className={`bg-[#f4f7fd] dark:bg-black rounded-tl-2xl p-6 mt-[84px] smooth ${isOpen && "ml-[90px]"} min-h-[90vh]`}>

        {data ? <>
            <div className="flex gap-3 items-center flex-wrap ml-4">
                <h1 className="text-3xl font-bold mr-4">{data.name}</h1>
                <div className="flex gap-5 items-center">
                    <div title="Add task" className="text-xl bg-slate-300 dark:bg-slate-700 cursor-pointer px-3 py-1 rounded-full hover:bg-[#03C988] dark:hover:bg-[#03C988]"><i className="fa-solid fa-plus"></i></div>
                    <div title="Configure board" onClick={toggleIsCongigureOpen} className="text-xl relative bg-slate-300 dark:bg-slate-700 cursor-pointer px-3 py-1 rounded-full hover:bg-[#03C988] dark:hover:bg-[#03C988]">
                        <i className="fa-solid fa-gears"></i>
                        {isCongigureOpen &&
                            <div className="bg-white dark:bg-[#2b2c37] shadow-sm w-32 p-2 rounded-lg text-sm absolute top-10 left-0 z-10">
                                <div className="hover:bg-[#03C988] px-2 py-1 rounded-lg">edit board</div>
                                <div className="text-red-600 hover:bg-red-300 px-2 py-1 rounded-lg">delete board</div>
                            </div>
                        }
                    </div>
                </div>
            </div>

            <div className="overflow-scroll whitespace-nowrap">

                {data.columns && data.columns.map((item, index) => {
                    return (

                        <div className="my-4 p-4 mr-5 w-80  inline-block align-top" key={index}>
                            <div className="flex items-center gap-3 mb-7">
                                <span className={`${colors[index % (colors.length)]} inline-block w-5 h-5 rounded-full`}></span>
                                {item.name} ({item.tasks.length})
                            </div>

                            <div className="">
                                {item.tasks.map((task, index) => {
                                    return <div key={index} className="bg-white p-5 mb-9 rounded-xl shadow-lg dark:bg-[#2b2c37] hover:text-[#03C988]">
                                        <div className="font-bold whitespace-break-spaces">{task.title}</div>
                                        <div className="text-gray-500 dark:text-gray-400">{task.subtasks.reduce((acc, curr) => curr.isCompleted ? acc + 1 : acc, 0)} of {task.subtasks.length} completed task</div>
                                    </div>
                                })}
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </> :

        <div className="text-center">
            <h1 className="text-4xl mt-36 text-slate-400 dark:text-[#2b2c37]">Select a board</h1>
        </div>
        }
    </div>
}

export default TodoBoard;