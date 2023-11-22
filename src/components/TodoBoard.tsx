import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteBoard, selectData, selectIndex } from "../store/dataSlice";
import ConfigureMenu from "./ConfigureMenu";
import DeleteModal from "../modals/DeleteModel";
import AddEditBoardModel from "../modals/AddEditBoardModel";
import AddEditTaskModel from "../modals/AddEditTaskModel";
import Column from "./Column";

interface SideBarProps {
    isOpen: boolean;
}

const TodoBoard: React.FC<SideBarProps> = ({ isOpen }) => {

    const activeIndex = useSelector(selectIndex);
    let data = useSelector(selectData)[activeIndex];
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isCongigureOpen, setIsCongigureOpen] = useState(false);
    const [isAddEditTaskModelOpen, setIsAddEditTaskModelOpen] = useState(false);
    const [isAddEditBoardModel, setIsAddEditBoardModel] = useState(false);
    const dispatch = useDispatch();

    function toggleIsCongigureOpen() {
        setIsCongigureOpen(preState => !preState);
    }

    function onDeleteBoard() {
        dispatch(deleteBoard(activeIndex));
    }

    return <>
        <div className={`bg-[#f4f7fd] dark:bg-black rounded-tl-2xl p-6 mt-[84px] smooth ${isOpen && "ml-[90px]"} min-h-[90vh]`}>

            {data ? <>
                <div className="flex gap-3 items-center flex-wrap ml-4">
                    <h1 className="text-3xl font-bold mr-4">{data.name}</h1>
                    <div className="flex gap-5 items-center">
                        <div title="Add task" onClick={() => { setIsAddEditTaskModelOpen(true) }} className="text-xl bg-slate-300 dark:bg-slate-700 cursor-pointer px-3 py-1 rounded-full hover:bg-[#03C988] dark:hover:bg-[#03C988]"><i className="fa-solid fa-plus"></i></div>
                        <div title="Configure board" onClick={toggleIsCongigureOpen} className="text-xl relative bg-slate-300 dark:bg-slate-700 cursor-pointer px-3 py-1 rounded-full hover:bg-[#03C988] dark:hover:bg-[#03C988]">
                            <i className="fa-solid fa-gears"></i>
                            {isCongigureOpen && <ConfigureMenu type="Board" setIsDeleteModalOpen={setIsDeleteModalOpen} setEditModelOpen={setIsAddEditBoardModel} />}
                        </div>
                    </div>
                </div>

                <div className="overflow-scroll whitespace-nowrap">

                    {data.columns && data.columns.map((column, colIndex) => {
                        return (
                            <Column key={colIndex} colIndex={colIndex} />
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

        {isDeleteModalOpen &&
            <DeleteModal type="Board" title={data.name} onDeleteBtnClick={onDeleteBoard} setIsDeleteModalOpen={setIsDeleteModalOpen} />
        }

        {isAddEditTaskModelOpen &&
            <AddEditTaskModel setIsAddEditTaskModelOpen={setIsAddEditTaskModelOpen} type="Add" />
        }

        {isAddEditBoardModel &&
            <AddEditBoardModel setIsAddEditBoardModelOpen={setIsAddEditBoardModel} type="Edit" />
        }
    </>
}

export default TodoBoard;