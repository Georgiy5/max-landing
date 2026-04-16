import { Box, Container } from '@mantine/core'
import Phone from '../../components/Phone/Phone'
import AboutUsInformation from '../../components/AboutUsInformation/AboutUsInformation'
import classes from './AboutUs.module.css'

export default function AboutUs() {
    return (
        <Box
            component="section"
            id="home"
            px={{ base: 16, md: 40 }}
            pt={28}
            pb={50}
            style={{
                overflow: 'hidden',
                background:
                    'radial-gradient(circle at 95% 8%, var(--mantine-color-max-bg-4), transparent 26%), linear-gradient(180deg, var(--mantine-color-max-bg-1) 0%, var(--mantine-color-max-bg-2) 100%)',
            }}
        >
            <Container size="xl">
                <Box className={classes.layout}>
                    <Box className={classes.infoCol}>
                        <AboutUsInformation />
                    </Box>

                    <Box className={classes.phoneCol}>
                        <Box className={classes.phoneFrame}>
                            <Phone />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
