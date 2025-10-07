import React from 'react';
import type {IButtonProps} from "./types/types.ts";

const Button: React.FC<IButtonProps> = ({ children, onClick, disabled = false, variant = 'blue' }) => {
    const colorClasses = {
        blue: 'bg-blueDefault hover:bg-blueHover active:bg-bluePressed text-white',
        gray: 'bg-grayDefault hover:bg-grayHover active:bg-grayPressed text-black'
    };

    return (
        <button
            className={`flex items-center justify-center 
                       w-[400px] xs361:w-[320px] 
                       h-[60px] px-9 py-4 gap-2 rounded-lg 
                       font-mont font-bold text-[12px] leading-[16px] tracking-[0.05em] 
                       uppercase lining-nums tabular-nums align-middle
                       transition-colors duration-200 
                       focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed 
                       ${colorClasses[variant]}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;