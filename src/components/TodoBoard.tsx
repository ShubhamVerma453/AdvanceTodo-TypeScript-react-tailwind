import React from "react";

interface SideBarProps {
    isOpen: boolean;
}

const TodoBoard: React.FC<SideBarProps> = ({ isOpen }) => {
    return <div className={`bg-slate-200 dark:bg-black overflow-x-scroll whitespace-nowrap smooth ${isOpen && "side-bar-open"}`}>
        <div className="w-96 m-4 bg-green-400 inline-block whitespace-break-spaces">
            hello Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad voluptatum illum, minus nesciunt quod nostrum dolorem libero quo molestiae! Quas doloribus vero laborum? Porro nulla officia eligendi, ducimus quod voluptas, deserunt voluptate reprehenderit blanditiis quae quasi et ex tempora amet? Cupiditate facere sequi nobis ratione doloremque beatae omnis cumque modi?
        </div>

        <div className="w-96 m-4 bg-green-400 inline-block whitespace-break-spaces">
            hello Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad voluptatum illum, minus nesciunt quod nostrum dolorem libero quo molestiae! Quas doloribus vero laborum? Porro nulla officia eligendi, ducimus quod voluptas, deserunt voluptate reprehenderit blanditiis quae quasi et ex tempora amet? Cupiditate facere sequi nobis ratione doloremque beatae omnis cumque modi?
        </div>

        <div className="w-96 m-4 bg-green-400 inline-block whitespace-break-spaces">
            hello Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad voluptatum illum, minus nesciunt quod nostrum dolorem libero quo molestiae! Quas doloribus vero laborum? Porro nulla officia eligendi, ducimus quod voluptas, deserunt voluptate reprehenderit blanditiis quae quasi et ex tempora amet? Cupiditate facere sequi nobis ratione doloremque beatae omnis cumque modi?
        </div>

        <div className="w-96 m-4 bg-green-400 inline-block whitespace-break-spaces">
            hello Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad voluptatum illum, minus nesciunt quod nostrum dolorem libero quo molestiae! Quas doloribus vero laborum? Porro nulla officia eligendi, ducimus quod voluptas, deserunt voluptate reprehenderit blanditiis quae quasi et ex tempora amet? Cupiditate facere sequi nobis ratione doloremque beatae omnis cumque modi?
        </div>

        <div className="w-96 m-4 bg-green-400 inline-block whitespace-break-spaces">
            hello Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad voluptatum illum, minus nesciunt quod nostrum dolorem libero quo molestiae! Quas doloribus vero laborum? Porro nulla officia eligendi, ducimus quod voluptas, deserunt voluptate reprehenderit blanditiis quae quasi et ex tempora amet? Cupiditate facere sequi nobis ratione doloremque beatae omnis cumque modi?
        </div>

    </div>
}

export default TodoBoard;