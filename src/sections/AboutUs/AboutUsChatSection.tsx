import {
    ActionIcon,
    Box,
    Button,
    Container,
    Group,
    Paper,
    Stack,
    Text,
    TextInput,
} from '@mantine/core'
import {
    IconArrowLeft,
    IconCheck,
    IconDotsVertical,
    IconPlus,
    IconMoodSmile,
    IconPaperclip,
    IconSearch,
    IconSend,
} from '@tabler/icons-react'

export default function AboutUsChatSection() {
    const contentMaxWidth = 'min(100%, 940px)'
    const inlineBlockWidth = 'min(100%, clamp(180px, 44vw, 420px))'

    const scenarioButtons = [
        'По остановке',
        'По маршруту',
        'Маршрут -> Остановка',
        'Расчёт маршрута',
        'Список маршрутов',
        'О разработчике',
    ]

    return (
        <Box
            component="section"
            px={{ base: 8, sm: 16, md: 40 }}
            mt={{ base: 60, sm: 100, }}

        >
            <Container size="xl" px={0}>
                <Paper
                    shadow="xl"
                    h="100%"
                    mih="clamp(420px, 50vw, 680px)"
                    display={{ base: 'block', sm: 'grid' }}
                    bdrs="clamp(10px, 1.2vw, 16px)"
                    style={{
                        boxSizing: 'border-box',
                        gridTemplateColumns: 'clamp(58px, 7vw, 76px) minmax(0, 1fr)',
                        boxShadow:
                            '0 16px 36px color-mix(in srgb, var(--mantine-color-max-navy-8) 20%, transparent)',
                        overflow: 'hidden',
                    }}
                >
                    <Stack gap={8} align="center" px={8} py={10} bg="#f5f6f8" visibleFrom="sm">
                        <ActionIcon
                            size={34}
                            radius="xl"
                            variant="filled"
                            color="blue"
                            style={{ flexShrink: 0 }}
                            aria-label="New chat"
                        >
                            <IconPlus size={17} stroke={2.4} />
                        </ActionIcon>

                        {['#ff9f1c', '#ff5c8a', '#5f6fff', '#202124', '#8f8f8f', '#5865f2', '#f77f00'].map(
                            (color, index) => (
                                <Box
                                    key={index}
                                    w={42}
                                    h={42}
                                    style={{
                                        borderRadius: '50%',
                                        background: color,
                                        border: '2px solid #f5f6f8',
                                        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.12)',
                                    }}
                                />
                            ),
                        )}
                    </Stack>

                    <Box display="grid" style={{ gridTemplateRows: 'auto 1fr auto', minWidth: 0 }}>
                        <Group
                            justify="space-between"
                            gap="sm"
                            wrap="nowrap"
                            px={{ base: 10, sm: 14, md: 18 }}
                            py={{ base: 8, sm: 10, md: 12 }}
                            bg="#f5f5f5"
                        >
                            <Group gap={8} wrap="nowrap" miw={0} style={{ flex: 1 }}>
                                <ActionIcon variant="subtle" color="gray" aria-label="Back" size="sm">
                                    <IconArrowLeft size={16} />
                                </ActionIcon>

                                <Box
                                    w={28}
                                    h={28}
                                    style={{
                                        borderRadius: '50%',
                                        background: '#d0d0d0',
                                        flexShrink: 0,
                                    }}
                                />

                                <Stack gap={0} miw={0}>
                                    <Text size="sm" fw={700} c="#2a2f34" fz="clamp(11px, 1vw, 14px)" truncate>
                                        Расписание автобусов
                                    </Text>
                                    <Text size="xs" c="#79838d" fz="clamp(9px, 0.9vw, 12px)">
                                        Бот
                                    </Text>
                                </Stack>
                            </Group>

                            <Group gap={4} wrap="nowrap" style={{ flexShrink: 0 }}>
                                <ActionIcon variant="subtle" color="gray" aria-label="Search" size="sm">
                                    <IconSearch size={15} />
                                </ActionIcon>
                                <ActionIcon variant="subtle" color="gray" aria-label="Menu" size="sm">
                                    <IconDotsVertical size={15} />
                                </ActionIcon>
                            </Group>
                        </Group>

                        <Stack
                            gap={8}
                            px={{ base: 8, sm: 14, md: 20 }}
                            py={{ base: 10, sm: 14, md: 16 }}
                            style={{
                                overflow: 'auto',
                                background:
                                    'linear-gradient(rgba(118, 201, 255, 0.82), rgba(118, 201, 255, 0.82)), url(/telegram-pattern.svg), #70bff2',
                                backgroundSize: 'cover, cover, cover',
                            }}
                        >
                            <Stack
                                gap={8}
                                style={{ width: '100%', maxWidth: contentMaxWidth, margin: '0 auto' }}
                                miw={0}
                            >
                                <Group justify="flex-end" wrap="nowrap">
                                    <Paper
                                        radius="12px 12px 2px 12px"
                                        px={{ base: 10, sm: 12, md: 14 }}
                                        py={{ base: 8, sm: 9, md: 10 }}
                                        bg="white"
                                        maw={{ base: 'min(100%, 190px)', sm: 'min(100%, clamp(144px, 40vw, 260px))' }}
                                        w="auto"
                                        miw={0}
                                    >
                                        <Group justify="space-between" wrap="nowrap" gap={6}>
                                            <Text c="#3f4c56" lh={1.1} fz="clamp(10px, 0.95vw, 13px)">
                                                /start
                                            </Text>
                                            <Group gap={3} wrap="nowrap">
                                                <Text c="#5ca7c6" fz="clamp(8px, 0.8vw, 11px)">
                                                    10:27
                                                </Text>
                                                <IconCheck size={11} color="#5ca7c6" />
                                            </Group>
                                        </Group>
                                    </Paper>
                                </Group>

                                <Paper
                                    radius={12}
                                    px={{ base: 10, sm: 12, md: 16 }}
                                    py={{ base: 8, sm: 10, md: 10 }}
                                    bg="white"
                                    maw={inlineBlockWidth}
                                    w="100%"
                                    miw={0}
                                >
                                    <Text
                                        c="#2d3136"
                                        fw={600}
                                        lh={1.2}
                                        fz="clamp(10px, 0.95vw, 14px)"
                                        style={{ overflowWrap: 'anywhere' }}
                                    >
                                        Выберите сценарий
                                    </Text>
                                    <Text c="#a5acb3" lh={1.1} fz="clamp(8px, 0.85vw, 11px)" ta="right" mt={2}>
                                        10:27
                                    </Text>
                                </Paper>

                                <Stack gap={4} maw={inlineBlockWidth} w="100%" miw={0}>
                                    {scenarioButtons.map((label) => (
                                        <Button
                                            key={label}
                                            variant="filled"
                                            radius={6}
                                            size="compact-md"
                                            color="cyan"
                                            styles={{
                                                root: {
                                                    background:
                                                        'linear-gradient(180deg, rgba(52, 168, 226, 0.58), rgba(35, 148, 205, 0.58))',
                                                    border: '1px solid rgba(255, 255, 255, 0.24)',
                                                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                                                    minHeight: 'clamp(26px, 2.6vw, 36px)',
                                                },
                                                label: {
                                                    color: 'white',
                                                    fontWeight: 700,
                                                    fontSize: 'clamp(9px, 0.95vw, 14px)',
                                                    whiteSpace: 'normal',
                                                    lineHeight: 1.15,
                                                },
                                            }}
                                        >
                                            {label}
                                        </Button>
                                    ))}
                                </Stack>

                                <Paper
                                    radius={12}
                                    px={{ base: 10, sm: 12, md: 14 }}
                                    py={{ base: 8, sm: 10, md: 10 }}
                                    bg="white"
                                    maw={inlineBlockWidth}
                                    w="100%"
                                    miw={0}
                                >
                                    <Text
                                        c="#2d3136"
                                        fw={700}
                                        lh={1.2}
                                        fz="clamp(9px, 0.95vw, 14px)"
                                        style={{ overflowWrap: 'anywhere' }}
                                    >
                                        Маршрут №4
                                    </Text>
                                    <Text
                                        c="#2d3136"
                                        lh={1.2}
                                        fz="clamp(9px, 0.95vw, 14px)"
                                        style={{ overflowWrap: 'anywhere' }}
                                    >
                                        Остановка: Школа №4
                                    </Text>
                                    <Text
                                        c="#2d3136"
                                        lh={1.2}
                                        fz="clamp(9px, 0.95vw, 14px)"
                                        style={{ overflowWrap: 'anywhere' }}
                                    >
                                        Ближайшие отправления: 09:57, 11:17, 13:47
                                    </Text>
                                    <Text
                                        c="#2d3136"
                                        lh={1.2}
                                        fz="clamp(9px, 0.95vw, 14px)"
                                        style={{ overflowWrap: 'anywhere' }}
                                    >
                                        Конечная: Школа искусств
                                    </Text>
                                    <Text
                                        c="#2d3136"
                                        lh={1.2}
                                        fz="clamp(9px, 0.95vw, 14px)"
                                        style={{ overflowWrap: 'anywhere' }}
                                    >
                                        Работает: ежедневно (Пн-Вс)
                                    </Text>
                                    <Text c="#a5acb3" lh={1.1} fz="clamp(8px, 0.85vw, 11px)" ta="right" mt={2}>
                                        09:23
                                    </Text>
                                </Paper>
                            </Stack>
                        </Stack>

                        <Box
                            px={{ base: 6, sm: 12 }}
                            pb={{ base: 8, sm: 10 }}
                            pt={{ base: 6, sm: 8 }}
                            style={{
                                background:
                                    'linear-gradient(rgba(118, 201, 255, 0.82), rgba(118, 201, 255, 0.82)), url(/telegram-pattern.svg), #70bff2',
                                backgroundSize: 'cover, cover, cover',
                            }}
                        >
                            <Box style={{ width: '100%', maxWidth: contentMaxWidth, margin: '0 auto' }}>
                                <TextInput
                                    readOnly
                                    value="Сообщение"
                                    leftSection={<IconPaperclip size={14} />}
                                    rightSectionWidth={64}
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
                                            height: 'clamp(36px, 4vw, 42px)',
                                            borderRadius: 999,
                                            borderColor: '#d7dce2',
                                            background: '#ffffff',
                                            color: '#8b939b',
                                            fontSize: 'clamp(10px, 0.95vw, 13px)',
                                        },
                                    }}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </Box>
    )
}