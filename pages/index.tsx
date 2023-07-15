import { Box, Button, Flex, Heading, Divider, useColorModeValue, Container } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';

const IndexPage = () => {
	const color = useColorModeValue('blackAlpha.50', 'blackAlpha.800');

	return (
		<Box background={color}>
			<Container maxW="95%" margin="auto">
				<Header />
				<Home />
				<Divider />
				<Footer />
			</Container>
		</Box>
	);
};

export default IndexPage;
