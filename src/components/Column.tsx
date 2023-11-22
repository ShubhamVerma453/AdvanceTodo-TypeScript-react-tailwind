import React, { useState } from "react";
import TaskBox from "./Task";
import { useSelector } from "react-redux";
import { selectData, selectIndex } from "../store/dataSlice";

interface ColumnProps {
    colIndex: number
}

const Column: React.FC<ColumnProps> = ({ colIndex }) => {
    const activeIndex = useSelector(selectIndex);
    const data = useSelector(selectData)[activeIndex];
    const column = data.columns[colIndex];
    const [isDraggingOver, setIsDraggingOver] = useState(false);
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

    function handelDrop(e: React.DragEvent<HTMLDivElement>) {
        const { prevColIndex, taskIndex } = JSON.parse(
            e.dataTransfer.getData("text")
        );
        console.log(prevColIndex, taskIndex);
        setIsDraggingOver(false);
    }

    const handleDragLeave = () => {
        setIsDraggingOver(false);
    };

    function handelDragOver(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        setIsDraggingOver(true);
    }


    return (
        <div onDrop={handelDrop} onDragLeave={handleDragLeave} onDragOver={handelDragOver} className={`rounded-xl my-4 p-4 mr-5 w-80 inline-block align-top ${isDraggingOver && "bg-[#0000000d] dark:bg-[#ffffff1a]"}`} key={colIndex}>
            <div className="flex items-center gap-3 mb-7">
                <span className={`${colors[colIndex % (colors.length)]} inline-block w-5 h-5 rounded-full`}></span>
                {column.name} ({column.tasks.length})
            </div>

            <div className="">
                {column.tasks.map((task, taskIndex) => {
                    return (
                        <TaskBox key={taskIndex} colIndex={colIndex} taskIndex={taskIndex} />
                    )
                })}
            </div>
        </div>
    )
}

export default Column;