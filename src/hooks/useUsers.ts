import { useCallback, useMemo, useSyncExternalStore } from 'react';
import { getUsers, addUser as add, deleteUser as del } from '../storage/storage';
import type {TUser} from "../types/types.ts";

const subscribe = (cb: () => void) => {
    window.addEventListener('storage', cb);
    return () => window.removeEventListener('storage', cb);
};

export function useUsers() {
    const snapshot = useSyncExternalStore(subscribe, () => JSON.stringify(getUsers()));
    const users = useMemo<TUser[]>(() => JSON.parse(snapshot), [snapshot]);

    const addUser = useCallback((u: TUser) => { add(u); window.dispatchEvent(new Event('storage')); }, []);
    const deleteUser = useCallback((id: string) => { del(id); window.dispatchEvent(new Event('storage')); }, []);

    return { users, addUser, deleteUser };
}
