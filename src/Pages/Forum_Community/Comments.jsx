import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { BiDotsVertical } from "react-icons/bi";
import { comment } from "postcss";
import CommentField from "./CommentField";

const Comments = ({ postComments }) => {
    console.log(postComments);
    const [editMode, setEditMode] = useState(false);
    const [commentText, setCommentText] = useState(postComments?.article);
    const [showContextMenu, setShowContextMenu] = useState(false);
    const [commentPostText, setCommentPostText] = useState(false)

    useEffect(() => {
        setCommentText(postComments?.article); // Set initial comment text
    }, [postComments]);


    const handlePostCommentText = () => {
        setCommentText(true)
    }

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleSaveEdit = () => {
        // Save the edited comment and exit edit mode
        setEditMode(false);

        // Make a network request to save the edited comment (replace with your actual endpoint)
        fetch(`http://localhost:4000/forumPost/${postComments?._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ article: commentText }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                    console.log(data);
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your comment has been edited',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                } else {
                    // Swal.fire({
                    //     position: 'top-center',
                    //     icon: 'error',
                    //     title: 'edit the comment',
                    //     showConfirmButton: false,
                    //     timer: 1500,
                    // });
                }
            })
            .catch((error) => {
                console.error(error);
                // Handle network error
                // Swal.fire({
                //     position: 'top-center',
                //     icon: 'error',
                //     title: 'Network error occurred',
                //     showConfirmButton: false,
                //     timer: 1500,
                // });
            });
    };

    const handleEditField = () => {
        setEditMode(true);
    };

    const handleContextMenuClick = (option) => {
        if (option === "Edit") {
            handleEditField();
        } else if (option === "Public") {
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

    return (
        <div className="mt-8 border relative rounded-md shadow-md p-5 mb-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-10 h-10 rounded-full">
                            <img src={postComments?.userImage} alt="User Avatar" />
                        </div>
                    </div>
                    <p className="leading-1 pl-4 text-slate-400 text-lg font-medium">
                        {postComments?.userName}
                    </p>
                </div>
                <div>
                    <span className="text-slate-400 md:pr-8">
                        {postComments?.timeDate}
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
                        className="w-full p-2 border rounded-md"
                    />
                    <button
                        onClick={handleSaveEdit}
                        className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
                    >
                        Save
                    </button>
                </div>
            ) : (
                <p className="pt-2 text-left pl-3">{postComments?.article}</p>
            )}
            {showContextMenu && (
                <div className="absolute top-6 right-10 bg-[#25176A] p-3 w-28 rounded-md shadow-md">
                    <ul>
                        <li onClick={() => handleContextMenuClick("Edit")} className="cursor-pointer">
                            Edit
                        </li>
                        <li onClick={() => handleContextMenuClick("Public")} className="cursor-pointer">
                            Public
                        </li>
                    </ul>
                </div>
            )}
            <div className="flex items-center justify-between mt-5">
                <div className="flex items-center gap-5">
                    <button className="text-sm">
                        <span className="text-xs text-slate-300">11</span> like
                    </button>
                    <button className="text-sm" onClick={() => setCommentPostText(!comment)}>
                        <span className="text-xs text-slate-300">5</span> comment
                    </button>
                    {
                        commentPostText ? <span>
                            <CommentField />
                        </span>
                            : <span>

                            </span>
                    }
                    {
                        showContextMenu && (
                            <div className="absolute top-6 right-10 bg-[#25176A] p-3 w-28 rounded-md shadow-md">
                                <ul>
                                    <li onClick={() => handleContextMenuClick("Edit")} className="cursor-pointer">
                                        Edit
                                    </li>
                                    <li onClick={() => handleContextMenuClick("Public")} className="cursor-pointer">
                                        Public
                                    </li>
                                </ul>
                            </div>
                        )}

                    <button className="text-sm">
                        <span className="text-xs text-slate-300"></span> share
                    </button>
                </div>
                <div className="text-center">
                    <span className="text-slate-400 text-xs ">244</span>
                    <p className="text-slate-500 text-sm">View</p>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Comments;
