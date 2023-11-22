import React, { useState } from "react";
import TaskModal from "../modals/TaskModal";
import { useSelector } from "react-redux";
import { selectData, selectIndex } from "../store/dataSlice";

interface TaskProps {
    colIndex: number
    taskIndex: number
}

const TaskBox: React.FC<TaskProps> = ({ colIndex, taskIndex }) => {
    const activeIndex = useSelector(selectIndex);
    const data = useSelector(selectData)[activeIndex];
    const task = data.columns[colIndex].tasks[taskIndex];
    const [isTaskModelOpen, setIsTaskModelOpen] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    function handelDragStart(e: React.DragEvent<HTMLDivElement>) {
        e.dataTransfer.setData(
            "text",
            JSON.stringify({ taskIndex, prevColIndex: colIndex })
        );
        setIsDragging(true);
    }

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    return (
        <div draggable onDragStart={handelDragStart} onDragEnd={handleDragEnd}>
            <div onClick={() => { setIsTaskModelOpen(true) }} className={`p-5 mb-9 rounded-xl shadow-lg hover:text-[#03C988] ${isDragging ? "bg-slate-300" : "bg-white dark:bg-[#2b2c37]"}`}>
                <div className="font-bold whitespace-break-spaces">{task.title}</div>
                <div className="text-gray-500 dark:text-gray-400">{task.subtasks.reduce((acc, curr) => curr.isCompleted ? acc + 1 : acc, 0)} of {task.subtasks.length} completed task</div>
            </div>
            {isTaskModelOpen && <TaskModal
                setIsTaskModelOpen={setIsTaskModelOpen}
                colIndex={colIndex}
                taskIndex={taskIndex}
            />}
        </div>
    )
}

export default TaskBox;