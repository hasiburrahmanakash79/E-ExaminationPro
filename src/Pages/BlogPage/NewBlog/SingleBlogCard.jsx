import React, { useContext, useState } from "react";
import {
  FaRegCommentDots,
  FaRegHeart,
  FaRegTrashAlt,
  FaShareAltSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LineShareButton,
  LineIcon,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { AuthContext } from "../../../Provider/AuthProvider";
import { fetch } from "openai/_shims/fetch";
import Swal from "sweetalert2";
import useAdmin from "../../../Hooks/useAdmin/useAdmin";
import useInstructor from "../../../Hooks/useInstructor/useInstructor";

const SingleBlogCard = ({ newBlog, refetch }) => {
  const [isInstructor] = useInstructor();
  const [isAdmin] = useAdmin();
  const [isComment, setIsComment] = useState(false);
  const [isBlog, setIsBlog] = useState(true);
  const [allUserComments, setAllUserComments] = useState([]);
  //for open share modal
  const openModal = (blogId) => {
    const modalId = `my_modals_${blogId}`;
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.showModal();
    }
  };

  //for like buttons
  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  const { _id, image_url, title, publishing_date, content } = newBlog;

  const { user, loading } = useContext(AuthContext);

  const showComment = (id) => {
    fetch(
      `https://e-exam-pro-server.vercel.app/comments?id=${_id}&userEmail=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setAllUserComments(data));
  };

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to remove this user!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://e-exam-pro-server.vercel.app/blogs/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "User has been deleted.", "success");
            }
          });
      }
    });
  };

  //console.log(allUserComments)

  return (
    <div className="border rounded-lg shadow shadow-primary border-primary">
      <div className="mb-5 ">
        <div
          rel="noopener noreferrer"
          href="#"
          className="mx-auto group hover:no-underline focus:no-underline"
        >
          <div>
            <div className={isBlog ? "" : "hidden"}>
              <div>
                <img
                  role="presentation"
                  className="w-full rounded-t-lg h-60"
                  src={image_url}
                />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  {title}
                </h3>
                <span className="text-xs dark: ">{publishing_date}</span>
                <p>
                  {content.slice(0, 230)}...... <br />
                </p>
              </div>
            </div>

            <div
              className={
                isComment ? "px-5  h-[520px] pt-5  overflow-y-auto " : "hidden"
              }
            >
              <h1 className="text-center text-red-500">All Comments</h1>
              {allUserComments?.allUserComments?.map((comment, index) => (
                <div key={index} className="p-2 m-2 shadow-md">
                  <h1>
                    <span className="aext-yellow-400">User:</span>
                    {}
                    <span className="text-green-400"> {comment.name}</span>
                  </h1>
                  <p>
                    <span className="aext-yellow-400">Comment:</span>{" "}
                    {comment.comment}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between p-5">
              <div className="flex gap-5 mt-10">
                <FaRegCommentDots
                  onClick={() => {
                    showComment(_id);
                    setIsBlog(!isBlog);
                    setIsComment(!isComment);
                  }}
                  className="text-2xl"
                ></FaRegCommentDots>
                <FaRegHeart
                  className={`text-2xl ${isLiked ? "text-red-500" : ""}`}
                  onClick={toggleLike}
                ></FaRegHeart>

                <FaShareAltSquare
                  className="text-2xl"
                  onClick={() => openModal(_id)}
                ></FaShareAltSquare>

                <dialog id={`my_modals_${_id}`} className="modal">
                  <form method="dialog" className="modal-box backdrop-blur-md bg-black/40">
                    <div className="text-center ">
                      <EmailShareButton
                        url={`https://e-exampro.web.app/blog/${_id}`}
                        quote={"Blog by E-examPro"}
                        hastag={"blog"}
                      >
                        <EmailIcon
                          className="me-10"
                          size={50}
                          round={true}
                        ></EmailIcon>
                      </EmailShareButton>
                      <TwitterShareButton
                        url="https://e-exampro.web.app/blog"
                        quote={"Blog by E-examPro"}
                        hastag={"blog"}
                      >
                        <TwitterIcon
                          className="me-10"
                          size={50}
                          round={true}
                        ></TwitterIcon>
                      </TwitterShareButton>
                      <FacebookShareButton
                        url="https://e-exampro.web.app/blog"
                        quote={"Blog by E-examPro"}
                        hastag={"blog"}
                      >
                        <FacebookIcon
                          className="me-10"
                          size={50}
                          round={true}
                        ></FacebookIcon>
                      </FacebookShareButton>
                      <LineShareButton
                        url="https://e-exampro.web.app/blog"
                        quote={"Blog by E-examPro"}
                        hastag={"blog"}
                      >
                        <LineIcon
                          className="me-10"
                          size={50}
                          round={true}
                        ></LineIcon>
                      </LineShareButton>
                    </div>
                  </form>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </div>

              <div className="">
                <Link
                  to={`/blogDetails/${_id}`}
                  className="mt-10 ml-auto text-end btn btn-primary btn-sm"
                >
                  Read More
                </Link>
                {user && (
                  <>
                    {isAdmin ? (
                      <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-secondary btn-sm ms-5"
                      >
                        <FaRegTrashAlt />
                      </button>
                    ) : isInstructor ? (
                      <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-secondary btn-sm ms-5"
                      >
                        <FaRegTrashAlt />
                      </button>
                    ) : (
                      ""
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogCard;
