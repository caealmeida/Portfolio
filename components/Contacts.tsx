import { Flex, Text, Icon, Link } from '@chakra-ui/react';
import { TbBrandLinkedin, TbBrandGithub, TbMail } from 'react-icons/tb';
import theme from '../public/Theme';
import Contact from './Contact';

const Contacts = () => {
  return (
    <Flex id='contacts' alignItems='center' justifyContent='center' gap='50px' mt={'32'}>
      <Flex maxW='50%' direction='column'>
        <Text fontSize='3em'>Alguma dúvida?</Text>
        <Text fontSize='3em'>Vamos entrar em contato!</Text>
        <Link href='mailto:cae.almeida1@gmail.com' _hover={{ color: theme.colors.detail }} w='fit-content' isExternal>
          <Flex alignItems='center' gap='5px'>
            <Icon as={TbMail} boxSize={6} />
            <Text fontSize='1.5em'>cae.almeida1@gmail.com</Text>
          </Flex>
        </Link>
      </Flex>
      <Flex>
        <Contact name={'LinkedIn'} link={'https://www.linkedin.com/in/caealmeida/'} logo={TbBrandLinkedin} />
        <Contact name={'GitHub'} link={'https://github.com/caealmeida'} logo={TbBrandGithub} />
      </Flex>
    </Flex>
  );
};

export default Contacts;
