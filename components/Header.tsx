import {
  Flex,
  Text,
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
import theme from '../public/Theme';

const Header = () => {
  const { toggleColorMode } = useColorMode();
  const darkModeIcon: ReactElement = useColorModeValue(<TbMoonFilled />, <TbSunHigh />);
  const color: string = useColorModeValue(theme.colors.light, theme.colors.dark);

  return (
    <Flex justifyContent='space-between' p={3} position='sticky' top={0} left={0} right={0} zIndex='999' bg={color}>
      <Link href='#' fontSize='xl' letterSpacing='wide'>
        <Text letterSpacing='wide' fontSize='larger'>
          Caetano Almeida
        </Text>
      </Link>
      <Flex>
        <Link href='#about'>
          <Text>Sobre</Text>
        </Link>
        <Link href='#contacts' mx={16}>
          <Text>Contato</Text>
        </Link>
        <Link href='#projects'>
          <Text>Projetos</Text>
        </Link>
      </Flex>
      <Flex>
        {/* <Menu>
          <Tooltip label='Idioma' closeDelay={250} fontSize='sm'>
            <MenuButton as={IconButton} aria-label='Languages' icon={<TbLanguage />} variant='ghost' />
          </Tooltip>
          <MenuList>
            <MenuItem>
              <Img src='./images/flags/brazil.png' mr={2} /> Português
            </MenuItem>
            <MenuItem>
              <Img src='./images/flags/united-kingdom.png' mr={2} /> English
            </MenuItem>
          </MenuList>
        </Menu> */}
        <Tooltip label='Dark Mode' closeDelay={250} fontSize='sm'>
          <IconButton aria-label='dark-mode' variant='ghost' icon={darkModeIcon} onClick={toggleColorMode} />
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default Header;
