import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBoard, selectData, selectIndex } from "../store/dataSlice";

interface AddEditBoardModelProps {
    type: "Add" | "Edit",
    setIsAddEditBoardModelOpen: (arg0: boolean) => void,
}

const AddEditBoardModel: React.FC<AddEditBoardModelProps> = ({ setIsAddEditBoardModelOpen, type }) => {
    const activeIndex = useSelector(selectIndex);
    const data = useSelector(selectData)[activeIndex];
    const [boardName, setBoardName] = useState(getBoardName());
    const [newColumns, setNewColumns] = useState(getColumns());
    const [showError, setShowError] = useState(false);
    const dispatch = useDispatch();

    function getColumns() {
        if (type === "Add") return [{ name: "Todo", tasks: [] }, { name: "Doing", tasks: [] }];
        return data.columns;
    }
    
    function getBoardName() {
        if (type === "Add") return "";
        return data.name;
    }

    function onDeleteColumn(name: string) {
        setNewColumns(pre => pre.filter((curr) => curr.name !== name));
    }

    function onChangeColumn(index: number, newName: string) {
        setNewColumns((prevColumns) => {
            return prevColumns.map((column, i) =>
                i === index ? { ...column, name: newName } : column
            );
        });
    }

    function validate() {
        if (boardName === "") return false;
        const columnNames = newColumns.map((column) => column.name);
        const hasDuplicates = new Set(columnNames).size !== columnNames.length;
        const hasMissingNames = columnNames.includes('');

        return !(hasDuplicates || hasMissingNames);
    }

    function onSubmit(type: string) {
        if (type === "Add") {
            dispatch(addBoard({boardName, newColumns}))
        } else{
            console.log("Edit");
        }
    }

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (showError) {
            timer = setTimeout(() => {
                setShowError(false);
            }, 2000);
        }
        return () => clearTimeout(timer);
    }, [showError]);

    return (
        <div onClick={(e) => {
            if (e.target !== e.currentTarget) return;
            setIsAddEditBoardModelOpen(false);
        }} className="fixed right-0 top-0 left-0 bottom-0 px-2 py-4 overflow-scroll z-50 justify-center items-center flex bg-[#00000050] dark:bg-[#000000b3]">
            <div className=" scrollbar-hide overflow-y-scroll whitespace-normal max-h-[95vh]  my-auto  bg-white dark:bg-[#2b2c37] text-black dark:text-white font-bold max-w-md mx-auto w-full px-8 py-8 rounded-xl ">

                <h3 className=" text-lg ">{type === "Edit" ? "Edit" : "Add New"} Board </h3>

                <div className="mt-8 flex flex-col space-y-1">
                    <label className="  text-sm dark:text-white text-gray-500"> Board Name </label>
                    <input className="bg-transparent px-4 py-2 rounded-md text-sm border-[0.5px] border-gray-600 focus:border-[#03C988] outline-none"
                        placeholder=" e.g Web Design"
                        value={boardName}
                        onChange={(e) => setBoardName(e.target.value)}
                        id="board-name-input"
                        autoComplete="off"
                    />
                </div>

                <div className="mt-8 flex flex-col space-y-3">
                    <label className=" text-sm dark:text-white text-gray-500"> Board Columns </label>

                    {newColumns.map((column, index) => (
                        <div key={index} className=" flex items-center w-full ">
                            <input
                                className=" bg-transparent flex-grow px-4 py-2 rounded-md text-sm  border-[0.5px] border-gray-600 focus:border-[#03C988] outline-none  "
                                onChange={(e) => {
                                    onChangeColumn(index, e.target.value);
                                }}
                                type="text"
                                value={column.name}
                            />
                            <i className="fa-solid fa-xmark fa-lg m-4 cursor-pointer"
                                onClick={() => {
                                    onDeleteColumn(column.name);
                                }}
                            ></i>

                        </div>
                    ))}

                    <div>
                        <button className=" w-full items-center hover:opacity-70 dark:text-[#03C988] dark:bg-white  text-white bg-[#03C988] py-2 rounded-full "
                            onClick={() => {
                                setNewColumns((state) => [
                                    ...state,
                                    { name: "", tasks: [] },
                                ]);
                            }}
                        > + Add New Column </button>
                        <button className=" w-full items-center hover:opacity-70 dark:text-white dark:bg-[#03C988] mt-8 relative  text-white bg-[#03C988] py-2 rounded-full"
                            onClick={() => {
                                const isValid = validate();
                                if (isValid) {
                                    onSubmit(type);
                                    setIsAddEditBoardModelOpen(false);
                                }
                                else setShowError(true);
                            }}
                        > Create New Board </button>
                    </div>
                </div>
                <p className={`text-center text-xs pt-2 text-red-500 ${!showError && "opacity-0"}`}>Empty or Duplicate fields</p>
            </div>
        </div>
    )
}

export default AddEditBoardModel;