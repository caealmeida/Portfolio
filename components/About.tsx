import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const About = () => (
	<Flex p={2} justifyContent="center" mt={200}>
		<Flex direction="column" maxW="80%">
			<Text fontSize="5em" p={6}>
				Fullstack
			</Text>
			<Heading as="h1" size="4xl" fontSize="15em">
				Software Developer
			</Heading>
		</Flex>
		<Flex direction="column" justifyContent="flex-end">
			<Text fontSize="1.8em">Java</Text>
			<Text fontSize="1.8em">JavaScript</Text>
			<Text fontSize="1.8em">TypeScript</Text>
			<Text fontSize="1.8em">Python</Text>
			<Text fontSize="1.8em">C#</Text>
		</Flex>
	</Flex>
);

export default About;
