import { Flex, Text, Avatar, Button } from '@chakra-ui/react';
import { TbDownload } from 'react-icons/tb';
import theme from '../public/Theme';

const About = () => {
  const cvDownload = () => {
    const fileUrl = './cv/Currículo.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Currículo.pdf';
    link.click();
  };

  return (
    <Flex id='about' direction='column' justifyContent='center' p={2} mt={60} gap='25px'>
      <Flex gap='50px' direction='column'>
        <Flex gap='10px'>
          <Avatar
            size='xl'
            name='Caetano Almeida'
            src='./images/avatars/perfil.jpeg'
            p={1}
            rounded='full'
            bg={theme.colors.detail}
          />
          <Text ml={5} fontSize='5em'>
            Caetano Almeida
          </Text>
        </Flex>
        <Text fontSize='1.8em'>
          Com experiência de 3 anos em programação, sou um solucionador de problemas e aprendo muito rápido. Tenho a
          ambição de trabalhar em uma grande empresa, para que possa aprimorar meus conhecimentos e assim somar para
          construir um ótimo produto e um ambiente acolhedor.
        </Text>
      </Flex>
      <Flex direction='column' alignItems='center' mt={16}>
        <Button
          w='15%'
          m='auto'
          rightIcon={<TbDownload />}
          aria-label={'cv download'}
          onClick={cvDownload}
          border='1px'
          _hover={{ bg: theme.colors.detail, color: theme.colors.light }}
          _active={{
            bg: 'red.600',
            transform: 'scale(0.98)',
          }}
        >
          Curriculo
        </Button>
      </Flex>
    </Flex>
  );
};

export default About;
