import { Flex, Icon, Link, Spacer, Text } from '@chakra-ui/react';
import { TbBrandLinkedin, TbBrandGithub, TbMail } from 'react-icons/tb';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<Flex justifyContent="center" p={3} position="static" bottom={0} left={0} right={0}>
			<Text fontSize="sm" letterSpacing="wide">
				caealmeida © - {year}
			</Text>
			<Spacer />
			<Flex justifyContent="space-between">
				<Link href="https://www.linkedin.com/in/caealmeida/" isExternal>
					<Icon as={TbBrandLinkedin} boxSize={8} />
				</Link>
				<Link href="https://github.com/caealmeida" mx={5} isExternal>
					<Icon as={TbBrandGithub} boxSize={8} />
				</Link>
				<Link href="mailto:cae.almeida1@gmail.com" isExternal>
					<Icon as={TbMail} boxSize={8} />
				</Link>
			</Flex>
		</Flex>
	);
};

export default Footer;
