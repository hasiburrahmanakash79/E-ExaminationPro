// import CommentField from "./CommentField";

import { allPostComment } from '../../Hooks/useForum/useForum'
import Comments from './Comments'
import ShowComment from './ShowComment'

const ArticleField = () => {
  const [allCommentPosts, refetch] = allPostComment()
  //console.log(allCommentPosts);
  return (
    <div>
      {/* <div className="mt-8 border rounded-md shadow-md p-5 mb-6"> */}
      {allCommentPosts?.map(postComments => (
        <Comments
          key={postComments?._id}
          refetch={refetch}
          postComments={postComments}
        />
      ))}
      {/* </div> */}
      {/* <div>
                {
                    allCommentPosts?.map(postComments => <ShowComment
                        key={postComments?._id}
                        refetch={refetch}
                        postComments={postComments}
                    />)
                }
            </div> */}
    </div>
  )
}

export default ArticleField

/* 

*/
