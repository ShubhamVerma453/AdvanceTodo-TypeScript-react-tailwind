import React from "react";

interface SideBarProps {
    isOpen: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ isOpen }) => {
    return <>
        <div className={`text-center px-3 side-bar smooth ${isOpen && "open"}`}>
            <div className="text-sm">BOARDS (3)</div>
            <ul>
                <li className="colored">
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