import CourseLibrary from './components/CourseLibrary'
import DiscussionForum from './components/DiscussionForum'
import LandingPage from './components/LandingPage'
import Layout from './components/Layout'
import Quiz from './components/Quiz'
import VideoLecture from './components/VideoLecture'

function App() {
  return (
    <>
      <Layout>
        <LandingPage />
        <CourseLibrary />
        <VideoLecture
          title='Introduction to Graphic Design'
          description='Learn the basics of graphic design.'
          videoUrl='https://www.youtube.com/embed/dQw4w9WgXcQ'
        />
        <Quiz
          question='What is the capital of France?'
          options={['Paris', 'London', 'Berlin', 'Madrid']}
          correctAnswer='Paris'
        />
        <DiscussionForum />
      </Layout>
    </>
  )
}

export default App
