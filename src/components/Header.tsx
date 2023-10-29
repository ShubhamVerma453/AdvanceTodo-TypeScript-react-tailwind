import React from 'react';

interface HeaderProps {
    toggleMenu: () => void;
    isOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleMenu, isOpen }) => {
    return (
        <div className="header">
            <header className="py-6 pl-5 pr-10 text-3xl flex justify-between">
                <div className="flex items-center cursor-pointer" onClick={toggleMenu}>
                    <i className={`fas fa-pencil-alt colored transition duration-250 origin-center ${isOpen && "-rotate-90"}`}></i>
                    <span className="font-bold ml-3">To-Do Pro</span>
                </div>
                <div className="cursor-pointer">
                    <i className="fa-regular fa-sun"></i>
                    {/* <i className="fas fa-moon"></i> */}
                </div>
            </header>
        </div>
    );
}

export default Header;