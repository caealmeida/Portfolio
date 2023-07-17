import { Flex, Box, Icon, Text, Link } from '@chakra-ui/react';
import theme from '../public/Theme';
import { IconType } from 'react-icons';

type Contact = {
  name: string;
  link: string;
  logo: IconType;
};

const Contact = ({ name, link, logo }: Contact) => {
  return (
    <Link href={link} justifyContent='center' isExternal>
      <Flex
        direction='column'
        boxShadow='base'
        p='10'
        rounded='md'
        m={4}
        _hover={{ bg: 'RGBA(204, 0, 15, 0.8)', color: theme.colors.light, textDecoration: 'none' }}
      >
        <Icon as={logo} boxSize={20} />
      </Flex>
    </Link>
  );
};

export default Contact;
