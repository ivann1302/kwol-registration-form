import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { detailsStepSchema } from './validations.ts'
import type { DetailsStepValues } from './validations.ts';
import TextField from "../../components/formField/textField.tsx";
import Button from '../../components/button/button';
import { addUser } from '../../storage/storage';
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

    const { register, handleSubmit, formState: { errors, isValid } } =
        useForm<DetailsStepValues>({
            resolver: zodResolver(detailsStepSchema),
            mode: 'onChange',
            defaultValues: { name: '', password: '' },
        });

    const onSubmit = (data: DetailsStepValues) => {
        if (!email) return;

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

            <div className="space-y-3">
                <Button type="submit" disabled={!isValid}>
                    Завершить регистрацию
                </Button>

                <Button type="button" variant="gray" onClick={() => navigate('/register/email')}>
                    Назад
                </Button>
            </div>
        </form>
    );
}
