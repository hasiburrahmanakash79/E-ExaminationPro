import { BiDotsVertical } from "react-icons/bi";
import TimeAgo from "timeago-react";

const UserCommentInfo = ({ postComments, setShowContextMenu, showContextMenu }) => {
    return (
        <>
            <div className="flex items-center">
                <div className="avatar">
                    <div className="w-10 h-10 rounded-full">
                        <img src={postComments?.userImage} alt="User Avatar" />
                    </div>
                </div>
                <div className=" pl-4">
                    <p className="leading-none text-slate-200 text-lg font-medium">
                        {postComments?.userName}
                    </p>
                    <div className="md:hidden block text-sm text-slate-400">
                        <TimeAgo datetime={new Date(postComments.timeDate).toLocaleString()}
                            locale='GMT+6' />
                    </div>
                </div>
            </div>
            <div className="md:flex items-center gap-2 hidden">
                <TimeAgo datetime={new Date(postComments.timeDate).toLocaleString()}
                    locale='GMT+6' />
                <button
                    className="font-bold text-lg"
                    onClick={() => setShowContextMenu(!showContextMenu)}
                >
                    <BiDotsVertical />
                </button>
            </div>
            <button
                className="font-bold text-lg md:hidden"
                onClick={() => setShowContextMenu(!showContextMenu)}
            >
                <BiDotsVertical />
            </button>
        </>
    );
};

export default UserCommentInfo;