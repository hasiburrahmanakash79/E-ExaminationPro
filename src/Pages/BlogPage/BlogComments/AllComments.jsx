

import { useEffect, useRef, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Action from "../BlogComments/Action";
import "../BlogComments/ShowCommentsApp.css";

const Comment = ({
  handleInsertNode,
  handleEditNode,
  handleDeleteNode,
  comment,
}) => {
  const [input, setInput] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [expand, setExpand] = useState(false);
  const inputRef = useRef(null);



  useEffect(() => {
    inputRef?.current?.focus();
  }, [editMode]);

  const handleNewComment = () => {
    setExpand(!expand);
    setShowInput(true);
  };

  const onAddComment = () => {
    if (editMode) {

      handleEditNode(comment.id, inputRef?.current?.innerText);
    } else {
      setExpand(true);
      handleInsertNode(comment.id, input);
      setShowInput(false);
      setInput("");
    }

    if (editMode) setEditMode(false);
  };

  const handleDelete = () => {
    handleDeleteNode(comment.id);
  };

  return (
    <div>
      <div className={comment.id === 1 ? "inputContainer" : "commentContainer"}>
        {comment.id === 1 ? (
          <>

            <div
              data-aos="fade-down"
              data-aos-duration="3000"
              className="flex items-center gap-3">
              <input
                type="text"
                className=" ag-transparent p-[10px] border   rounded-lg shadow-md"
                autoFocus
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Write a comment"
              />

              <Action
                className="reply comment btn btn-primary"
                type="COMMENT"
                handleClick={onAddComment}
              />
            </div>
          </>
        ) : (
          <>
            {/* Avatar */}
            <div className=" flex items-center gap-2">
              <div className="flex items-start mt-1 gap-5   ag-transparent border   px-5 py-3 rounded">
                <img className=" avatar w-8 h-8 rounded-full"

                  src='https://static.vecteezy.com/system/resources/previews/005/112/745/original/cartoon-happy-little-boy-raising-hands-free-vector.jpg'
                />
                <div className="mt-0">
                  <h2 className="font-semibold">Name</h2>
                  <span

                    contentEditable={editMode}
                    suppressContentEditableWarning={editMode}
                    ref={inputRef}
                    style={{ wordWrap: "break-word" }}
                  >
                    {comment.name}
                  </span>
                  <div style={{ display: "flex", marginTop: "5px" }}>
                    {editMode ? (
                      <>
                        <Action
                          className="reply "
                          type="SAVE"
                          handleClick={onAddComment}
                        />
                        <Action
                          className="reply "
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
                        <Action
                          className="   reply flex items-center gap-1"
                          type={
                            <>
                              {expand ? (
                                <FaAngleUp width="10px" height="10px" />
                              ) : (
                                <FaAngleDown width="10px" height="10px" />
                              )}{" "}
                              REPLY
                            </>
                          }
                          handleClick={handleNewComment}
                        />
                        <Action
                          className="reply "
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
                      </>
                    )}
                  </div>
                </div>
              </div>



            </div>
            {/* <span
              contentEditable={editMode}
              suppressContentEditableWarning={editMode}
              ref={inputRef}
              style={{ wordWrap: "break-word" }}
            >
              {comment.name}
            </span> */}


          </>
        )}
      </div>

      <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
        {showInput && (
          <div className="inputContainer ">
            <input
              type="text"
              className="inputContainer__input"
              autoFocus
              onChange={(e) => setInput(e.target.value)}
            />
            <Action className="reply" type="REPLY" handleClick={onAddComment} />
            <Action
              className="reply"
              type="CANCEL"
              handleClick={() => {
                setShowInput(false);
                if (!comment?.items?.length) setExpand(false);
              }}
            />
          </div>
        )}

        {comment?.items?.map((cmnt) => {
          return (
            <Comment
              key={cmnt.id}
              handleInsertNode={handleInsertNode}
              handleEditNode={handleEditNode}
              handleDeleteNode={handleDeleteNode}
              comment={cmnt}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Comment;