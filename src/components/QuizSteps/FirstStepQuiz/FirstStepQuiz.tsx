import { SimpleGrid, Card, Group, ThemeIcon, Radio, Text } from "@mantine/core"
import { IconBriefcase2, IconBuildingBank, IconHeartHandshake } from "@tabler/icons-react"
import type { QuizForm } from "../../../sections/Quiz/types"
import { ORDER_ACCENT_GRADIENT } from "../../../helpers/constants"



const firstStepData = [
    { value: 'bis', label: 'Бизнес', icon: IconBriefcase2 },
    { value: 'NKO', label: 'НКО', icon: IconHeartHandshake },
    { value: 'Goverment', label: 'Гос. организация', icon: IconBuildingBank },
]

export default function FirstStepQuiz({ form }: { form: QuizForm }) {
    return (
        <>
            <Text size="xl" fw={700} mb="lg">Для какой организации необходим бот?</Text>
            <SimpleGrid cols={1} spacing="md">
                {firstStepData.map((item) => (
                    <Card
                        key={item.value}
                        withBorder
                        radius="md"
                        p="md"
                        onClick={() => {
                            form.setFieldValue('type', item.value)
                            form.validateField('type')
                        }}
                        style={{
                            cursor: 'pointer',
                            borderColor: form.values.type === item.value
                                ? 'var(--mantine-color-max-primary-6)'
                                : 'var(--mantine-color-gray-3)',
                            backgroundColor: form.values.type === item.value
                                ? 'color-mix(in srgb, var(--mantine-color-max-primary-6) 14%, var(--mantine-color-white))'
                                : 'var(--mantine-color-white)',
                        }}
                    >
                        <Group justify="space-between">
                            <Group gap="sm">
                                <ThemeIcon
                                    variant={form.values.type === item.value ? 'gradient' : 'light'}
                                    gradient={ORDER_ACCENT_GRADIENT}
                                    color="max-primary"
                                    radius="xl"
                                >
                                    <item.icon size={20} />
                                </ThemeIcon>
                                <Text fw={500}>{item.label}</Text>
                            </Group>
                            <Radio color="max-primary" checked={form.values.type === item.value} readOnly />
                        </Group>
                    </Card>
                ))}
            </SimpleGrid>
            {form.errors.type && (
                <Text c="red.6" size="sm" mt="sm">
                    {form.errors.type}
                </Text>
            )}
        </>
    )
}