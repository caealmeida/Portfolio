import { Flex, Text, Avatar, Button, Box } from '@chakra-ui/react';
import { TbDownload } from 'react-icons/tb';

const About = () => {
  const cvDownload = () => {
    const fileUrl = './cv/Currículo.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Currículo.pdf';
    link.click();
  };

  return (
    <Flex id='about' direction='column' p={2} my={200} gap='25px'>
      <Flex gap='50px'>
        <Avatar size='xl' m={3} name='Caetano Almeida' src='./images/avatars/perfil.jpeg' />
        <Text fontSize='1.8em' lineHeight={'tall'}>
          Com experiência de 3 anos em programação, sou um solucionador de problemas e aprendo muito rápido. Tenho a
          ambição de trabalhar em uma grande empresa, para que possa aprimorar meus conhecimentos e assim somar para
          construir um ótimo produto e um ambiente acolhedor.
        </Text>
      </Flex>
      <Flex direction='column' alignItems='center' w='100%'>
        <Button w='15%' m='auto' rightIcon={<TbDownload />} aria-label={'cv download'} onClick={cvDownload}>
          Curriculo
        </Button>
      </Flex>
    </Flex>
  );
};

export default About;
