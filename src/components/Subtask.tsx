import React from "react";

interface SubtaskProps {
    title: string;
    isCompleted: boolean;
}

const Subtask: React.FC<SubtaskProps> = ({ title, isCompleted }) => {
    function onChange() { }

    return (
        <div className=" w-full flex hover:bg-[#635fc740] dark:hover:bg-[#635fc740] rounded-md relative items-center justify-start dark:bg-[#20212c]  p-3 gap-4  bg-[#f4f7fd]">
            <input
                className=" w-4 h-4  accent-[#03C988] cursor-pointer "
                type="checkbox"
                checked={isCompleted}
                onChange={onChange}
            />
            <p className={`${isCompleted && "line-through opacity-30"}`}> {title} </p>
        </div>
    );
}

export default Subtask;