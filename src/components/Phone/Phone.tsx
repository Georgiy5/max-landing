import {
    ActionIcon,
    Box,
    Group,
    Paper,
    Stack,
    Text,
    TextInput,
    ThemeIcon,
} from '@mantine/core'
import {
    IconBrandHipchat,
    IconDotsVertical,
    IconMoodSmile,
    IconPaperclip,
    IconSearch,
    IconSend,
} from '@tabler/icons-react'
import TypingDots from '../TypingDots/TypingDots'


export default function Phone() {
    return (
        <Paper
            shadow='xl'
            withBorder
            h='100%'
            mih='clamp(420px, 56vw, 640px)'
            display='grid'
            bdrs='clamp(20px, 3vw, 30px)'
            style={{
                boxSizing: 'border-box',
                gridTemplateRows: 'auto 1fr auto',
                background:
                    'linear-gradient(rgba(255, 255, 255, 0.52), rgba(255, 255, 255, 0.52)), url(/telegram-pattern.svg), linear-gradient(165deg, var(--mantine-color-max-bg-0) 0%, var(--mantine-color-max-bg-2) 100%)',
                backgroundSize: 'cover, cover, cover',
                backgroundPosition: 'center, center, center',
                boxShadow:
                    '0 16px 36px color-mix(in srgb, var(--mantine-color-max-navy-8) 20%, transparent), inset 0 0 0 1px var(--mantine-color-gray-3)',
                overflow: 'hidden',
            }}
        >
            <Group
                justify="space-between"
                gap="sm"
                wrap="nowrap"
                px={{ base: 10, sm: 16, md: 20 }}
                py={{ base: 8, sm: 14, md: 18 }}
                bg='rgba(255, 255, 255, 0.82)'
                style={{
                    borderBottom: '1px solid var(--mantine-color-gray-3)',
                }}
            >
                <Group gap={8} wrap="nowrap" miw={0} style={{ flex: 1 }}>
                    <ThemeIcon
                        radius="xl"
                        size={32}
                        variant="gradient"
                        gradient={{ from: 'max-primary.5', to: 'max-accent.6', deg: 180 }}
                    >
                        <IconBrandHipchat size={14} />
                    </ThemeIcon>
                    <Stack gap={0} miw={0}>
                        <Text
                            size="sm"
                            fw={700}
                            c="max-navy.8"
                            fz="clamp(11px, 1.05vw, 14px)"
                            truncate
                        >
                            MAX Support Bot
                        </Text>
                        <Text size="xs" c="max-primary.5" fz="clamp(9px, 0.9vw, 12px)">
                            Онлайн
                        </Text>
                    </Stack>
                </Group>

                <Group gap={4} wrap="nowrap" style={{ flexShrink: 0 }}>
                    <ActionIcon variant="subtle" color="gray" aria-label="Search">
                        <IconSearch size={15} />
                    </ActionIcon>
                    <ActionIcon variant="subtle" color="gray" aria-label="Menu">
                        <IconDotsVertical size={15} />
                    </ActionIcon>
                </Group>
            </Group>

            <Stack gap={0} px={{ base: 6, sm: 12, md: 16 }} py={{ base: 6, sm: 12, md: 16 }}>
                <Group
                    align="end"
                    mb={{ base: 8, sm: 10, md: 14 }}
                    wrap="nowrap"
                    miw={0}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'auto minmax(0, 1fr)',
                        columnGap: 8,
                    }}
                >
                    <ThemeIcon
                        radius="xl"
                        size={28}
                        variant="gradient"
                        gradient={{ from: 'max-primary.5', to: 'max-accent.6', deg: 180 }}
                    >
                        <IconBrandHipchat size={12} />
                    </ThemeIcon>
                    <Paper
                        withBorder
                        radius={16}
                        px={{ base: 10, sm: 12, md: 16 }}
                        py={{ base: 8, sm: 10, md: 14 }}
                        bg="white"
                        miw={0}
                        w='100%'
                    >
                        <Text c="max-navy.8" lh={1.25} fz="clamp(10px, 1vw, 16px)" style={{ overflowWrap: 'anywhere' }}>
                            Здравствуйте! Чем могу помочь?
                        </Text>
                    </Paper>
                </Group>

                <Group justify="flex-end" mb={{ base: 10, sm: 12, md: 16 }}>
                    <Paper
                        radius="16px 16px 4px 16px"
                        px={{ base: 10, sm: 12, md: 16 }}
                        py={{ base: 8, sm: 10, md: 14 }}
                        bg="max-primary.6"
                        miw={0}
                        maw='78%'
                    >
                        <Text c="white" lh={1.25} fz="clamp(10px, 1vw, 16px)" style={{ overflowWrap: 'anywhere' }}>
                            Хочу узнать статус заказа #12345
                        </Text>
                    </Paper>
                </Group>

                <Group
                    align="end"
                    wrap="nowrap"
                    maw="100%"
                    miw={0}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'auto minmax(0, 1fr)',
                        columnGap: 8,
                    }}
                >
                    <ThemeIcon
                        radius="xl"
                        size={28}
                        variant="gradient"
                        gradient={{ from: 'max-primary.5', to: 'max-accent.6', deg: 180 }}
                    >
                        <IconBrandHipchat size={12} />
                    </ThemeIcon>
                    <Paper
                        withBorder
                        radius={16}
                        px={{ base: 10, sm: 12, md: 14 }}
                        py={{ base: 8, sm: 9, md: 10 }}
                        bg="white"
                        miw={0}
                        w='fit-content'
                        maw='100%'
                    >
                        <Text
                            c="gray.5"
                            fw={700}
                            fz="clamp(10px, 0.9vw, 12px)"
                            style={{ lineHeight: 1 }}
                        >
                            <TypingDots />
                        </Text>
                    </Paper>
                </Group>
            </Stack>

            <Box px={{ base: 8, sm: 12 }} pb={{ base: 8, sm: 12 }} pt={{ base: 6, sm: 8 }}>
                <TextInput
                    readOnly
                    value="Сообщение"
                    leftSection={<IconPaperclip size={14} />}
                    rightSectionWidth={72}
                    rightSection={
                        <Group gap={2} wrap="nowrap">
                            <ActionIcon variant="subtle" color="gray" aria-label="Emoji">
                                <IconMoodSmile size={14} />
                            </ActionIcon>
                            <ActionIcon radius="xl" variant="filled" color="blue" aria-label="Send">
                                <IconSend size={14} />
                            </ActionIcon>
                        </Group>
                    }
                    styles={{
                        input: {
                            height: 'clamp(38px, 4vw, 46px)',
                            borderRadius: 999,
                            borderColor: 'var(--mantine-color-gray-3)',
                            background: 'rgba(255, 255, 255, 0.92)',
                            color: 'var(--mantine-color-gray-5)',
                            fontSize: 'clamp(11px, 1vw, 14px)',
                        },
                    }}
                />
            </Box>
        </Paper>
    )
}