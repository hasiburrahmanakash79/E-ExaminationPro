import { useState } from "react";
import { allPostComment } from "../../Hooks/useForum/useForum";
import GetReplyField from "./GetReplyField";

const ShowComment = ({ postComments, replyHide }) => {
    console.log("serial number : 05   ", postComments?.replies);
    return (
        <div className={replyHide ? "ml-6 shadow-2xl w-3/5 h-48 overflow-y-auto rounded-md" : "ml-6 shadow-2xl w-3/5 h-96 overflow-y-auto rounded-md hidden"}>
            {
                postComments?.replies?.map((reply, index) => <GetReplyField
                    key={index}
                    reply={reply}
                />)
            }
        </div>
    );
};

export default ShowComment;
