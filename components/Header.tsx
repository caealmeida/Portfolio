import {
	Flex,
	Text,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	IconButton,
	Tooltip,
	useColorMode,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Img,
	Link,
	useColorModeValue,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import { TbLanguage, TbMoonFilled, TbSunHigh } from 'react-icons/tb';

const Header = () => {
	const { toggleColorMode } = useColorMode();
	const color: string = useColorModeValue('#f5f5f5', '#050609');
	const darkModeIcon: ReactElement = useColorModeValue(<TbMoonFilled />, <TbSunHigh />);

	return (
		<Flex justifyContent="space-between" p={3} position="sticky" top={0} left={0} right={0} zIndex="999" bg={color}>
			<Link href="#" fontSize="xl" letterSpacing="wide">
				<Text as="b">Caetano Almeida</Text>
			</Link>
			<Breadcrumb separator="" spacing="30px" fontSize="lg">
				<BreadcrumbItem>
					<BreadcrumbLink href="#">Sobre</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbItem>
					<BreadcrumbLink href="#">Projetos</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbItem>
					<BreadcrumbLink href="#">Contato</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>
			<Flex>
				<Menu>
					<Tooltip label="Idioma" closeDelay={250} fontSize="sm">
						<MenuButton as={IconButton} aria-label="Languages" icon={<TbLanguage />} variant="ghost" />
					</Tooltip>
					<MenuList>
						<MenuItem>
							<Img src="utils\images\flags\brazil.png" mr={2} /> Português
						</MenuItem>
						<MenuItem>
							<Img src="utils\images\flags\united-kingdom.png" mr={2} /> English
						</MenuItem>
					</MenuList>
				</Menu>
				<Tooltip label="Dark Mode" closeDelay={250} fontSize="sm">
					<IconButton aria-label="dark-mode" variant="ghost" icon={darkModeIcon} onClick={toggleColorMode} />
				</Tooltip>
			</Flex>
		</Flex>
	);
};

export default Header;
