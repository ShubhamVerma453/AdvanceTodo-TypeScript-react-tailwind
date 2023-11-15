import React from "react";

interface ConfigureMenuProps {
    type: string,
    setIsDeleteModalOpen: (arg0: boolean) => void,
}

const ConfigureMenu: React.FC<ConfigureMenuProps> = ({ type, setIsDeleteModalOpen }) => {

    function handelDelete() {
        setIsDeleteModalOpen(true);
    }

    return (<>
        <div className="bg-white dark:bg-[#2b2c37] shadow-[5px_5px_15px_0px_rgba(0,0,0,0.3)] dark:shadow-[5px_5px_15px_0px_rgba(255,255,255,0.3)] w-32 p-2 rounded-lg text-sm absolute top-10 right-0 z-10">
            <div className="hover:bg-[#03C988] px-2 py-1 rounded-lg">edit {type}</div>
            <div onClick={handelDelete} className="text-red-600 hover:bg-red-300 px-2 py-1 rounded-lg">delete {type}</div>
        </div>
    </>
    )
}

export default ConfigureMenu;