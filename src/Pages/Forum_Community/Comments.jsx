import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { BiDotsVertical } from "react-icons/bi";
import { comment } from "postcss";
import CommentField from "./CommentField";
import axios from "axios";
import Likes from "./LIkes";
import ReplyField from "./ReplyField";
import ShowComment from "./ShowComment";
// import { handleDelete } from "../../Hooks/useForum/useHandlerDelete";

const Comments = ({ postComments, refetch }) => {
    console.log(postComments);
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
        fetch(`https://e-exam-pro-server.vercel.app/forumPost/${postComments?._id}`, {
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
        axios.delete(`https://e-exam-pro-server.vercel.app/forumPost/${postComments._id}`)
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
        <div className="mt-8 border relative rounded-md shadow-md p-5 mb-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-10 h-10 rounded-full">
                            <img src={postComments?.userImage} alt="User Avatar" />
                        </div>
                    </div>
                    <p className="pl-4 text-slate-400 text-lg font-medium">
                        {postComments?.userName}
                    </p>
                </div>
                <div>
                    <span className="text-slate-300 md:pr-8 md:inline-block hidden">
                        {/* {postComments?.timeDate} */}
                        {new Date(postComments.timeDate).toLocaleString()}
                    </span>
                    <button
                        className="font-bold text-lg"
                        onClick={() => setShowContextMenu(!showContextMenu)}
                    >
                        <BiDotsVertical />
                    </button>
                </div>
            </div>
            {editMode ? (
                <div className="mt-2">
                    <textarea
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        rows={4}
                        className="w-full p-2 border bg-transparent  rounded-md"
                    />
                    <div className=" flex items-center gap-4">
                        <button
                            onClick={handleSaveEdit}
                            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => setEditMode(false)}
                            className="mt-2 bg-red-400 text-white py-2 px-4 rounded-full"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            ) : (
                <p className="pt-2 text-left pl-3">{postComments?.article}</p>
            )
            }
            {
                showContextMenu && (
                    <div className="absolute top-6 right-10 bg-primary p-3 w-28 rounded-md shadow-md">
                        <ul>
                            <li onClick={() => handleContextMenuClick("Edit")} className="cursor-pointer">
                                Edit
                            </li>
                            <li
                                onClick={() => handleDelete(postComments)}
                                className="cursor-pointer">
                                Delete
                            </li>
                        </ul>
                    </div>
                )
            }
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
                                {/* Like component */}
                                <Likes />
                                <button className="text-sm" onClick={() => {
                                    setCommentPostText(comment)
                                    setReplyHide(!replyHide)
                                }}>
                                    <span className="text-sm text-slate-300">{postComments?.replies?.length}</span> comment
                                </button>
                                <button className="text-sm">
                                    <span className="text-xs text-slate-300"></span> share
                                </button>
                            </>
                    }
                    {showContextMenu && (
                        <div className="absolute top-6 right-10 bg-[#25176A] p-3 w-28 rounded-md shadow-md">
                            <ul>
                                <li onClick={() => handleContextMenuClick("Edit")} className="cursor-pointer">
                                    Edit
                                </li>
                                <li
                                    onClick={() => handleDelete(postComments)}
                                    className="cursor-pointer">
                                    Delete
                                </li>
                            </ul>
                        </div>
                    )}


                </div>
                <div className="text-center">
                    <span className="text-slate-400 text-xs">{postComments?.replies?.length + 100}</span>
                    <p className="text-slate-500 text-sm">Views</p>
                </div>
            </div>
            <div>
                <ShowComment
                    key={postComments?._id}
                    refetch={refetch}
                    postComments={postComments}
                    replyHide={replyHide} />
            </div>
        </div >
    );
};

//           <button className='text-sm'>
//             <span className='text-xs text-slate-300'></span> share
//           </button>
//         </div>
//         <div className='text-center'>
//           <span className='text-xs text-slate-400 '>244</span>
//           <p className='text-sm text-slate-500'>View</p>
//         </div>
//       </div>
//       <div></div>
//     </div>
//   )
// }

export default Comments
