import { TextInput, Textarea, Text } from "@mantine/core";
import type { QuizForm } from "../../../sections/Quiz/types";


export default function ThirdStepQuiz({ form }: { form: QuizForm }) {
    return (
        <>
            <Text size="xl" fw={700} mb="lg">Ваши контакты</Text>
            <TextInput
                label="Телефон"
                placeholder="+7 (999) 000-00-00"
                {...form.getInputProps('phone')} // Магия Mantine Form
                error={form.errors.phone}
                mb="md"
            />
            <Textarea
                label="Комментарий"
                placeholder="Опишите задачу..."
                {...form.getInputProps('comment')}
            />
        </>
    )
}