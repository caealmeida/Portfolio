import { Box, Button, Flex, Heading, Divider, useColorModeValue, Container } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import About from '../components/About';

const IndexPage = () => {
	const color = useColorModeValue('blackAlpha.100', 'blackAlpha.800');

	return (
		<Box background={color}>
			<Container maxW="95%" margin="auto">
				<Header />
				<Home />
				<About />
				<Divider />
				<Footer />
			</Container>
		</Box>
	);
};

export default IndexPage;
