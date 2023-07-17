import { Flex, Box, Text, Link } from '@chakra-ui/react';
import { TbExternalLink } from 'react-icons/tb';
import theme from '../public/Theme';

type Project = {
  name: string;
  link: string;
};

const Project = ({ name, link }: Project) => {
  return (
    <Link href={link} _hover={{ bg: 'RGBA(204, 0, 15, 0.8)', color: theme.colors.light }} isExternal>
      <Flex alignItems='center' justifyContent='space-between'>
        <Box p={2}>
          <Text fontSize='1.5em'>{name}</Text>
        </Box>
        <Box p={2}>
          <Flex alignItems='center'>
            <Text mr={1} fontSize='1.2em'>
              Link
            </Text>
            <TbExternalLink />
          </Flex>
        </Box>
      </Flex>
    </Link>
  );
};

export default Project;
