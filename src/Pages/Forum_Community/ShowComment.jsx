import GetReplyField from "./GetReplyField";

const ShowComment = ({ postComments, replyHide }) => {
    console.log("serial number : 05   ", postComments?.replies);
    return (
        <div className={replyHide ? "scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-slate-300 scrollbar-w-2 scrollbar-track-transparent ml-6 shadow-2xl md:w-3/5 h-48 overflow-y-auto rounded-md bg-white/10"
            :
            "col-span-2  scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-slate-300 scrollbar-w-2 scrollbar-track-transparent ml-6 shadow-2xl md:w-3/5 h-48 overflow-y-auto rounded-md bg-white/10 hidden"}>
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
