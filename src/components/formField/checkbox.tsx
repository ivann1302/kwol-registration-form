import React, { forwardRef } from 'react';
import ErrorText from "./errorText.tsx";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    label: React.ReactNode;
    error?: string;
};

const Checkbox = forwardRef<HTMLInputElement, Props>(({ label, error, className = '', ...rest }, ref) => {
    return (
        <div className="w-[282px] xs361:w-[400px] mx-auto">            <label className="flex items-start">
                <input
                    ref={ref}
                    type="checkbox"
                    className={`mt-[2px] size-[18px] accent-blueDefault mr-[10px] ${className}`}
                    {...rest}
                />
                <span className="font-mont text-[14px] leading-[20px] font-medium text-[#626C77]">
          {label}
        </span>
            </label>
            <ErrorText>{error}</ErrorText>
        </div>
    );
});

export default Checkbox;

