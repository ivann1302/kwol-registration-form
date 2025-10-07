import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { emailStepSchema } from './validations';
import type { EmailStepValues } from './validations';
import TextField from '../../components/formField/textField';
import Checkbox from '../../components/formField/checkbox';
import Button from '../../components/button/button';

export default function StepEmail() {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors, isValid } } =
        useForm<EmailStepValues>({
            resolver: zodResolver(emailStepSchema),
            mode: 'onChange',
            defaultValues: { email: '', policy: false },
        });

    const onSubmit = (data: EmailStepValues) => {
        navigate('/register/details', { state: { email: data.email } });
    };

    return (
        <form className="flex flex-col items-center justify-center space-y-8 pb-5" onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextField
                label="Корпоративный e-mail"
                placeholder="Введи почту"
                type="email"
                {...register('email')}
                error={errors.email?.message}
            />

            <div className="w-[320px] xs361:w-[400px]">
                <Checkbox
                    {...register('policy')}
                    label={
                        <>
                            Я&nbsp;подтверждаю согласие с&nbsp;
                            <a className="text-blueDefault hover:underline" href="#" target="_blank" rel="noreferrer">
                                политикой конфиденциальности
                            </a>
                        </>
                    }
                    error={errors.policy?.message}
                />
            </div>

            <div className="w-[280px] xs361:w-[400px]">
                <Button type="submit" disabled={!isValid}>
                    Продолжить
                </Button>

                <Button
                    type="button"
                    variant="gray"
                    className="mt-3"
                    disabled
                >
                    Войти
                </Button>
            </div>

            <div className="w-[320px] xs361:w-[400px] text-center">
                <p className="font-mont text-[12px] leading-[16px] text-[#626C77]">
                    Возник вопрос или что-то сломалось?
                    <br/>
                    <a href="#" className="text-blueDefault select-none hover:underline">
                        Вступай в чат и задавай вопрос
                    </a>
                </p>
            </div>
        </form>
    );
}
