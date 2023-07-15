import { Box, Button, Flex, Heading, Divider, useColorModeValue, Container } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';

const IndexPage = () => {
	const color = useColorModeValue('blackAlpha.50', 'blackAlpha.800');

	return (
		<Box background={color}>
			<Container maxW="95%" margin="auto">
				<Header />
				<About />
				<Divider />
				<Footer />
			</Container>
		</Box>
	);
};

export default IndexPage;
