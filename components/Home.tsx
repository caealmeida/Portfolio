import { Flex, Heading, Text } from '@chakra-ui/react';

const Home = () => (
	<Flex p={2} justifyContent="center" mt={200} mb={50}>
		<Flex direction="column" maxW="75%">
			<Text fontSize="5em" p={6}>
				Fullstack
			</Text>
			<Heading as="h1" size="4xl" fontSize="15em">
				Software Developer
			</Heading>
		</Flex>
		<Flex direction="column" justifyContent="flex-end" mb={5}>
			<Text fontSize="1.8em">Java</Text>
			<Text fontSize="1.8em">JavaScript</Text>
			<Text fontSize="1.8em">TypeScript</Text>
			<Text fontSize="1.8em">Python</Text>
			<Text fontSize="1.8em">C#</Text>
		</Flex>
	</Flex>
);

export default Home;
