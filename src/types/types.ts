import React from "react";

export type TUser = {
    id: string;
    email: string;
    name: string;
    password: string;
    createdAt: string;
};

export interface IButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    variant?: 'blue' | 'gray';
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

export const ROUTES = {
    REGISTER: '/register',
    REGISTER_EMAIL: '/register/email',
    REGISTER_DETAILS: '/register/details',
    USERS: '/users',
} as const;
