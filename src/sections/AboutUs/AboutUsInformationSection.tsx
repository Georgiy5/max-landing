import { Box, Button, Container, Group, Stack, Text, Title } from '@mantine/core'
import { IconArrowRight } from '@tabler/icons-react'

export default function AboutUsInformationSection() {
    return (
        <Box
            component="section"
            id="home"
            px={{ base: 16, md: 40 }}
            pt={28}
        >
            <Container size="xl">
                <Stack gap="clamp(20px, 3vw, 34px)">
                    <Stack pt={{ base: 8, md: 24 }} gap="clamp(14px, 2.1vw, 26px)">
                        <Title
                            order={1}
                            c="max-navy.9"
                            fz="clamp(32px, 4.6vw, 72px)"
                            lh={1.04}
                            // maw={760}
                            style={{ letterSpacing: '-0.03em' }}
                        >
                            Умные чат-боты для вашего{' '}
                            <Text
                                component="span"
                                inherit
                                variant="gradient"
                                gradient={{ from: 'max-primary.6', to: 'max-accent.6', deg: 90 }}
                            >
                                учреждения
                            </Text>
                        </Title>

                        <Text c="gray.6" maw={680} fz="clamp(15px, 1.45vw, 26px)" lh={1.42}>
                            Автоматизируем рабочие процессы, запись и поддержку в мессенджере MAX. Запуск от 5 дней с
                            интеграцией в ваши системы.
                        </Text>
                    </Stack>

                    <Group mt="sm" gap="md" wrap="wrap" align="stretch">
                        <Button
                            component="a"
                            href="#quiz"
                            size="lg"
                            radius="xl"
                            flex="1 1 220px"
                            mih="clamp(42px, 4.5vw, 50px)"
                            rightSection={<IconArrowRight size={18} />}
                            variant="gradient"
                            gradient={{ from: 'max-primary.6', to: 'max-accent.6', deg: 90 }}
                            style={{ boxShadow: '0 12px 24px var(--mantine-color-max-primary-2)' }}
                        >
                            Рассчитать стоимость
                        </Button>

                        <Button
                            component="a"
                            href="#order"
                            size="lg"
                            radius="xl"
                            flex="1 1 220px"
                            mih="clamp(42px, 4.5vw, 50px)"
                            bg="var(--mantine-color-max-bg-0)"
                            bd="1px solid var(--mantine-color-gray-3)"
                            c="var(--mantine-color-max-navy-7)"
                            variant="default"
                        >
                            Порядок работы
                        </Button>

                    </Group>
                </Stack>
            </Container>
        </Box>
    )
}