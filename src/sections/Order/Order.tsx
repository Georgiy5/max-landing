import {
    Badge,
    Box,
    Container,
    Group,
    Paper,
    SimpleGrid,
    Stack,
    Text,
    ThemeIcon,
    Title,
} from "@mantine/core";
import {
    IconClock,
    IconFileDescription,
    IconHammer,
    IconRocket,
    IconRosetteDiscountCheck,
} from "@tabler/icons-react";
import { ORDER_ACCENT_GRADIENT } from "../../helpers/constants";

export default function Order() {
    const steps = [
        {
            id: 1,
            title: "Формируем ТЗ",
            description:
                "Детально обсуждаем задачи и бизнес-процессы. Составляем техническое задание с учетом всех требований и особенностей.",
            meta: "1-2 дня",
            icon: <IconFileDescription size={22} />,
        },
        {
            id: 2,
            title: "Заключаем договор",
            description:
                "Подписываем официальный договор с фиксацией сроков и стоимости. Прозрачные условия и гарантии качества работы.",
            meta: "1 день",
            icon: <IconRosetteDiscountCheck size={22} />,
        },
        {
            id: 3,
            title: "Тестируем бота",
            description:
                "Разрабатываем и проводим всестороннее тестирование. Вы проверяете функции и вносите правки до полного соответствия.",
            meta: "от 5 дней",
            icon: <IconHammer size={22} />,
        },
        {
            id: 4,
            title: "Передаем заказчику",
            description:
                "Передаем готового бота, подключаем к вашим системам и обучаем команду для уверенного старта.",
            meta: "Готово",
            icon: <IconRocket size={22} />,
        },
    ] as const;

    return (
        <Box
            component="section"
            id="order"
            mt={{ base: 60, sm: 100, }}
        >
            <Container size="xl">
                <Stack align="center" gap={14}>
                    <Title
                        fz="clamp(32px, 4.6vw, 48px)"
                        lh={1.04}
                        maw={820}
                        order={2}
                        ta="center"
                    >
                        Порядок работы
                    </Title>
                    <Text
                        ta="center"
                        c="dimmed"
                        maw={760}
                        fz="clamp(15px, 1.45vw, 28px)"
                        lh={1.4}
                    >
                        Прозрачный процесс от идеи до запуска за 4 простых шага
                    </Text>
                </Stack>

                <SimpleGrid
                    cols={{ base: 1, sm: 2 }}
                    spacing={{ base: "md", sm: "lg", lg: "xl" }}
                    verticalSpacing={{ base: "md", sm: "lg", lg: "xl" }}
                    mt={54}
                >
                    {steps.map((step) => (
                        <Paper
                            key={step.id}
                            shadow="lg"
                            radius="xl"
                            p={{ base: 20, md: 28 }}
                            h="100%"
                        >

                            <Stack align="center" gap={18} h="100%">
                                <ThemeIcon
                                    size={68}
                                    radius={18}
                                    variant="gradient"
                                    gradient={ORDER_ACCENT_GRADIENT}
                                >
                                    {step.icon}
                                </ThemeIcon>

                                <Title order={3} ta="center" fz="clamp(24px, 2.05vw, 34px)" lh={1.15}>
                                    {step.title}
                                </Title>

                                <Text ta="center" c="dimmed" lh={1.5} fz="clamp(15px, 1vw, 20px)">
                                    {step.description}
                                </Text>

                                <Group mt="auto">
                                    <Badge
                                        size="lg"
                                        variant="light"
                                        color="max-primary"
                                        radius="xl"
                                        px={14}
                                        leftSection={<IconClock size={14} />}
                                    >
                                        {step.meta}
                                    </Badge>
                                </Group>
                            </Stack>
                        </Paper>
                    ))}
                </SimpleGrid>
            </Container>
        </Box >
    );
}
