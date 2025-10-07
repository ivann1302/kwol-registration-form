import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from "../../components/UI/card.tsx";
import Button from '../../components/button/button';
import { getUsers, deleteUser } from '../../storage/storage';
import type { TUser } from '../../types/types';

export default function UsersPage() {
    const [users, setUsers] = useState<TUser[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        setUsers(getUsers());
    }, []);

    const onDelete = (id: string) => {
        const user = users.find(u => u.id === id);
        const nameOrEmail = user ? (user.name || user.email) : 'пользователь';
        if (!confirm(`Удалить ${nameOrEmail}?`)) return;

        deleteUser(id);
        setUsers(getUsers());
    };

    return (
        <section className="min-h-[calc(100dvh-56px)] xs361:min-h-[calc(100dvh-72px)] bg-bgColor flex flex-col">
            <div className="flex-1 flex items-center justify-center px-4 py-0 xs361:py-0">
                <Card>
                    <h1 className="font-mont text-[32px] leading-[32px] xs361:text-[44px] xs361:leading-[44px] font-semibold text-black text-center mb-8">
                        Пользователи
                    </h1>

                    {users.length === 0 ? (
                        <div className="w-[320px] xs361:w-[400px] mx-auto text-center space-y-4">
                            <p className="text-slate-600">Пока нет зарегистрированных пользователей.</p>
                            <Button type="button" onClick={() => navigate('/register')}>
                                Зарегистрироваться
                            </Button>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <ul className="w-[320px] xs361:w-[400px] mx-auto space-y-3">
                                {users.map((u) => (
                                    <li
                                        key={u.id}
                                        className="flex items-center justify-between bg-grayHover rounded-lg px-4 py-3 w-[280px] xs361:w-[400px]"
                                    >
                                        <div className="min-w-0">
                                            <div className="truncate font-mont text-[16px] leading-[24px] font-medium text-black">
                                                {u.name}
                                            </div>
                                            <div className="truncate text-sm text-slate-600">
                                                {u.email}
                                            </div>
                                        </div>

                                        <button
                                            type="button"
                                            className="text-sm text-red-600 hover:underline shrink-0"
                                            onClick={() => onDelete(u.id)}
                                            aria-label={`Удалить пользователя ${u.email}`}
                                        >
                                            Удалить
                                        </button>
                                    </li>
                                ))}
                            </ul>

                            <div className="w-[320px] xs361:w-[400px] mx-auto">
                                <Button variant="gray" type="button" onClick={() => navigate('/register')}>
                                    Добавить ещё
                                </Button>
                            </div>
                        </div>
                    )}
                </Card>
            </div>
        </section>
    );
}
