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
} from '@chakra-ui/react';
import { TbLanguageHiragana, TbMoonFilled } from 'react-icons/tb';

const Header = () => {
	const { toggleColorMode } = useColorMode();

	return (
		<div>
			<Flex justifyContent="space-between" p={6}>
				<Text fontSize="xl" letterSpacing="wide">
					caealmeida
				</Text>
				<Breadcrumb separator="" spacing="30px">
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
						<Tooltip label="Idioma" fontSize="sm">
							<MenuButton as={IconButton} aria-label="Languages" icon={<TbLanguageHiragana />} variant="ghost" />
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
					<Tooltip label="Dark Mode" fontSize="sm">
						<IconButton aria-label="dark-mode" variant="ghost" icon={<TbMoonFilled />} onClick={toggleColorMode} />
					</Tooltip>
				</Flex>
			</Flex>
		</div>
	);
};

export default Header;

// <a href="https://www.flaticon.com/free-icons/brazil" title="brazil icons">Brazil icons created by Freepik - Flaticon</a>
