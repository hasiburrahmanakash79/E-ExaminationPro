import { useState } from "react";
import Swal from "sweetalert2";

const Comments = ({ postComments }) => {
    const [editMode, setEditMode] = useState(false);
    console.log(postComments);

    const handleEdit = () => {
        fetch("http://localhost:5000/forumPost/:", {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="mt-8 border rounded-md shadow-md p-5 mb-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-10 h-10 rounded-full">
                            <img src={postComments?.userImage} />
                        </div>
                    </div>
                    <p className="leading-1 pl-4 text-slate-400 text-lg font-medium">{postComments?.userName}</p>
                </div>
                <span className="text-slate-400">{postComments?.timeDate}</span>
            </div>
            <p className="pt-2 text-left pl-3">{postComments?.article}</p>
            <div className="flex items-center justify-between mt-5">
                <div className="flex items-center gap-5">
                    <p className="cursor-pointer text-sm text-slate-600"><span className="text-sm text-red-500">12+ </span> Like</p>
                    <p className="cursor-pointer text-sm text-slate-600"><span className="text-sm text-yellow-500">10+ </span> Cmnt</p>
                    <p className="cursor-pointer text-sm text-slate-600"><span className="text-sm text-sky-600">2</span> Share</p>
                </div>
                <div className="text-center">
                    <span className="text-slate-400 text-xs ">244</span>
                    <p className="text-slate-500 text-sm">View</p>
                </div>
            </div>

            <div>
                {/* {/* <CommentField /> } */}
            </div>
        </div>
    );
};

export default Comments;