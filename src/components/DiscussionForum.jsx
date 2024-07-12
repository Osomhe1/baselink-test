import { Box, Heading, Text, VStack, Input, Button } from '@chakra-ui/react'
import { useState } from 'react'

const DiscussionForum = () => {
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState('')

  const handlePost = () => {
    setPosts([...posts, newPost])
    setNewPost('')
  }

  return (
    <Box py='10'>
      <Heading mb='6' textAlign='center'>
        Discussion Forum
      </Heading>
      <VStack spacing='4'>
        {posts.map((post, index) => (
          <Box key={index} borderWidth='1px' borderRadius='lg' p='4' w='full'>
            <Text>{post}</Text>
          </Box>
        ))}
        <Input
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder='Add a new discussion post'
        />
        <Button onClick={handlePost} colorScheme='teal'>
          Post
        </Button>
      </VStack>
    </Box>
  )
}

export default DiscussionForum
