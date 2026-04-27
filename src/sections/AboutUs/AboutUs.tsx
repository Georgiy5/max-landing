import { Box, Container, SimpleGrid } from '@mantine/core'
import AboutUsChatSection from './AboutUsChatSection'
import AboutUsInformationSection from './AboutUsInformationSection'

export default function AboutUs() {
    return (
        <Box component="section" mt={{ base: 20, md: 20, lg: 60 }} id="about">
            <Container size="xl">
                <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="clamp(24px, 3vw, 48px)">
                    <AboutUsInformationSection />
                    <AboutUsChatSection />
                </SimpleGrid>
            </Container>
        </Box>
    )
}
