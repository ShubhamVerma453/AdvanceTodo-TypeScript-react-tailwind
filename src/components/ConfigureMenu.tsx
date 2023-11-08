import React, { useState } from "react";
import DeleteModal from "../modals/DeleteModel";

const ConfigureMenu: React.FC<{ type: string }> = ({ type }) => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    function handelDelete(event: { stopPropagation: () => void; }) {
        event.stopPropagation(); 
        setIsDeleteModalOpen(true);
    }

    return (<>
        <div className="bg-white dark:bg-[#2b2c37] shadow-sm w-32 p-2 rounded-lg text-sm absolute top-10 left-0 z-10">
            <div className="hover:bg-[#03C988] px-2 py-1 rounded-lg">edit {type}</div>
            <div onClick={handelDelete} className="text-red-600 hover:bg-red-300 px-2 py-1 rounded-lg">delete {type}</div>
        </div>
        {isDeleteModalOpen &&
            <DeleteModal type="Board" title="SomeTitle" setIsDeleteModalOpen={setIsDeleteModalOpen} />
        }
    </>
    )
}

export default ConfigureMenu;