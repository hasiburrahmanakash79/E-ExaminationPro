// import CommentField from "./CommentField";

import { allPostComment } from "../../Hooks/useForum/useForum";
import CommentField from "./CommentField";
import Comments from "./Comments";


const ArticleField = () => {
    const [allCommentPosts, refetch] = allPostComment();
    console.log(allCommentPosts);
    return (
        <div>
            {/* <div className="mt-8 border rounded-md shadow-md p-5 mb-6"> */}
                {
                    allCommentPosts?.map(postComments => <Comments
                        key={postComments?._id}
                        postComments={postComments}
                    />)
                }
            {/* </div> */}
            <div>
                <CommentField />
            </div>
        </div>
    );
};

export default ArticleField;


/* 

*/