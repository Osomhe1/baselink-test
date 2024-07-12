import { Box, Heading, AspectRatio, Text } from '@chakra-ui/react'

const VideoLecture = ({ title, description, videoUrl }) => {
  return (
    <Box borderWidth='1px' borderRadius='lg' overflow='hidden' mb='8'>
      <Box p='6'>
        <Heading fontSize='xl'>{title}</Heading>
        <Text mt='4'>{description}</Text>
        <AspectRatio ratio={16 / 9} mt='4'>
          <iframe src={videoUrl} allowFullScreen />
        </AspectRatio>
      </Box>
    </Box>
  )
}

export default VideoLecture
