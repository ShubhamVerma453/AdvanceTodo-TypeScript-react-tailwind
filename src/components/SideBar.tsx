import React from "react";

interface SideBarProps {
    isOpen: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ isOpen }) => {
    return <>
        <div className={`text-center px-3 pt-4 side-bar bg-white dark:bg-[#2b2c37] smooth ${isOpen && "open"}`}>
            <div className="text-sm">BOARDS (3)</div>
            <ul>
                <li className="text-[#03C988]">
                    <div className="flex flex-col mt-4">
                        <i className="fa-regular fa-rectangle-list text-lg"></i>
                        <div className="text-xs">Menu Item 1</div>
                    </div>
                </li>
                <li>
                    <div className="flex flex-col mt-4">
                        <i className="fa-regular fa-rectangle-list text-lg"></i>
                        <div className="text-xs">Menu Item 2</div>
                    </div>
                </li>
                <li>
                    <div className="flex flex-col mt-4">
                        <i className="fa-regular fa-rectangle-list text-lg"></i>
                        <div className="text-xs">Menu Item 3</div>
                    </div>
                </li>
            </ul>
        </div>
    </>
}

export default SideBar;