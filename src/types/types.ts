import React from "react";

export type TUser = {
    id: string;
    email: string;
    name: string;
    password: string;
};

export interface IButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    variant?: 'blue' | 'gray';
}