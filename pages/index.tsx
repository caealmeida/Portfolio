import { Box, Divider, useColorModeValue, Container } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import Contacts from '../components/Contacts';

const IndexPage = () => {
  const color = useColorModeValue('blackAlpha.100', 'blackAlpha.800');

  return (
    <Box background={color}>
      <Container maxW='95%' margin='auto'>
        <Header />
        <Home />
        <About />
        <Contacts />
        <Projects />
        <Divider />
        <Footer />
      </Container>
    </Box>
  );
};

export default IndexPage;
