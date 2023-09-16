import { allPostComment } from "../../Hooks/useForum/useForum";
import Comments from "./Comments";

const ArticleField = () => {
    const [allCommentPosts, refetch] = allPostComment();
    console.log(allCommentPosts);
    return (
        <div>
            {
                allCommentPosts?.map(postComments => <Comments
                    key={postComments?._id}
                    refetch={refetch}
                    postComments={postComments}
                />)
            }
        </div>
    );
};

export default ArticleField;
