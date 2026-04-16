import { Box } from '@mantine/core';
import Header from '../../components/Header/Header';
import AboutUs from '../../sections/AboutUs/AboutUs';
import ForWho from '../../sections/ForWho/ForWho';
import Order from '../../sections/Order/Order';
import OurFeatures from '../../sections/OurFeatures/OurFeatures';
import { Quiz } from '../../sections/Quiz/Quiz';
import Contacts from '../../sections/Contacts/Contacts';
import Footer from '../../components/Footer/Footer';


export default function MainPage() {
    return (
        <Box>
            <Header />
            <AboutUs />
            <ForWho />
            <Order />
            <OurFeatures />
            <Quiz />
            <Contacts />
            <Footer />
        </Box>
    );
}
