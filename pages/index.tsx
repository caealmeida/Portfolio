import { Box, Button, Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import Header from '../components/Header';

const IndexPage = () => {
	const color = useColorModeValue('blackAlpha.50', 'blackAlpha.800');
	return (
		<Box backgroundColor={color}>
			<Header />
			<Flex height="100vh" alignItems="center" justifyContent="center">
				<Flex direction="column" p={12} rounded={6}>
					<Heading>Hello Next.js 👋</Heading>
					<Button colorScheme="red">TESTE</Button>
				</Flex>
			</Flex>
		</Box>
	);
};

export default IndexPage;
