import {
  Box,
  Heading,
  RadioGroup,
  Stack,
  Radio,
  Button,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'

const Quiz = ({ question, options, correctAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const toast = useToast()

  const handleSubmit = () => {
    if (selectedAnswer === correctAnswer) {
      toast({
        title: 'Success',
        description: 'Correct!',
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
    } else {
      toast({
        title: 'Failed',
        description: 'Incorrect. Try again.',
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
    }
  }

  return (
    <Box borderWidth='1px' borderRadius='lg' overflow='hidden' p='6' mb='8'>
      <Heading fontSize='xl'>{question}</Heading>
      <RadioGroup onChange={setSelectedAnswer} value={selectedAnswer} mt='4'>
        <Stack direction='column'>
          {options.map((option, index) => (
            <Radio key={index} value={option}>
              {option}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
      <Button mt='4' colorScheme='teal' onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  )
}

export default Quiz
