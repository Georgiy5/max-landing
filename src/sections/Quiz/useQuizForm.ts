import { useForm } from '@mantine/form';
import type { QuizValues } from './types';

const ORGANIZATION_TYPES = ['bis', 'NKO', 'Goverment'] as const;

export const QUIZ_STEPS_COUNT = 3;

const QUIZ_STEP_FIELDS: Record<number, (keyof QuizValues)[]> = {
    1: ['type'],
    2: ['workers', 'clients'],
    3: ['phone', 'comment'],
};

export function useQuizForm() {
    const form = useForm<QuizValues>({
        mode: 'controlled',
        initialValues: {
            type: '',
            workers: '',
            clients: '',
            phone: '',
            comment: '',
        },
        validate: {
            type: (value) => {
                if (!value.trim()) {
                    return 'Выберите тип организации';
                }

                return ORGANIZATION_TYPES.includes(value as (typeof ORGANIZATION_TYPES)[number])
                    ? null
                    : 'Некорректный тип организации';
            },
            workers: (value) => {
                if (!value.trim()) {
                    return 'Укажите количество сотрудников';
                }

                return /^[1-9]\d*$/.test(value.trim())
                    ? null
                    : 'Введите целое число больше 0';
            },
            clients: (value) => {
                if (!value.trim()) {
                    return 'Укажите количество клиентов';
                }

                return /^[1-9]\d*$/.test(value.trim())
                    ? null
                    : 'Введите целое число больше 0';
            },
            phone: (value) => {
                if (!value.trim()) {
                    return 'Введите номер телефона';
                }

                return /^\+?[0-9\s\-()]{7,18}$/.test(value.trim()) ? null : 'Некорректный номер';
            },
        },
    });

    const validateStep = (step: number) => {
        const fields = QUIZ_STEP_FIELDS[step] ?? [];
        const results = fields.map((field) => form.validateField(field));

        return results.every((result) => !result.hasError);
    };

    return {
        form,
        validateStep,
    };
}
