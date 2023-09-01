import { useState, useRef, useEffect } from "react";
import Action from "./Action";
// import DownArrow from "../../assets/down-arrow.svg";
// import UpArrow from "../../assets/up-arrow.svg";
// import { FaAngleUp } from "react-icons/fa6";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const Comment = ({
    handleInsertNode,
    handleEditNode,
    handleDeleteNode,
    comment,
}) => {
    const [input, setInput] = useState("");
    const [editMode, setEditMode] = useState(false);
    /* reply dowar jonno state false thakle bondha tahkbe r true thakle open hobe */
    const [showInput, setShowInput] = useState(false);
    const [expand, setExpand] = useState(false);
    // console.log(expand, "this set", setExpand);
    const inputRef = useRef(null);
    const { user } = useState();

    useEffect(() => {
        inputRef?.current?.focus();
    }, [editMode]);

    // patch korte hobe
    const handleNewComment = () => {
        setExpand(!expand);
        setShowInput(true);
    };

    // Post
    const onAddComment = () => {
        if (editMode) {
            handleEditNode(comment.id, inputRef?.current?.innerText);
        } else {
            setExpand(true);
            // handleInsertNode(console.log(comment.id, input));
            handleInsertNode(comment.id, input);
            setShowInput(false);
            setInput("");
        }
        // patch
        if (editMode) setEditMode(false);
    };
    // delete
    const handleDelete = () => {
        const cmt = comment.id
        console.log(cmt);
        handleDeleteNode(comment.id);
    };

    return (
        <div>
            <div className={comment.id === 1 ? "inputContainer" : "commentContainer"}>
                {comment.id === 1 ? (
                    <>
                        <input
                            type="text"
                            className="input_filed"
                            autoFocus
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="type..."
                        />
                        <Action
                            className="post_style"
                            type="POST"
                            handleClick={onAddComment}
                        />
                    </>
                ) : (
                    <>
                        {/* user information */}
                        <div className="flex items-center gap-2">
                            {/* <img src="" alt="" /> */}
                            {/* <p className="p-4 w-6 rounded-full bg-slate-800"></p> */}
                            <div className="avatar online  placeholder">
                                <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                                    <span className="text-xs">JO</span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <p>userName{user?.displayName}</p>
                                <p className="text-sm md:pl-16 pl-10"><span className="text-xs text-slate-600">8:34PM</span></p>
                            </div>
                        </div>
                        <div className="pl-9">
                            {/* edit flied section*/}
                            <span
                                contentEditable={editMode}
                                suppressContentEditableWarning={editMode}
                                ref={inputRef}
                                style={{ wordWrap: "break-word" }}
                                className="focus:outline-none focus:bg-green-500 focus:text-slate-950 cursor-text"
                            >
                                {/* reply filed */}
                                {comment.name}
                            </span>
                        </div>
                        {/* flex kora hoice reply , edit, and delete ke flex kora hoice */}
                        <div style={{ display: "flex", marginTop: "10px" }}>
                            {editMode ? (
                                <>
                                    {/* replay comment jokhon edit korbe */}
                                    <Action
                                        className="reply"
                                        type="SAVE"
                                        handleClick={onAddComment}
                                    />
                                    <Action
                                        className="reply"
                                        type="CANCEL"
                                        handleClick={() => {
                                            if (inputRef.current)
                                                inputRef.current.innerText = comment.name;
                                            setEditMode(false);
                                        }}
                                    />
                                </>
                            ) : (
                                <>
                                    {/* post, reply korar jonno action button stat*/}
                                    <Action
                                        className="reply "
                                        type={
                                            <div className="flex items-center gap-2">
                                                {expand ? (
                                                    <FaAngleUp></FaAngleUp>
                                                ) : (
                                                    <FaAngleDown></FaAngleDown>
                                                )}{" "}
                                                REPLY
                                            </div>
                                        }
                                        handleClick={handleNewComment}
                                    />
                                    <Action
                                        className="reply"
                                        type="EDIT"
                                        handleClick={() => {
                                            setEditMode(true);
                                        }}
                                    />
                                    <Action
                                        className="reply"
                                        type="DELETE"
                                        handleClick={handleDelete}
                                    />
                                    {/* post, reply korar jonno action button end*/}
                                </>
                            )}
                        </div>
                    </>
                )}
            </div>

            <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
                {showInput && (
                    /* replay input and save and cancel button  */
                    <div className="inputContainer">
                        <input
                            type="text"
                            className="input_filed"
                            autoFocus
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <Action
                            className="reply"
                            type="REPLY"
                            handleClick={onAddComment} />
                        <Action
                            className="reply"
                            type="CANCEL"
                            handleClick={() => {
                                setShowInput(false);
                                if (!comment?.items?.length) setExpand(false);
                            }}
                        /* replay input and save and cancel button end */
                        />
                    </div>
                )}

                {comment?.items?.map((cmnt) =>
                // console.log(cmnt)
                {
                    return (
                        <Comment
                            key={cmnt.id}
                            handleInsertNode={handleInsertNode}
                            handleEditNode={handleEditNode}
                            handleDeleteNode={handleDeleteNode}
                            comment={cmnt}
                        />
                    );
                }
                )}
            </div>
        </div>
    );
};

export default Comment;