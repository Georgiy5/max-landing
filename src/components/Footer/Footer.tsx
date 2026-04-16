import { Anchor, Box, Container, Group, Stack, Text } from '@mantine/core';

export default function Footer() {
    const navLinks = [
        { label: 'Главная', href: '#home' },
        { label: 'Кому подходит', href: '#for-who' },
        { label: 'Этапы', href: '#order' },
        { label: 'Преимущества', href: '#features' },
        { label: 'Контакты', href: '#contacts' },
    ] as const;

    const currentYear = new Date().getFullYear();

    return (
        <Box
            component="footer"
            mt={{ base: 60, sm: 90 }}
            py={{ base: 32, sm: 40 }}
            style={{
                borderTop: '1px solid var(--mantine-color-gray-3)',
                background: 'linear-gradient(180deg, var(--mantine-color-max-bg-0) 0%, var(--mantine-color-max-bg-2) 100%)',
            }}
        >
            <Container size="xl">
                <Stack gap={20}>
                    <Group justify="space-between" align="flex-start" gap="lg">
                        <Stack gap={6}>
                            <Text fw={800} fz={{ base: 'lg', sm: 'xl' }} c="max-navy.9">
                                MAX BOTS
                            </Text>
                            <Text c="dimmed" fz="sm">
                                Боты для автоматизации продаж, поддержки и процессов
                            </Text>
                        </Stack>

                        <Group gap={14} wrap="wrap" justify="flex-end">
                            {navLinks.map((link) => (
                                <Anchor
                                    key={link.href}
                                    href={link.href}
                                    c="max-navy.7"
                                    fz="sm"
                                    fw={600}
                                    td="none"
                                >
                                    {link.label}
                                </Anchor>
                            ))}
                        </Group>
                    </Group>

                    <Group justify="space-between" gap="sm" wrap="wrap">
                        <Text c="dimmed" fz="sm">
                            © {currentYear} MAX BOTS. Все права защищены.
                        </Text>
                        <Group gap={12}>
                            <Anchor href="tel:+79991234567" c="max-primary.7" fz="sm" fw={600} td="none">
                                +7 (999) 123-45-67
                            </Anchor>
                            <Anchor href="https://t.me/maxbots" target="_blank" rel="noopener noreferrer" c="max-primary.7" fz="sm" fw={600} td="none">
                                Telegram
                            </Anchor>
                            <Anchor href="https://t.me/maxbots" target="_blank" rel="noopener noreferrer" c="max-primary.7" fz="sm" fw={600} td="none">
                                MAX
                            </Anchor>
                        </Group>
                    </Group>
                </Stack>
            </Container>
        </Box>
    );
}
