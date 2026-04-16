import { Stack, Title, Text, Container, SimpleGrid, Paper, Group, useMantineTheme } from "@mantine/core";
import { IconBuilding, IconCheck, IconListCheck, IconMedicalCross, IconMoneybag } from "@tabler/icons-react";



export default function ForWho() {
    const data = [
        {
            title: 'Гос. учреждения',
            description: [
                'Расписание транспорта',
                'Онлайн-приёмная',
                'Запись к врачу'
            ],
            icon: <IconBuilding size={24} />
        },
        {
            title: 'Малый бизнес',
            description: [
                'Ресторан',
                'Салон красоты',
                'Магазин'
            ],
            icon: <IconMoneybag size={24} />
        },
        {
            title: 'Медицина',
            description: [
                'Онлайн-запись',
                'Ответы на вопросы',
                'Поддержка пациентов'
            ],
            icon: <IconMedicalCross size={24} />
        },
        {
            title: 'Служба поддержки',
            description: [
                'Автоматизация ответов',
                'Обработка запросов',
                'Клиентский сервис'
            ],
            icon: <IconListCheck size={24} />
        }
    ]

    const theme = useMantineTheme();

    return (
        <Container id="for-who" size="xl" mt={{ base: 60, sm: 100, md: 150 }} component="section">
            <Stack align="center" >
                <Title
                    c="max-navy.9"
                    fz="clamp(32px, 4.6vw, 48px)"
                    lh={1.04}
                    maw={760}
                    order={2}
                    ta='center'
                >
                    Кому подходит
                </Title>
                <Text ta='center' c='dimmed' maw={680} fz="clamp(15px, 1.45vw, 26px)" lh={1.42}>Готовые решения разных сфер бизнеса с учетом специфики вашей деятельности</Text>
            </Stack>

            <SimpleGrid
                cols={{ base: 1, sm: 2, md: 2, lg: 4 }}
                spacing={{ base: 'md', sm: 'lg', lg: 'xl' }}
                verticalSpacing={{ base: 'md', sm: 'lg', lg: 'xl' }}
                mt={50}
            >
                {data.map((item) => (
                    <Paper key={item.title} shadow="lg" radius="lg" h="100%">
                        <Stack gap={8} align="left" p={30}>
                            {item.icon}
                            <Title order={4}>{item.title}</Title>
                            <Stack gap={4}>
                                {item.description.map((desc) => (
                                    <Group key={desc}>
                                        <IconCheck color={theme.colors['max-primary'][6]} /> <Text c='dimmed'>{desc}</Text>
                                    </Group>

                                ))}
                            </Stack>
                        </Stack>
                    </Paper>
                ))}
            </SimpleGrid>
        </Container >
    )
}