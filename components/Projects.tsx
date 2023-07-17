import { Flex, Heading, Divider } from '@chakra-ui/react';
import Project from './Project';

const Projects = () => {
  return (
    <Flex id='projects' direction='column' justifyContent='center' maxW='85%' m='auto' mt={'32'} mb={'32'}>
      <Heading as='h3' size='xl' py={2}>
        Projetos:
      </Heading>
      <Divider />
      <Flex direction='column'>
        <Project name={'Portfolio'} link={'https://github.com/caealmeida/Portfolio'} />
        <Project name={'E-Commerce'} link={'https://github.com/caealmeida/shopping-cart'} />
        {/* <Project />
      <Project /> */}
      </Flex>
    </Flex>
  );
};

export default Projects;
