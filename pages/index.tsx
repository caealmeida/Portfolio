import { Button, Flex, Heading } from '@chakra-ui/react';
import Header from '../components/Header';

const IndexPage = () => (
	<>
		<Header />
		<Flex height="100vh" alignItems="center" justifyContent="center">
			<Flex direction="column" background="gray.100" p={12} rounded={6}>
				<Heading>Hello Next.js 👋</Heading>
				<Button colorScheme="red">TESTE</Button>
			</Flex>
		</Flex>
	</>
);

export default IndexPage;
