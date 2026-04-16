import { Container, Group, Paper, Stack, Text, Title } from "@mantine/core";

export default function OurFeatures() {
    const messages = [
        {
            title: "Нативная интеграция",
            description: "Бесшовная работа с CRM, платежными системами и внутренними базами данных.",
            side: "left",
        },
        {
            title: "Готовые сценарии",
            description: "Библиотека проверенных воронок для продаж, онбординга и техподдержки.",
            side: "right",
        },
        {
            title: "Аналитика",
            description: "Детальные отчеты по диалогам, конверсиям и удовлетворенности клиентов.",
            side: "left",
        },
        {
            title: "Поддержка 24/7",
            description: "Бот работает без выходных и перерывов, мгновенно отвечая на запросы пользователей.",
            side: "right",
        },
    ] as const;

    return (
        <Container id="features" size="xl" mt={{ base: 60, sm: 100, md: 150 }} component="section">
            <Stack align="center">
                <Title
                    c="max-navy.9"
                    fz="clamp(32px, 4.6vw, 48px)"
                    lh={1.04}
                    maw={760}
                    order={2}
                    ta='center'
                >
                    Почему выбирают наших ботов
                </Title>
                <Text ta='center' c='dimmed' maw={680} fz="clamp(15px, 1.45vw, 26px)" lh={1.42}>
                    Автоматизируем рутину, чтобы вы могли сосредоточиться на развитии бизнеса.
                </Text>
            </Stack>

            <Stack mt={50} gap="md" maw={980} mx="auto">
                {messages.map((message) => {
                    const isOutgoing = message.side === "right";

                    return (
                        <Group
                            key={message.title}
                            justify={isOutgoing ? "flex-end" : "flex-start"}
                            align="flex-end"
                            gap={8}
                            wrap="nowrap"
                            w="100%"
                        >
                            {!isOutgoing && (
                                <img
                                    src="/MAX.svg"
                                    alt="MAX Avatar"
                                    width={36}
                                    height={36}
                                    style={{ flexShrink: 0 }}
                                />
                            )}

                            <Paper
                                shadow="sm"
                                p={{ base: 14, md: 16 }}
                                maw={720}
                                miw={0}
                                style={{
                                    width: "fit-content",
                                    maxWidth: "calc(100% - 44px)",
                                    borderRadius: isOutgoing ? "16px 16px 6px 16px" : "16px 16px 16px 6px",
                                    background: isOutgoing
                                        ? "var(--mantine-color-max-primary-6)"
                                        : "var(--mantine-color-max-bg-0)",
                                    border: isOutgoing
                                        ? "1px solid color-mix(in srgb, var(--mantine-color-max-primary-7) 65%, transparent)"
                                        : "1px solid color-mix(in srgb, var(--mantine-color-gray-3) 75%, transparent)",
                                }}
                            >
                                <Stack gap={4}>
                                    <Title
                                        order={3}
                                        fz="clamp(19px, 1.35vw, 26px)"
                                        c={isOutgoing ? "white" : "max-navy.9"}
                                        lh={1.2}
                                    >
                                        {message.title}
                                    </Title>
                                    <Text
                                        c={isOutgoing ? "max-bg.0" : "gray.6"}
                                        fz="clamp(14px, 0.95vw, 18px)"
                                        lh={1.45}
                                        style={{ overflowWrap: "anywhere" }}
                                    >
                                        {message.description}
                                    </Text>
                                </Stack>
                            </Paper>

                            {isOutgoing && (

                                <img
                                    src="/MAX.svg"
                                    alt="MAX Avatar"
                                    width={36}
                                    height={36}
                                    style={{ flexShrink: 0 }}
                                />
                            )}
                        </Group>
                    );
                })}
            </Stack>
        </Container>
    )
}