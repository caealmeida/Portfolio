import { Box, Flex, Text } from '@chakra-ui/react';
import { TbBrandLinkedin, TbBrandGithub } from 'react-icons/tb';
import Contact from './Contact';

const Contacts = () => {
  return (
    <Flex id='contacts' alignItems='center' justifyContent='center' gap='50px' mt={'32'}>
      <Flex maxW='50%' direction='column'>
        <Text fontSize='3em'>Alguma dúvida?</Text>
        <Text fontSize='3em'>Vamos entrar em contato!</Text>
      </Flex>
      <Flex>
        <Contact name={'LinkedIn'} link={'https://www.linkedin.com/in/caealmeida/'} logo={TbBrandLinkedin} />
        <Contact name={'GitHub'} link={'https://github.com/caealmeida'} logo={TbBrandGithub} />
      </Flex>
    </Flex>
  );
};

export default Contacts;
