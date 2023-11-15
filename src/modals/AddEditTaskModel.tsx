import React from "react";

interface AddEditTaskModelProps {
    setIsAddEditTaskModelOpen: (arg0: boolean) => void,
}

const AddEditTaskModel: React.FC<AddEditTaskModelProps> = ({ setIsAddEditTaskModelOpen }) => {
    return (
        <div onClick={(e) => {
            if (e.target !== e.currentTarget) return;
            setIsAddEditTaskModelOpen(false);
        }} className="fixed right-0 top-0 left-0 bottom-0 px-2 py-4 overflow-scroll z-50 justify-center items-center flex bg-[#00000050] dark:bg-[#000000b3]">
            <div className=" scrollbar-hide overflow-y-scroll whitespace-normal max-h-[95vh]  my-auto  bg-white dark:bg-[#2b2c37] text-black dark:text-white font-bold max-w-md mx-auto w-full px-8 py-8 rounded-xl ">
                <h1>hello world</h1>
            </div>
        </div>
    )
}

export default AddEditTaskModel;