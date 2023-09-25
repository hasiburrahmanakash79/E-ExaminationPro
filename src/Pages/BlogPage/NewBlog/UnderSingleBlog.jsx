import React, { useState } from 'react'
import { FaRegCommentDots, FaRegHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const UnderSingleBlog = ({ smallCard }) => {
  const { id, image_url, title, publishing_date, content } = smallCard
  const [isLiked, setIsLiked] = useState(false)
  const toggleLike = () => {
    setIsLiked(!isLiked)
  }

  return (
    <div>
      <div className='mb-5'>
        <div
          rel='noopener noreferrer'
          href='#'
          className='max-w-sm mx-auto group hover:no-underline focus:no-underline dark: ag-gray-900'
        >
          <img
            role='presentation'
            className='object-cover w-full rounded-b h-60 dark: ag-gray-500 '
            src={image_url}
          />
          <div className='p-6 space-y-2'>
            <h3 className='text-2xl font-semibold group-hover:underline group-focus:underline'>
              {title}
            </h3>
            <span className='text-xs dark: '>{publishing_date}</span> <br />
            <p>
              {content.slice(0, 250)}...... <br />
            </p>
            <div className='flex items-center justify-between'>
              <div className='mt-5 flex gap-5'>
                <Link to={`/blogUnderDetails/${id}`}>
                  <FaRegCommentDots className='text-2xl'></FaRegCommentDots>
                </Link>
                <FaRegHeart
                  className={`text-2xl ${isLiked ? 'text-red-500' : ''}`}
                  onClick={toggleLike}
                ></FaRegHeart>
              </div>
              <div className=''>
                <Link
                  to={`/blogUnderDetails/${id}`}
                  className='text-end btn btn-outline btn-sm  mt-5 ml-auto'
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UnderSingleBlog
