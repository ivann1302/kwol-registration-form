import { z } from 'zod';

export const emailStepSchema = z.object({
    email: z.string().email('Неверный e-mail'),
    policy: z.boolean().refine(v => v, { message: 'Подтвердите согласие' }),
});

export const detailsStepSchema = z.object({
    name: z.string().min(1, 'Укажите имя'),
    password: z.string().min(6, 'Минимум 6 символов'),
});

export type EmailStepValues = z.infer<typeof emailStepSchema>;
export type DetailsStepValues = z.infer<typeof detailsStepSchema>;
