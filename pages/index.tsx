import { Box, Button, Flex, Heading, Divider, useColorModeValue, Container } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const IndexPage = () => {
	const color = useColorModeValue('blackAlpha.50', 'blackAlpha.800');

	return (
		<Box background={color}>
			<Container maxW="95%" margin="auto">
				<Header />
				<Flex height="100vh" alignItems="center" justifyContent="center">
					<Flex direction="column" p={12} pb={900}>
						<Heading>Hello Next.js 👋</Heading>
						<Button colorScheme="red">TESTE</Button>
					</Flex>
				</Flex>
				<Divider />
				<Footer />
			</Container>
		</Box>
	);
};

export default IndexPage;
