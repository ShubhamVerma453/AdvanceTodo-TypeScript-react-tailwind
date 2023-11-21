import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';
import { useDispatch } from 'react-redux';
import { populateDemoData } from '../store/dataSlice';
import PopulateModel from '../modals/PopulateModel';

interface HeaderProps {
    toggleMenu: () => void;
    isOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleMenu, isOpen }) => {
    const [theme, toggleTheme] = useDarkMode();
    const [isPopulateModelOpen, setPopulateModelOpen] = useState(false);
    const dispatch = useDispatch();

    function populateData() {
        dispatch(populateDemoData());
    }

    return (
        <div className="header bg-white dark:bg-[#2b2c37]">
            <header className="py-6 pl-5 pr-10 flex justify-between">
                <div className="flex items-center text-3xl cursor-pointer" onClick={toggleMenu}>
                    <i className={`fas fa-pencil-alt text-[#03C988] smooth origin-center ${isOpen && "-rotate-90"}`}></i>
                    <span className="font-bold ml-3">To-Do Pro</span>
                </div>
                <div className='flex text-center gap-5'>
                    <div className="cursor-pointer  text-3xl" onClick={toggleTheme}>
                        {
                            theme === "light" ?
                                <i className="fa-regular fa-sun"></i> :
                                <i className="fas fa-moon"></i>
                        }
                    </div>
                    <button onClick={() => { setPopulateModelOpen(true) }} title='Populate demo data for testing' className='text-xs bg-slate-300 dark:bg-slate-700 px-3 rounded-xl hover:bg-[#03C988] dark:hover:bg-[#03C988]'>Populate data</button>
                </div>
            </header>

            {isPopulateModelOpen && <PopulateModel onPopulateBtnClick={populateData} setPopulateModelOpen={setPopulateModelOpen} />}

        </div>
    );
}

export default Header;