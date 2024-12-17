import React, { useState } from "react";

const ButtonWithIcon = () => {
  const [pressed1, setPressed1] = useState(false);
  const [pressed2, setPressed2] = useState(false);

  return (
    <div className="flex space-x-4">
      {/* Button 1 */}
      <button
        className="group inline-flex w-12 h-12 text-slate-800 bg-white text-center items-center justify-center rounded shadow-[0_1px_0_theme(colors.slate.950/.04),0_1px_2px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] hover:shadow-[0_1px_0_theme(colors.slate.950/.04),0_4px_8px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] transition"
        aria-pressed={pressed1}
        onClick={() => setPressed1(!pressed1)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current pointer-events-none"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            className={`origin-center -translate-y-[5px] translate-x-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] ${
              pressed1
                ? "translate-x-0 translate-y-0 rotate-[315deg]"
                : ""
            }`}
            y="7"
            width="9"
            height="2"
            rx="1"
          />
          <rect
            className={`origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] ${
              pressed1 ? "rotate-45" : ""
            }`}
            y="7"
            width="16"
            height="2"
            rx="1"
          />
          <rect
            className={`origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] ${
              pressed1 ? "translate-y-0 rotate-[135deg]" : ""
            }`}
            y="7"
            width="9"
            height="2"
            rx="1"
          />
        </svg>
      </button>

      {/* Button 2 */}
      <button
        className="group inline-flex w-12 h-12 text-slate-800 bg-white text-center items-center justify-center rounded shadow-[0_1px_0_theme(colors.slate.950/.04),0_1px_2px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] hover:shadow-[0_1px_0_theme(colors.slate.950/.04),0_4px_8px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] transition"
        aria-pressed={pressed2}
        onClick={() => setPressed2(!pressed2)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current pointer-events-none"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            className={`origin-center -translate-y-[5px] translate-x-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] ${
              pressed2
                ? "translate-x-0 translate-y-0 rotate-[315deg]"
                : ""
            }`}
            y="7"
            width="9"
            height="2"
            rx="1"
          />
          <rect
            className={`origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] ${
              pressed2 ? "rotate-45" : ""
            }`}
            y="7"
            width="16"
            height="2"
            rx="1"
          />
          <rect
            className={`origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] ${
              pressed2 ? "translate-y-0 -rotate-[225deg]" : ""
            }`}
            y="7"
            width="9"
            height="2"
            rx="1"
          />
        </svg>
      </button>
    </div>
  );
};

export default ButtonWithIcon;
