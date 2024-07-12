import { Box, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box as='footer' p='4' bg='blue.500' color='white' textAlign='center'>
      <Text>
        &copy; {new Date().getFullYear()} Baselinks Academy. All rights
        reserved.
      </Text>
    </Box>
  )
}

export default Footer
