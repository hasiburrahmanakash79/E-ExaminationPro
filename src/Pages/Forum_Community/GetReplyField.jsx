import { BiDotsVertical } from "react-icons/bi";
import TimeAgo from "timeago-react";
import EditDeleteShow from "./EditDeleteShow";

const GetReplyField = ({
    reply,
    setCommentPostText,
    comment,
    setReplyHide,
    replyHide,
    postComments,
    refetch,
    commentPostText,
    showContextMenu,
    setShowContextMenu,
    handleContextMenuClick,
    handleDelete,
}) => {
    return (
        <div className="p-3 my-5 shadow-xl rounded-lg">
            <div className="">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="avatar">
                            <div className="w-8 h-8 rounded-full">
                                <img src={reply?.author?.userImage} alt="User Avatar" />
                            </div>
                        </div>
                        <div className="pl-2">
                            <p className="leading-none text-slate-300 md:text-lg text-base font-medium">
                                {reply?.author?.userName}
                            </p>
                            <div className="md:hidden block text-xs text-slate-400">
                                <TimeAgo datetime={new Date(reply?.author?.timeDate).toLocaleString()}
                                    locale='GMT+6' />
                            </div>
                        </div>
                    </div>
                    <div className="md:flex items-center gap-2 hidden">
                        <TimeAgo datetime={new Date(reply?.author?.timeDate).toLocaleString()}
                            locale='GMT+6' />
                        <button
                            className="font-bold text-lg"
                            onClick={() => setShowContextMenu(!showContextMenu)}
                        >
                            <BiDotsVertical />
                        </button>
                        <EditDeleteShow
                            showContextMenu={showContextMenu}
                            handleContextMenuClick={handleContextMenuClick}
                            handleDelete={handleDelete}
                            postComments={postComments}
                        />
                    </div>
                    <button
                        className="font-bold text-lg md:hidden"
                        onClick={() => setShowContextMenu(!showContextMenu)}
                    >
                        <BiDotsVertical />
                    </button>
                </div>
                <p className="text-sm pl-2 py-2 ">{reply?.text}</p>
                {/* You can also recursively render nested replies here */}
                {reply?.replies && reply?.replies?.length > 0 && (
                    <div style={{ marginLeft: 20 }}>
                        {reply.replies.map((nestedReply, nestedIndex) => (
                            <div key={nestedIndex}>
                                <p>{nestedReply?.text}</p>
                                <p>Author: {nestedReply?.author?.userName}</p>
                                <p>Date: {new Date(nestedReply?.author?.timeDate).toLocaleString()}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {/* <div className="flex items-center gap-4">
                {
                    commentPostText ?
                        < ReplyField
                            setCommentPostText={setCommentPostText}
                            comment={comment}
                            postId={postComments?._id}
                            refetch={refetch}
                            replyHide={replyHide}
                            setReplyHide={setReplyHide}
                        />
                        :
                        <>
                            <LikeCommentShare
                                setCommentPostText={setCommentPostText}
                                comment={comment}
                                setReplyHide={setReplyHide}
                                replyHide={replyHide}
                                postComments={postComments}
                            />

                            <button className="text-sm">
                                <span className="text-xs text-slate-300"></span> share
                            </button>
                        </>
                }
            </div> */}

        </div>
    );
};

export default GetReplyField;