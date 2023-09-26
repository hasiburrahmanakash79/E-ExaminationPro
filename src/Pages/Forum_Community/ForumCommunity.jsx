import { Helmet } from 'react-helmet-async'
import ArticleField from './ArticleField'
import PostInput from './PostInput'

const ForumCommunity = () => {
  return (
    <div className='max-w-5xl px-4 mx-auto xl:px-20 md:px-10 sm:px-3'>
      <Helmet>
        <title>Forum | E-ExamPro</title>
      </Helmet>
      <div className='pt-8 pb-16'>
        <PostInput />
        <ArticleField />
      </div>
    </div>
  )
}

export default ForumCommunity
