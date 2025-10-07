import type { User } from '../types/types.ts';

const KEY = 'users';

export function getUsers(): User[] {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    try {
        return JSON.parse(raw) as User[];
    } catch {
        return [];
    }
}

export function saveUsers(users: User[]) {
    localStorage.setItem(KEY, JSON.stringify(users));
}

export function addUser(user: User) {
    const list = getUsers();
    list.push(user);
    saveUsers(list);
}

export function deleteUser(id: string) {
    const list = getUsers().filter(u => u.id !== id);
    saveUsers(list);
}