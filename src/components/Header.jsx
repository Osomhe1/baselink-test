import { Box, Flex, Heading, Spacer, Button, Image } from '@chakra-ui/react'

const Header = () => {
  return (
    <Flex as='header' p='4' bg='blue.500' color='white' align='center'>
      <Image
        src='https://baselinksng.com/baselinks-business-consult.png'
        alt='Learning'
        mt={{ base: '4', md: '0' }}
        w={{ base: '50px', md: '40px' }}
      />
      <Spacer />
      <Button colorScheme='teal' variant='outline'>
        Login
      </Button>
      <Button ml='4' colorScheme='teal'>
        Sign Up
      </Button>
    </Flex>
  )
}

export default Header
