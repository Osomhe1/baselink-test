import { SimpleGrid, Box, Heading, Text, Image } from '@chakra-ui/react'

const courses = [
  {
    title: 'Graphic Design',
    image: `https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D`,
  },
  {
    title: 'Photography',
    image: `https://cdn.pixabay.com/photo/2023/05/29/00/23/great-spotted-woodpecker-8024806_640.jpg`,
  },
  {
    title: 'UI/UX Design',
    image: `https://cdn.pixabay.com/photo/2015/05/31/10/56/chalk-791054_640.jpg`,
  },
  {
    title: 'Programming',
    image: `https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_640.jpg`,
  },
  {
    title: 'Mobile App Development',
    image: `https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_640.jpg`,
  },
  {
    title: 'Web App Development',
    image: `https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_640.jpg`,
  },
]

const CourseLibrary = () => {
  return (
    <Box py='10'>
      <Heading mb='6' textAlign='center'>
        Course Library
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing='8'>
        {courses.map((course, index) => (
          <Box
            key={index}
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'
            className='hover:bg-gray-200 cursor-pointer transition-all'
          >
            <Box height='200px' overflow='hidden'>
              <Image
                src={course.image}
                alt={course.title}
                objectFit='cover'
                width='100%'
                height='100%'
              />
            </Box>
            <Box p='6'>
              <Heading fontSize='xl'>{course.title}</Heading>
              <Text mt='4'>Learn more about {course.title}.</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default CourseLibrary
