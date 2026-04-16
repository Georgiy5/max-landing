import {
    Box,
    Burger,
    Button,
    Container,
    Divider,
    Drawer,
    Group,
    ScrollArea,
    Text
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ORDER_ACCENT_GRADIENT } from '../../helpers/constants';
import classes from './Header.module.css';

export default function Header() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const links = [
        { label: 'Главная', href: '#home' },
        { label: 'Кому подходит', href: '#for-who' },
        { label: 'Этапы', href: '#order' },
        { label: 'Преимущества', href: '#features' },
        { label: 'Контакты', href: '#contacts' },
    ] as const;

    return (
        <Box className={classes.root}>
            <header className={classes.header}>
                <Container size="xl" h="100%">
                    <Group justify="space-between" h="100%">
                        <a href="#home" className={classes.logo}>
                            <Text fw={800} fz="lg" c="max-navy.9">MAX BOTS</Text>
                        </a>

                        <Group h="100%" gap={2} visibleFrom="sm">
                            {links.map((link) => (
                                <a key={link.href} href={link.href} className={classes.link}>
                                    {link.label}
                                </a>
                            ))}
                        </Group>

                        <Group visibleFrom="sm">
                            <Button
                                component="a"
                                href="#quiz"
                                variant="gradient"
                                gradient={ORDER_ACCENT_GRADIENT}
                            >
                                Заказать бота
                            </Button>
                        </Group>

                        <Burger
                            opened={drawerOpened}
                            onClick={toggleDrawer}
                            hiddenFrom="sm"
                            aria-label="Toggle navigation"
                        />
                    </Group>
                </Container>
            </header>
            <Box className={classes.offset} />

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Navigation"
                hiddenFrom="sm"
                zIndex={1000000}
            >
                <ScrollArea h="calc(100vh - 80px)" mx="-md">
                    <Divider my="sm" />

                    {links.map((link) => (
                        <a key={link.href} href={link.href} className={classes.link} onClick={closeDrawer}>
                            {link.label}
                        </a>
                    ))}

                    <Divider my="sm" />

                    <Group justify="center" grow pb="xl" px="md">
                        <Button
                            component="a"
                            href="#quiz"
                            variant="gradient"
                            gradient={ORDER_ACCENT_GRADIENT}
                            onClick={closeDrawer}
                        >
                            Заказать бота
                        </Button>
                    </Group>
                </ScrollArea>
            </Drawer>
        </Box>
    );
}