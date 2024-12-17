import React from 'react';

function Test() {
    const [isOpen, setIsOpen] = React.useState(false);
    let [screen, setScreen] = React.useState(window)

    const toggleOptions = () => {
        setIsOpen(!isOpen);

        document.body.style.overflow = !isOpen ? "auto" : "hidden"
    };

    return (
        <div>
            <div className="relative pb-12">
                {/* Main Header */}
                <div className={`bg-gray-700 p-2 fixed flex items-center justify-between top-0 left-0 right-0 z-20 opacity-80`}>
                    <h1 className="text-white">Header</h1>
                    <button
                        className=" bg-blue-500 text-white py-1 px-3 rounded"
                        onClick={toggleOptions}>
                        Toggle Options
                    </button>
                </div>

                {/* Options Container */}
                <div
                    className={`bg-red-500 text-white fixed left-0 right-0 max-h-[80%] overflow-y-auto transform z-10 transition-transform ease-in-out duration-300  ${isOpen ? '-translate-y-full' : 'translate-y-12'}`} id="options">
                    <ul>
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                    </ul>
                </div>
            </div>

            <button className="lg:hidden group inline-flex w-2/12 max-w-10 h-2/12 text-slate-800 text-center items-center justify-center rounded,0_1px_2px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)],0_4px_8px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] transition" aria-pressed={isPressed} onClick={menu} >
                <span className="sr-only">Menu</span>
                <svg className="w-full fill-current pointer-events-none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <rect className={`origin-center -translate-y-[5px] translate-x-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] ${isPressed ? "translate-x-0 translate-y-0 rotate-[315deg]" : ""}`} y="7" width="9" height="2" rx="1" ></rect>
                <rect className={`origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] ${isPressed ? "rotate-45" : ""}`} y="7" width="16" height="2" rx="1"></rect>
                <rect className={`origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] ${isPressed ? "translate-y-0 rotate-[135deg]" : "" }`} y="7" width="9" height="2" rx="1"></rect>
                </svg>
            </button>
        </div>
    );
}

export default Test;
