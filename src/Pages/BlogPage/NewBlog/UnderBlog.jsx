import React from 'react'
import { FaClock } from 'react-icons/fa'
import { useParams } from 'react-router-dom'

const UnderBlog = () => {
  const { id, image_url, publishing_date, content } = useParams()
  //console.log(id)

  const info = details.find(detail => detail.id == id)
  return (
    <div className='px-5 py-5 mx-auto md:w-1/2 md:py-20'>
      <img
        role='presentation'
        className='object-cover w-full rounded-b dark: ag-gray-500 '
        src={info.image_url}
      />
      <div className='flex items-center justify-between mt-5 mb-5 md:mb-10'>
        <div>
          <h2 className='text-3xl font-semibold '>{info?.title}</h2>
        </div>
        <div className='flex items-center gap-2 md:gap-3'>
          <FaClock></FaClock>
          <h2 className='mt-5 mb-5 text-sm pe-2 '>{info?.publishing_date}</h2>
        </div>
      </div>
      <h2>{info?.content}</h2>
    </div>
  )
}

export default UnderBlog
