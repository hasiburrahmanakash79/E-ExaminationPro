import { BiDotsVertical } from "react-icons/bi";

const GetReplyField = ({ reply }) => {
    console.log(reply);
    return (
        <div className="p-3 my-2 shadow-xl rounded-lg">
            <div className="">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="avatar">
                            <div className="w-8 h-8 rounded-full">
                                <img src={reply?.author?.userImage} alt="User Avatar" />
                            </div>
                        </div>
                        <p className="leading-1 pl-3 text-slate-400 text-lg font-medium">
                            {reply?.author?.userName}
                        </p>
                    </div>
                    <div>
                        <span className="text-slate-400 md:pr-8">
                            {/* {postComments?.timeDate} */}
                            {new Date(reply.author.timeDate).toLocaleString()}
                        </span>
                        <button
                            className="font-bold text-lg"
                            onClick={() => setShowContextMenu(!showContextMenu)}
                        >
                            <BiDotsVertical />
                        </button>
                    </div>
                </div>
                <p className="text-sm pl-2 py-2 ">{reply.text}</p>
                {/* You can also recursively render nested replies here */}
                {reply.replies && reply.replies.length > 0 && (
                    <div style={{ marginLeft: 20 }}>
                        {reply.replies.map((nestedReply, nestedIndex) => (
                            <div key={nestedIndex}>
                                <p>{nestedReply.text}</p>
                                <p>Author: {nestedReply.author.userName}</p>
                                <p>Date: {new Date(nestedReply.author.timeDate).toLocaleString()}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default GetReplyField;