import { useState } from "react";
import useAuth from "../../Hooks/useAuth/useAuth";
import { toast } from "react-toastify";

const ReplyField = ({ postId, refetch, setCommentPostText, comment, setReplyHide, replyHide, }) => {
    const [text, setText] = useState("");
    const { user } = useAuth();
    const createdAtDate = new Date();
    const [uniqueId, setUniqueId] = useState(1234567);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUniqueId = uniqueId + 8;
        setUniqueId(newUniqueId);
        const commentInfo = {
            userName: user?.displayName,
            userEmail: user?.email,
            userImage: user?.photoURL,
            timeDate: createdAtDate,
            replies: [],
            replies: [],
            likeCount: [],
            uniqId: newUniqueId
        };
        try {
            const response = await fetch(
                `http://localhost:3500/forumPost/${postId}/replies`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ text, author: commentInfo }),
                }
            );

            if (response.ok) {
                console.log("serial number 52", response);
                toast.success("Your reply was successful");
                refetch();
                // Optionally, you can clear the form field here
                setText("");
            } else {
                const data = await response.json();
                toast.error("Reply error!", data);
            }
        } catch (error) {
            console.error("Error posting reply:", error);
            toast.error("Reply error!");
        }
    };

    return (
        <div className="mb-4">
            <div className="flex">
                <form onSubmit={handleSubmit}>
                    <div className="">
                        <label htmlFor="text"></label>
                        <textarea
                            id="text"
                            name="text"
                            rows="2"

                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Write your comment"
                            required
                            className="md:block hidden focus:outline-none bg-transparent border rounded-md p-2"
                        ></textarea>
                        <textarea
                            id="text"
                            name="text"
                            rows="2"
                            cols="50"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            required
                            className="block md:hidden focus:outline-none text-sm  rounded-md p-2"
                        ></textarea>
                    </div>
                    <div className="flex items-center gap-5">
                        <div>
                            <input
                                type="submit"
                                value="reply"
                                required
                            />
                        </div>
                        <div className="">
                            <button onClick={() => {
                                setCommentPostText(!comment)
                                setReplyHide(!replyHide)
                            }}>Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReplyField;