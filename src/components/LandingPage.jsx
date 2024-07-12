import { Box, Flex, Heading, Text, Button, Image } from '@chakra-ui/react'

const LandingPage = () => {
  return (
    <Box textAlign='center' py='10'>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align='center'
        justify='center'
      >
        <Box>
          <Heading>Welcome to Baselinks Academy</Heading>
          <Text mt='4'>
            Learn new skills and advance your career with our wide range of
            courses.
          </Text>
          <Button mt='8' colorScheme='teal' size='lg'>
            Get Started
          </Button>
        </Box>
        <Image
          src='https://baselinksng.com/baselinks-business-consult.png'
          alt='Learning'
          mt={{ base: '4', md: '0' }}
          w={{ base: '100px', md: '200px' }}
        />
      </Flex>
    </Box>
  )
}

export default LandingPage
