import React, { forwardRef } from 'react';
import ErrorText from "./errorText.tsx";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    error?: string;
};

const TextField = forwardRef<HTMLInputElement, Props>(({ label, error, className = '', ...rest }, ref) => {
    const errorCls = error ? 'border-red-400' : 'border-[#BCC3D0]/50';
    return (
        <label className="block w-[320px] xs361:w-[400px] mx-auto">      <span className="mb-1 block font-mont text-[14px] leading-[20px] font-medium text-black">
        {label}
      </span>
            <input
                ref={ref}
                className={`
          w-full h-[56px] xs361:h-[60px]
          rounded-[16px] bg-grayHover
          border ${errorCls}
          px-4 outline-none
          font-mont font-medium text-[16px] leading-[24px] text-black
          placeholder:text-[#626C77]
          focus:border-blueDefault
          ${className}
        `}
                {...rest}
            />
            <ErrorText>{error}</ErrorText>
        </label>
    );
});

export default TextField;