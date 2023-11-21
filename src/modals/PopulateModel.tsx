import React from "react";

interface PopulateModelProps {
    onPopulateBtnClick: () => void,
    setPopulateModelOpen: (arg0: boolean) => void
}

const PopulateModal: React.FC<PopulateModelProps> = ({ onPopulateBtnClick, setPopulateModelOpen }) => {
    return (
        <div onClick={(e) => {
            if (e.target !== e.currentTarget) return;
            setPopulateModelOpen(false);
        }} className="fixed right-0 top-0 left-0 bottom-0 px-2 py-4 overflow-scroll z-50 justify-center items-center flex bg-[#00000050] dark:bg-[#000000b3]">

            <div className=" scrollbar-hide overflow-y-scroll whitespace-normal max-h-[95vh]  my-auto  bg-white dark:bg-[#2b2c37] text-black dark:text-white font-bold shadow-md shadow-[#364e7e1a] max-w-md mx-auto  w-full px-8  py-8 rounded-xl ">
                <h3 className=" font-bold text-[#03C988] text-xl">Confirm demo data population?</h3>
                <p className="text-gray-500 tracking-wide text-xs pt-3"> Are you sure you want to populate demo data. This action replace all of you current Tasks and cannot be reversed.</p>

                <div className=" flex w-full mt-4 items-center justify-center space-x-4 ">
                    <button onClick={() => {
                        setPopulateModelOpen(false);
                        onPopulateBtnClick();
                    }} className="w-full items-center text-white hover:opacity-75 bg-[#03C988] py-2 rounded-full shadow-lg"
                    > Populate </button>

                    <button onClick={() => { setPopulateModelOpen(false) }}
                        className="w-full items-center text-[#03C988] hover:opacity-75 bg-[#635fc71a]  py-2 rounded-full shadow-lg"
                    > Cancel </button>
                </div>
            </div>
        </div>
    );
}

export default PopulateModal;