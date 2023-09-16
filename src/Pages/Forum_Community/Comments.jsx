import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { comment } from "postcss";
import axios from "axios";
import ReplyField from "./ReplyField";
import ShowComment from "./ShowComment";
import LikeCommentShare from "./LikeCommentShare";
import Views from "./Views";
import SaveCancel from "./SaveCancel";
import EditDeleteShow from "./EditDeleteShow";
import UserCommentInfo from "./UserCommentInfo";
import GetReplyField from "./GetReplyField";

const Comments = ({ postComments, refetch }) => {
    const [editMode, setEditMode] = useState(false);
    const [commentText, setCommentText] = useState(postComments?.article);
    const [showContextMenu, setShowContextMenu] = useState(false);
    const [commentPostText, setCommentPostText] = useState(false)
    const [replyHide, setReplyHide] = useState(false)

    useEffect(() => {
        setCommentText(postComments?.article);
    }, [postComments]);

    const handleSaveEdit = () => {
        setEditMode(false);
        fetch(`http://localhost:4000/forumPost/${postComments?._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ article: commentText }),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    console.log(data);
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your comment has been edited',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                } else {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'error',
                        title: 'Edit the comment',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
            .catch((error) => {
                console.error(error);
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: 'Network error occurred',
                    showConfirmButton: false,
                    timer: 1500,
                });
            });
    };
    const handleEditField = () => {
        setEditMode(true);
    };

    const handleContextMenuClick = (option) => {
        if (option === "Edit") {
            handleEditField();
        } else if (option === "Delete") {
            Swal.fire({
                position: 'top-center',
                icon: 'info',
                title: 'This is a public comment',
                showConfirmButton: false,
                timer: 1500,
            });
        }
        setShowContextMenu(false);
    };
    const handleDelete = (postComments) => {
        axios.delete(`http://localhost:4000/forumPost/${postComments._id}`)
            .then(data => {
                console.log(data);
                if (data.data.deletedCount > 0) {
                    console.log("Delete function", data.data);
                    refetch();
                    Swal.fire(
                        'Delete!',
                        'Your comment has been delete.',
                        'success'
                    )
                }
            })
    }

    return (
        <>
            <div className="mt-8 border relative rounded-md shadow-md p-5 mb-6">
                <div className="flex items-center justify-between">
                    <UserCommentInfo
                        postComments={postComments}
                        setShowContextMenu={setShowContextMenu}
                        showContextMenu={showContextMenu}
                    />
                </div>
                {editMode ?
                    (
                        <SaveCancel
                            commentText={commentText}
                            setCommentText={setCommentText}
                            handleSaveEdit={handleSaveEdit}
                            setEditMode={setEditMode}
                        ></SaveCancel>
                    )
                    :
                    (
                        <p className="pt-2 text-left pl-3">{postComments?.article}</p>
                    )
                }
                <EditDeleteShow
                    showContextMenu={showContextMenu}
                    handleContextMenuClick={handleContextMenuClick}
                    handleDelete={handleDelete}
                    postComments={postComments}
                ></EditDeleteShow>
                <div className="flex items-center justify-between mt-5">
                    <div className="flex items-center gap-5">
                        {/* reply and cancel component */}
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
                        <EditDeleteShow />
                    </div>
                    <Views postComments={postComments} />
                </div>
                <div>
                    <ShowComment
                        key={postComments?._id}
                        refetch={refetch}
                        postComments={postComments}
                        replyHide={replyHide} />
                </div>
            </div >
            <div className="hidden">
                {/* comment ar nested comment ar jonno niyacelam  */}
                <GetReplyField
                    setCommentPostText={setCommentPostText}
                    comment={comment}
                    setReplyHide={setReplyHide}
                    replyHide={replyHide}
                    postComments={postComments}
                    postId={postComments?._id}
                    refetch={refetch}
                    commentPostText={commentPostText}
                    /* edit and delete */
                    showContextMenu={showContextMenu}
                    handleContextMenuClick={handleContextMenuClick}
                    handleDelete={handleDelete}
                    /* Edit and delete btn */
                    setShowContextMenu={setShowContextMenu}
                >

                </GetReplyField>
            </div>
        </>
    );
};

export default Comments;