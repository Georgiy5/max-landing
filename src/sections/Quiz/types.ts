import type { UseFormReturnType } from '@mantine/form';

export interface QuizValues {
    type: string;
    workers: string;
    clients: string;
    phone: string;
    comment: string;
}

export type QuizForm = UseFormReturnType<QuizValues>;
