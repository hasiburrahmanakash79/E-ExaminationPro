import { Suspense, lazy } from 'react'
import { allPostComment } from '../../Hooks/useForum/useForum'
const Comments = lazy(() => import('./Comments'))
import Loading from '../../Components/Loading/Loading'

const ArticleField = () => {
  const [allCommentPosts, refetch] = allPostComment()
  return (
    <div>
      {allCommentPosts?.map(postComments => (
        <Suspense fallback={<Loading />}>
          <Comments
            key={postComments?._id}
            refetch={refetch}
            postComments={postComments}
          />
        </Suspense>
      ))}
    </div>
  )
}

export default ArticleField
