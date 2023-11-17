import React, { useState } from "react";
import TaskModal from "../modals/TaskModal";

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
interface TaskProps {
    task: Task
    colIndex: number
    taskIndex: number
}

const TaskBox: React.FC<TaskProps> = ({ task, colIndex, taskIndex }) => {
    const [isTaskModelOpen, setIsTaskModelOpen] = useState(false);
    return (
        <div >
            <div onClick={() => { setIsTaskModelOpen(true) }} className="bg-white p-5 mb-9 rounded-xl shadow-lg dark:bg-[#2b2c37] hover:text-[#03C988]">
                <div className="font-bold whitespace-break-spaces">{task.title}</div>
                <div className="text-gray-500 dark:text-gray-400">{task.subtasks.reduce((acc, curr) => curr.isCompleted ? acc + 1 : acc, 0)} of {task.subtasks.length} completed task</div>
            </div>
            {isTaskModelOpen && <TaskModal
                task={task}
                setIsTaskModelOpen={setIsTaskModelOpen}
                colIndex={colIndex}
                taskIndex={taskIndex}
            />}
        </div>
    )
}

export default TaskBox;