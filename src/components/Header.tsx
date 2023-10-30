import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

interface HeaderProps {
    toggleMenu: () => void;
    isOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleMenu, isOpen }) => {
    const [theme, toggleTheme] = useDarkMode();

    return (
        <div className="header bg-white dark:bg-[#2b2c37]">
            <header className="py-6 pl-5 pr-10 text-3xl flex justify-between">
                <div className="flex items-center cursor-pointer" onClick={toggleMenu}>
                    <i className={`fas fa-pencil-alt text-[#03C988] smooth origin-center ${isOpen && "-rotate-90"}`}></i>
                    <span className="font-bold ml-3">To-Do Pro</span>
                </div>
                <div className="cursor-pointer" onClick={toggleTheme}>
                    {
                        theme === "light" ?
                            <i className="fa-regular fa-sun"></i> :
                            <i className="fas fa-moon"></i>
                    }
                </div>
            </header>
        </div>
    );
}

export default Header;