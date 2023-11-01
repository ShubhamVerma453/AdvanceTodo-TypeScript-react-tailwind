import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { selectData } from "../store/dataSlice";

interface SideBarProps {
    isOpen: boolean;
}

const TodoBoard: React.FC<SideBarProps> = ({ isOpen }) => {

    let data = useSelector(selectData);
    console.log(data);

    return <div className={`bg-[#f4f7fd] dark:bg-black rounded-tl-2xl p-6 mt-[84px] smooth ${isOpen && "side-bar-open"}`}>

        <div className="flex gap-3 items-center flex-wrap ml-4">
            <h1 className="text-3xl font-bold mr-4">Board Name</h1>
            <div className="flex gap-5 items-center">
                <div title="Add task" className="text-xl bg-slate-300 dark:bg-slate-700 cursor-pointer px-3 py-1 rounded-full hover:bg-[#03C988] dark:hover:bg-[#03C988]"><i className="fa-solid fa-plus"></i></div>
                <div title="Add Row" className="text-xl bg-slate-300 dark:bg-slate-700 cursor-pointer px-3 py-1 rounded-full hover:bg-[#03C988] dark:hover:bg-[#03C988]"><i className="fa-regular fa-square-plus"></i></div>
                <div title="Configure board" className="text-xl bg-slate-300 dark:bg-slate-700 cursor-pointer px-3 py-1 rounded-full hover:bg-[#03C988] dark:hover:bg-[#03C988]"><i className="fa-solid fa-gears"></i></div>
            </div>
        </div>

        <div className="overflow-scroll whitespace-nowrap">

            <div className="my-4 p-4 mr-5 w-80  inline-block align-top">
                <div className="flex items-center gap-3 mb-7">
                    <span className="bg-blue-400 inline-block w-5 h-5 rounded-full"></span>
                    Todo (10)
                </div>

                <div className="">
                    <div className="bg-white p-5 mb-9 rounded-xl shadow-lg dark:bg-[#2b2c37] hover:text-[#03C988]">
                        <div className="font-bold">Build UI for onboarding flow</div>
                        <div className="text-gray-500 dark:text-gray-400">1 of 3 completed task</div>
                    </div>

                    <div className="bg-white p-5 mb-9 rounded-xl shadow-lg dark:bg-[#2b2c37] hover:text-[#03C988]">
                        <div className="font-bold">Build UI for onboarding flow</div>
                        <div className="text-gray-500 dark:text-gray-400">1 of 3 completed task</div>
                    </div>

                    <div className="bg-white p-5 mb-9 rounded-xl shadow-lg dark:bg-[#2b2c37] hover:text-[#03C988]">
                        <div className="font-bold">Build UI for onboarding flow</div>
                        <div className="text-gray-500 dark:text-gray-400">1 of 3 completed task</div>
                    </div>

                    <div className="bg-white p-5 mb-9 rounded-xl shadow-lg dark:bg-[#2b2c37] hover:text-[#03C988]">
                        <div className="font-bold">Build UI for onboarding flow</div>
                        <div className="text-gray-500 dark:text-gray-400">1 of 3 completed task</div>
                    </div>

                    <div className="bg-white p-5 mb-9 rounded-xl shadow-lg dark:bg-[#2b2c37] hover:text-[#03C988]">
                        <div className="font-bold">Build UI for onboarding flow</div>
                        <div className="text-gray-500 dark:text-gray-400">1 of 3 completed task</div>
                    </div>

                    <div className="bg-white p-5 mb-9 rounded-xl shadow-lg dark:bg-[#2b2c37] hover:text-[#03C988]">
                        <div className="font-bold">Build UI for onboarding flow</div>
                        <div className="text-gray-500 dark:text-gray-400">1 of 3 completed task</div>
                    </div>

                    <div className="bg-white p-5 mb-9 rounded-xl shadow-lg dark:bg-[#2b2c37] hover:text-[#03C988]">
                        <div className="font-bold">Build UI for onboarding flow</div>
                        <div className="text-gray-500 dark:text-gray-400">1 of 3 completed task</div>
                    </div>

                    <div className="bg-white p-5 mb-9 rounded-xl shadow-lg dark:bg-[#2b2c37] hover:text-[#03C988]">
                        <div className="font-bold">Build UI for onboarding flow</div>
                        <div className="text-gray-500 dark:text-gray-400">1 of 3 completed task</div>
                    </div>

                    <div className="bg-white p-5 mb-9 rounded-xl shadow-lg dark:bg-[#2b2c37] hover:text-[#03C988]">
                        <div className="font-bold">Build UI for onboarding flow</div>
                        <div className="text-gray-500 dark:text-gray-400">1 of 3 completed task</div>
                    </div>
                </div>
            </div>

            <div className="my-4 p-4 mr-5 w-80  inline-block align-top">
                <div className="flex items-center gap-3 mb-7">
                    <span className="bg-blue-400 inline-block w-5 h-5 rounded-full"></span>
                    Todo (10)
                </div>

                <div className="">
                    <div className="bg-white p-5 mb-9 rounded-xl shadow-lg dark:bg-[#2b2c37] hover:text-[#03C988]">
                        <div className="font-bold">Build UI for onboarding flow</div>
                        <div className="text-gray-500 dark:text-gray-400">1 of 3 completed task</div>
                    </div>

                    <div className="bg-white p-5 mb-9 rounded-xl shadow-lg dark:bg-[#2b2c37] hover:text-[#03C988]">
                        <div className="font-bold">Build UI for onboarding flow</div>
                        <div className="text-gray-500 dark:text-gray-400">1 of 3 completed task</div>
                    </div>

                    <div className="bg-white p-5 mb-9 rounded-xl shadow-lg dark:bg-[#2b2c37] hover:text-[#03C988]">
                        <div className="font-bold">Build UI for onboarding flow</div>
                        <div className="text-gray-500 dark:text-gray-400">1 of 3 completed task</div>
                    </div>
                </div>
            </div>

            <div className="my-4 p-4 mr-5 w-80  inline-block align-top">
                <div className="flex items-center gap-3 mb-7">
                    <span className="bg-blue-400 inline-block w-5 h-5 rounded-full"></span>
                    Todo (10)
                </div>

                <div className="">
                    <div className="bg-white p-5 mb-9 rounded-xl shadow-lg dark:bg-[#2b2c37] hover:text-[#03C988]">
                        <div className="font-bold">Build UI for onboarding flow</div>
                        <div className="text-gray-500 dark:text-gray-400">1 of 3 completed task</div>
                    </div>

                    <div className="bg-white p-5 mb-9 rounded-xl shadow-lg dark:bg-[#2b2c37] hover:text-[#03C988]">
                        <div className="font-bold">Build UI for onboarding flow</div>
                        <div className="text-gray-500 dark:text-gray-400">1 of 3 completed task</div>
                    </div>

                    <div className="bg-white p-5 mb-9 rounded-xl shadow-lg dark:bg-[#2b2c37] hover:text-[#03C988]">
                        <div className="font-bold">Build UI for onboarding flow</div>
                        <div className="text-gray-500 dark:text-gray-400">1 of 3 completed task</div>
                    </div>
                </div>
            </div>

            <div className="my-4 p-4 mr-5 w-80  inline-block align-top">
                <div className="flex items-center gap-3 mb-7">
                    <span className="bg-blue-400 inline-block w-5 h-5 rounded-full"></span>
                    Todo (10)
                </div>

                <div className="">
                    <div className="bg-white p-5 mb-9 rounded-xl shadow-lg dark:bg-[#2b2c37] hover:text-[#03C988]">
                        <div className="font-bold">Build UI for onboarding flow</div>
                        <div className="text-gray-500 dark:text-gray-400">1 of 3 completed task</div>
                    </div>

                    <div className="bg-white p-5 mb-9 rounded-xl shadow-lg dark:bg-[#2b2c37] hover:text-[#03C988]">
                        <div className="font-bold">Build UI for onboarding flow</div>
                        <div className="text-gray-500 dark:text-gray-400">1 of 3 completed task</div>
                    </div>

                    <div className="bg-white p-5 mb-9 rounded-xl shadow-lg dark:bg-[#2b2c37] hover:text-[#03C988]">
                        <div className="font-bold">Build UI for onboarding flow</div>
                        <div className="text-gray-500 dark:text-gray-400">1 of 3 completed task</div>
                    </div>
                </div>
            </div>

        </div>

    </div>
}

export default TodoBoard;