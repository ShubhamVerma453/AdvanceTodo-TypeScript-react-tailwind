import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { selectData, selectIndex, setActiveIndex } from "../store/dataSlice";

interface SideBarProps {
    isOpen: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ isOpen }) => {

    const data = useSelector(selectData);
    const activeIndex = useSelector(selectIndex);
    const dispatch = useDispatch();

    function handelBoardChange(index:number) {
        dispatch( setActiveIndex(index) ); 
    }

    return <>
        <div className={`text-center px-3 pt-4 side-bar bg-white dark:bg-[#2b2c37] smooth ${isOpen && "open"}`}>
            <div className="text-sm">BOARDS ({data.length})</div>
            <ul>
                {data && data.map((item, index) => {
                    return (
                        <li onClick={()=>handelBoardChange(index)} className={`${activeIndex === index && "text-[#03C988]"} hover:text-[#03C988]`} key={index}>
                            <div className="flex flex-col mt-4">
                                <i className="fa-regular fa-rectangle-list text-lg"></i>
                                <div className="text-xs">{item.name}</div>
                            </div>
                        </li>
                    )
                })
                }

                <li className="hover:text-[#03C988]">
                    <div className="flex flex-col mt-4">
                        <i className="fa-regular fa-square-plus text-lg"></i>
                        <div className="text-xs">Add Board</div>
                    </div>
                </li>
            </ul>
        </div>
    </>
}

export default SideBar;