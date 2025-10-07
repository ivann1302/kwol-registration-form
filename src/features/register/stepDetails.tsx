import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { detailsStepSchema } from './validations.ts'
import type { DetailsStepValues } from './validations.ts';
import TextField from "../../components/formField/textField.tsx";
import Button from '../../components/button/button';
import { addUser, getUsers } from '../../storage/storage';
import ErrorText from "../../components/formField/errorText.tsx";
import type { TUser } from '../../types/types';


type LocState = { email?: string };

export default function StepDetails() {
    const navigate = useNavigate();
    const location = useLocation();
    const state = (location.state || {}) as LocState;
    const email = state.email;

    useEffect(() => {
        if (!email) navigate('/register/email', { replace: true });
    }, [email, navigate]);

    const { register, handleSubmit, formState: { errors, isValid }, setError } =
        useForm<DetailsStepValues>({
            resolver: zodResolver(detailsStepSchema),
            mode: 'onChange',
            defaultValues: { name: '', password: '' },
        });

    const onSubmit = (data: DetailsStepValues) => {
        if (!email) return;

        const users = getUsers();
        const emailTaken = users.some(u => u.email.trim().toLowerCase() === email.trim().toLowerCase());
        if (emailTaken) {
            setError('root', { type: 'manual', message: 'Этот e-mail уже зарегистрирован. Вернитесь и укажите другой.' });
            return;
        }

        const nameTaken = users.some(u => u.name.trim().toLowerCase() === data.name.trim().toLowerCase());
        if (nameTaken) {
            setError('name', { type: 'manual', message: 'Имя уже занято, укажите другое' });
            return;
        }

        const user: TUser = {
            id: (crypto as any).randomUUID ? crypto.randomUUID() : String(Date.now()),
            email,
            name: data.name,
            password: data.password,
            createdAt: new Date().toISOString(),
        };

        addUser(user);
        navigate('/users', { replace: true });
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
            <p className="text-sm text-slate-600">Почта: <span className="font-medium text-black">{email}</span></p>

            <TextField
                label="Имя"
                placeholder="Введи имя"
                {...register('name')}
                error={errors.name?.message}
            />

            <TextField
                label="Пароль"
                placeholder="Придумай пароль"
                type="password"
                {...register('password')}
                error={errors.password?.message}
            />

            {errors.root?.message && (
                <div className="w-[320px] xs361:w-[400px]">
                    <ErrorText>{errors.root.message}</ErrorText>
                </div>
            )}

            <div className="space-y-3">
                <Button type="submit" disabled={!isValid}>
                    Войти
                </Button>

                <Button type="button" variant="gray" onClick={() => navigate('/register/email')}>
                    Назад
                </Button>
            </div>
        </form>
    );
}
