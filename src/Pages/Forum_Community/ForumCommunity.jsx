import { Helmet } from 'react-helmet-async'
const ArticleField = lazy(() => import('./ArticleField'))
const PostInput = lazy(() => import('./PostInput'))
import { Suspense, lazy } from 'react'
import Loading from '../../Components/Loading/Loading'

const ForumCommunity = () => {
  return (
    <div className='max-w-5xl px-4 mx-auto xl:px-20 md:px-10 sm:px-3'>
      <Helmet>
        <title>E-ExamPro | Forum</title>
      </Helmet>
      <div className='pt-8 pb-16'>
        <PostInput />
        <Suspense fallback={<Loading />}>
          <ArticleField />
        </Suspense>
      </div>
    </div>
  )
}

export default ForumCommunity
