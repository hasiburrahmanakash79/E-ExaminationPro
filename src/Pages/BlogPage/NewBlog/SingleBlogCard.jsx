import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { FaRegCommentDots, FaRegHeart, FaShareAltSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, LineShareButton, LinkedinIcon, PinterestIcon, PinterestShareButton, TwitterIcon, TwitterShareButton } from "react-share";
import useAxiosSecure from '../../../Hooks/useAxiosSecure.jsx/useAxiosSecure';
import { AuthContext } from '../../../Provider/AuthProvider';
import { fetch } from 'openai/_shims/fetch';

const SingleBlogCard = ({ newBlog }) => {

  const [isComment, setIsComment] = useState(false)
  const [isBlog, setIsBlog] = useState(true)
  const [allUserComments, setAllUserComments] = useState([])
  //for open share modal 
  const openModal = (blogId) => {
    const modalId = `my_modals_${blogId}`;
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.showModal();
    }
  }

  //for like buttons
  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  const { _id, image_url, title, publishing_date, content } = newBlog;

  const { user, loading } = useContext(AuthContext)


  
  const showComment=id=>{
    fetch(`https://e-exam-pro-server.vercel.app/comments?id=${_id}&userEmail=${user?.email}`)
    .then(res=>res.json())
    .then(data=>setAllUserComments(data))
  }

console.log(allUserComments)



  

  // const { data: comments, refetch } = useQuery({
  //     queryKey: ['comments', _id],
  //     enabled: !loading,
  //     queryFn: async () => {
  //         const res = await axiosSecure.get(`/comments?id=${_id}&userEmail=${user?.email}`);
  //         return res.data;
  //     }
  // })
  // console.log(comments)



  
  return (
    <div>
      {/* <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
        <figure><img className='h-[250px] w-full' src={image_url} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{publishing_date}</p>
          <p>{content}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div> */}





      <div className='mb-5  '>

        <div rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">

          <div >
            <div className={isBlog ? '' : 'hidden'}>
            <img role="presentation" className="object-cover w-full rounded-b h-60 dark:bg-gray-500 " src={image_url} />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
              <span className="text-xs dark:text-gray-400">{publishing_date}</span>
              <p>{content.slice(0, 250)}...... <br /></p>
            </div>
            </div>
     

            <div className={isComment ? 'px-5  h-[520px] pt-5  overflow-y-auto ' : 'hidden'}>
              <h1  className='text-center text-red-500'>All Comments</h1>
              {allUserComments?.allUserComments?.map((comment, index) => <div key={index} className='m-2 p-2 shadow-md' >
                                <h1><span className='text-yellow-400'>User:</span>{ }<span className='text-green-400'> {comment.name}</span></h1>
                                <p><span className='text-yellow-400'>Commnet:</span> {comment.comment}</p>
                            </div>)}
            </div>


            <div className='flex items-center justify-between p-5'>

              <div className='mt-10 flex gap-5'>
                {/* <Link to={`/blogDetails/${_id}?_id=${_id}`}>
                  <FaRegCommentDots className='text-2xl'></FaRegCommentDots> 
                </Link> */}
                <FaRegCommentDots onClick={() => {
                  showComment(_id)
                  setIsBlog(!isBlog)
                  setIsComment(!isComment)
                }} className='text-2xl'></FaRegCommentDots>
                <FaRegHeart className={`text-2xl ${isLiked ? 'text-red-500' : ''}`}
                  onClick={toggleLike}></FaRegHeart>


                {/* <FaShareAltSquare className='text-2xl'></FaShareAltSquare> */}
                <FaShareAltSquare className="text-2xl" onClick={() => openModal(id)}></FaShareAltSquare>

                <dialog id={`my_modals_${_id}`} className="modal">
                  <form method="dialog" className="modal-box bg-gradient-to-r from-[#A8EB12]  to-[#042B66] ...">
                    <div className="text-center ">
                      <EmailShareButton url="https://e-exampro.web.app/blog" quote={"Blog by E-examPro"} hastag={"blog"}>
                        <EmailIcon className="me-10" size={50} round={true}></EmailIcon>
                      </EmailShareButton>
                      <TwitterShareButton url="https://e-exampro.web.app/blog" quote={"Blog by E-examPro"} hastag={"blog"}>
                        <TwitterIcon className="me-10" size={50} round={true}></TwitterIcon>
                      </TwitterShareButton>
                      <FacebookShareButton url="https://e-exampro.web.app/blog" quote={"Blog by E-examPro"} hastag={"blog"}>
                        <FacebookIcon className="me-10" size={50} round={true}></FacebookIcon>
                      </FacebookShareButton>
                      <LineShareButton url="https://e-exampro.web.app/blog" quote={"Blog by E-examPro"} hastag={"blog"}>
                        <LinkedinIcon className="me-10" size={50} round={true}></LinkedinIcon>
                      </LineShareButton>
                      <PinterestShareButton url="https://e-exampro.web.app/blog" quote={"Blog by E-examPro"} hastag={"blog"}>
                        <PinterestIcon size={50} round={true}></PinterestIcon>
                      </PinterestShareButton>
                    </div>

                  </form>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>


              </div>
              <div className=''>
                <Link
                  to={`/blogDetails/${_id}`}
                  className="text-end btn btn-outline btn-sm  mt-10 ml-auto"
                >
                  Read More
                </Link>


              </div>

            </div>


          </div>

        </div>
      </div>
    </div>
  );
};

export default SingleBlogCard;