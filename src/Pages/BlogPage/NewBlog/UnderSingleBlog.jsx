import React, { useState } from 'react';
import { FaRegCommentDots, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const UnderSingleBlog = ({ smallCard }) => {

  const { id, image_url, title, publishing_date, content } = smallCard


  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };


  return (
    <div>
      <div className='mb-5'>
        <div rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
          <img role="presentation" className="object-cover w-full rounded-b h-60 dark:bg-gray-500 " src={image_url} />
          <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
            <span className="text-xs dark:text-gray-400">{publishing_date}</span> <br />



            <p>{content.slice(0, 250)}...... <br /></p>



            <div className='flex items-center justify-between'>

              <div className='mt-5 flex gap-5'>
                <Link to={`/blogUnderDetails/${id}`}>
                  <FaRegCommentDots className='text-2xl'></FaRegCommentDots>
                </Link>
                <FaRegHeart className={`text-2xl ${isLiked ? 'text-red-500' : ''}`}
                  onClick={toggleLike}></FaRegHeart>


                {/* <FaShareAltSquare className='text-2xl'></FaShareAltSquare> */}
                {/* <FaShareAltSquare className="text-2xl" onClick={() => openModal(id)}></FaShareAltSquare>

                <dialog id={`my_modals_${id}`} className="modal">
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
                </dialog> */}


              </div>
              <div className=''>
                <Link
                  to={`/blogUnderDetails/${id}`}
                  className="text-end btn btn-outline btn-sm  mt-5 ml-auto"
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

export default UnderSingleBlog;