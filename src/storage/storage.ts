import type { TUser } from '../types/types';

const KEY = 'users';

function read(): TUser[] {
    try {
        const raw = localStorage.getItem(KEY);
        return raw ? JSON.parse(raw) as TUser[] : [];
    } catch {
        return [];
    }
}

function write(users: TUser[]) {
    localStorage.setItem(KEY, JSON.stringify(users));
}

export function getUsers(): TUser[] {
    return read();
}

export function addUser(u: TUser) {
    const users = read();
    users.push(u);
    write(users);
}

export function deleteUser(id: string) {
    const next = read().filter(u => u.id !== id);
    write(next);
}
