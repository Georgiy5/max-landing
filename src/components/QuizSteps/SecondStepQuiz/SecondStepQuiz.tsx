import { TextInput, Text } from "@mantine/core";
import type { QuizForm } from "../../../sections/Quiz/types";


export default function SecondStepQuiz({ form }: { form: QuizForm }) {
    return (
        <>
            <Text size="xl" fw={700} mb="lg">Количество</Text>
            <TextInput
                label="Сотрудников"
                placeholder="100"
                inputMode="numeric"
                {...form.getInputProps('workers')}
                error={form.errors.workers}
                mb="md"
            />
            <TextInput
                label="Клиентов"
                placeholder="1000"
                inputMode="numeric"
                {...form.getInputProps('clients')}
                error={form.errors.clients}
                mb="md"
            />

        </>
    )
}