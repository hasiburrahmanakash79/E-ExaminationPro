import Likes from "./LIkes";

const LikeCommentShare = ({ postComments, replyHide, comment, setReplyHide, setCommentPostText }) => {
    return (
        <>
            <Likes />
            <button className="text-sm" onClick={() => {
                setCommentPostText(comment)
                setReplyHide(!replyHide)
            }}>
                <span className="text-sm text-slate-300">{postComments?.replies?.length}</span> comment
            </button>
        </>
    );
};

export default LikeCommentShare;