import { useState } from "react";
import useAuth from "../../Hooks/useAuth/useAuth";
import { toast } from "react-toastify";

const ReplyField = ({ postId, refetch, setCommentPostText, comment, setReplyHide, replyHide, }) => {
    const [text, setText] = useState("");
    const { user } = useAuth();
    const createdAtDate = new Date();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const commentInfo = {
            userName: user?.displayName,
            userImage: user?.photoURL,
            timeDate: createdAtDate,
            replies: [],
        };
        try {
            const response = await fetch(
                `http://localhost:4000/forumPost/${postId}/replies`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ text, author: commentInfo }),
                }
            );

            if (response.ok) {
                console.log("serial number 52");
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

    const handleReplyClick = () => {
        setText("");
    };
    return (
        <div>
            <div className="flex">
                <form onSubmit={handleSubmit}>
                    <div className="">
                        <label htmlFor="text"></label>
                        <textarea
                            id="text"
                            name="text"
                            rows="2"
                            cols="40"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            required
                            className="focus:outline-none text-sm text-white rounded-md p-2"
                        ></textarea>
                    </div>
                    <div className="flex items-center gap-5">
                        <div>
                            <input
                                type="submit"
                                value="reply"
                                // disabled={text.length === 0}
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



// import { useState } from "react";
// import useAuth from "../../Hooks/useAuth/useAuth";
// import { toast } from "react-toastify";

// const ReplyField = ({ postId, refetch, setCommentPostText, comment }) => {
//     const [text, setText] = useState("");
//     const { user } = useAuth()
//     const createdAtDate = new Date();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const commentInfo = {
//             userName: user?.displayName,
//             userImage: user?.photoURL,
//             timeDate: createdAtDate,
//             replies: [],
//         }
//         try {
//             const response = await fetch(`http://localhost:4000/forumPost/${postId}/replies`, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ text, author: commentInfo }),
//             });

//             if (response.ok) {
//                 console.log("serial number 52");
//                 toast.success('your reply successful')
//                 refetch();
//                 // Optionally, you can clear the form field here
//                 setText("");
//             } else {
//                 const data = await response.json();
//                 toast.error('you reply error!', data);
//             }
//         } catch (error) {
//             console.error("Error posting reply:", error);
//             toast.error('you reply error!');
//         }
//     };

//     return (
//         <div>
//             <div className="flex">
//                 <form
//                     onSubmit={handleSubmit}>
//                     <div className="">
//                         <label htmlFor="text"></label>
//                         <textarea
//                             id="text"
//                             name="text"
//                             rows="2"
//                             cols="40"
//                             value={text}
//                             onChange={(e) => setText(e.target.value)}
//                             required
//                             className="focus:outline-none text-sm text-white rounded-md p-2"
//                         ></textarea>
//                     </div>
//                     <div className="flex items-center gap-5">
//                         {
//                             text.length > 0 ?
//                                 <div>
//                                     <input
//                                         onClick={() => setCommentPostText(!comment)}
//                                         type="submit" value="reply" />
//                                 </div>
//                                 :
//                                 <div>
//                                     <input
//                                         // onClick={() => setCommentPostText(!comment)}
//                                         type="submit" value="reply" />
//                                 </div>
//                         }

//                         <div className="">
//                             <button
//                                 onClick={() => setCommentPostText(!comment)}
//                             > cancel</button>
//                         </div>
//                     </div>
//                 </form>

//             </div>
//         </div >
//     );
// }

// export default ReplyField;
