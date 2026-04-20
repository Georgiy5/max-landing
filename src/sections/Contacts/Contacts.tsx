import {
    ActionIcon,
    Box,
    Container,
    Paper,
    SimpleGrid,
    Stack,
    Text,
    Title,
} from '@mantine/core';
import { IconBrandTelegram, IconPhone } from '@tabler/icons-react';

export default function Contacts() {
    const contacts = [
        {
            title: 'Позвоните нам',
            value: '+7 (999) 123-45-67',
            href: 'tel:+79991234567',
            icon: <IconPhone size={22} stroke={2.2} />,
            iconGradient: { from: 'max-primary.6', to: 'max-primary.8', deg: 130 },
            openInNewTab: false,
            iconLabel: 'Позвонить по номеру +7 (999) 123-45-67',
            plainIcon: false,
        },
        {
            title: 'Напишите в Telegram',
            value: '@maxbots',
            href: 'https://t.me/maxbots',
            icon: <IconBrandTelegram size={22} stroke={2.2} />,
            iconGradient: { from: '#1DA1F2', to: '#0A72A4', deg: 130 },
            openInNewTab: true,
            iconLabel: 'Открыть чат в Telegram',
            plainIcon: false,
        },
        {
            title: 'Напишите в MAX Messenger',
            value: 'maxbots@maxbots.ru',
            href: 'https://max.ru/maxbots',
            icon: <img src="/MAX.svg" alt="MAX" style={{ width: 36, height: 36, display: 'block' }} />,
            iconGradient: { from: 'max-accent.5', to: 'max-accent.7', deg: 130 },
            openInNewTab: true,
            iconLabel: 'Открыть чат в MAX Messenger',
            plainIcon: true,
        },
    ] as const;

    return (
        <Box
            component="section"
            id="contacts"
            mt={{ base: 60, sm: 100, }}
        >
            <Container size="md">
                <Stack align="center" gap={14}>
                    <Title fz={{ base: '30px', sm: '36px', md: '42px' }} lh={1.08} maw={760} order={2} ta="center">
                        Свяжитесь с нами
                    </Title>
                    <Text ta="center" maw={660} fz={{ base: '16px', sm: '18px', md: '22px' }} lh={1.38} c="dimmed">
                        Готовы обсудить ваш проект? Выберите удобный способ связи
                    </Text>
                </Stack>

                <SimpleGrid cols={{ base: 1, md: 3 }} spacing={{ base: 'sm', md: 'md' }} mt={30}>
                    {contacts.map((contact) => (
                        <Paper
                            key={contact.title}
                            h="100%"
                            w="100%"
                            mx="auto"
                            radius={20}
                            p={{ base: 14, md: 18 }}
                            withBorder
                            maw={320}

                        >
                            <Stack align="center" gap={10} h="100%" ta="center">
                                <ActionIcon
                                    component="a"
                                    href={contact.href}
                                    target={contact.openInNewTab ? '_blank' : undefined}
                                    rel={contact.openInNewTab ? 'noopener noreferrer' : undefined}
                                    variant={contact.plainIcon ? 'transparent' : 'gradient'}
                                    gradient={contact.iconGradient}
                                    aria-label={contact.iconLabel}
                                    size={36}
                                    radius={10}
                                >
                                    {contact.icon}
                                </ActionIcon>

                                <Text fz={{ base: '16px', sm: '17px', md: '20px' }} lh={1.2} c="dimmed">
                                    {contact.title}
                                </Text>

                                <Text
                                    component="a"
                                    href={contact.href}
                                    target={contact.openInNewTab ? '_blank' : undefined}
                                    rel={contact.openInNewTab ? 'noopener noreferrer' : undefined}
                                    fz={{ base: '16px', sm: '17px', md: '20px' }}
                                    fw={800}
                                    lh={1.2}
                                    c="max-navy.9"
                                    td="none"
                                    style={{ overflowWrap: 'anywhere' }}
                                >
                                    {contact.value}
                                </Text>
                            </Stack>
                        </Paper>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}