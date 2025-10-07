import React from 'react';
import type { IButtonProps } from "../../types/types";

const Button: React.FC<IButtonProps> = ({
                                            children,
                                            onClick,
                                            disabled = false,
                                            variant = 'blue',
                                            type = 'button',
                                            className = '',
                                        }) => {
    const colorClasses = {
        blue: 'bg-blueDefault hover:bg-blueHover active:bg-bluePressed text-white',
        gray: 'bg-grayDefault hover:bg-grayHover active:bg-grayPressed text-black'
    };

    return (
        <button
            type={type}
            className={`flex items-center justify-center w-[320px] xs361:w-[400px] h-[60px] px-9 py-4 gap-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed ${colorClasses[variant]} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
