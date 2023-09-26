import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import useAxiosSecure from '../../../Hooks/useAxiosSecure.jsx/useAxiosSecure'
import { AuthContext } from '../../../Provider/AuthProvider'
import { useQuery } from '@tanstack/react-query'
const BlogDetails = () => {
  const [allComment, setAllComment] = useState(true)
  const [userComment, setUserComment] = useState(false)
  const [showTooltip_success, setTooltip_success] = useState(false)
  const [showTooltip_error, setTooltip_error] = useState(false)
  const { id } = useParams()
  const { user, loading } = useContext(AuthContext)
  const [axiosSecure] = useAxiosSecure()
  const { data: blog, isLoading: isBlogLoading } = useQuery({
    queryKey: ['blog', id],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/blogs/${id}`)
      return res.data
    }
  })
  const { data: comments, refetch } = useQuery({
    queryKey: ['comments', id],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/comments?id=${id}&userEmail=${user?.email}`
      )
      return res.data
    }
  })
  const commentSubmit = e => {
    e.preventDefault()
    const form = e.target
    const comment = form.comment.value
    const data = {
      comment: comment,
      BlogId: id,
      userEmail: user?.email,
      userImage: user?.photoURL,
      name: user?.displayName
    }
    fetch('https://e-exam-pro-server.vercel.app/comments', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          refetch()
          setTooltip_success('true')
        } else {
          setTooltip_error('true')
        }
      })
  }
  return (
    <div
      className='p-3'
      onClick={() => {
        setTooltip_success(false)
        showTooltip_error(false)
      }}
    >
      <div className='flex flex-col items-center justify-center mx-2 mt-5 md:mx-10'>
        <figure className='rounded-lg '>
          <img
            className='w-full max-w-3xl rounded-lg '
            src={blog?.image_url}
            alt='Album'
          />
        </figure>
        <div className='mt-3 md:w-1/2'>
          <h2 className='text-3xl'>{blog?.title}</h2>
          <p>{blog?.publishing_date}</p>
          <p className='mt-5'>{blog?.content}</p>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='grid w-full grid-cols-1 pt-5 rounded-lg md:w-1/2'>
          <hr />
          <h1 className='mt-5 text-3xl text-center'>Comment Section</h1>
          <button
            onClick={() => {
              setAllComment(!allComment)
              setUserComment(!userComment)
            }}
            className='mt-2 text-center btn-primary btn btn-sm text-md'
          >
            {allComment ? 'View Your Comments' : 'View All Comments'}
          </button>
          <div className='h-[200px] scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-slate-300 scrollbar-w-2 scrollbar-track-transparent overflow-y-auto'>
            <div className={allComment ? '' : 'hidden'}>
              {comments?.allUserComments?.map((comment, index) => (
                <div
                  key={index}
                  className='p-2 m-2 overflow-y-auto shadow shadow-primary'
                >
                  <h1 className='flex items-center gap-3 mb-2'>
                    <div className='avatar'>
                      <div className='w-6'>
                        {comment.userImage ? (
                          <img src={comment?.userImage} />
                        ) : (
                          <img
                            className='rounded-full'
                            src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
                          />
                        )}
                      </div>
                    </div>
                    <span className='font-bold'> {comment.name}</span>
                  </h1>
                  <p>
                    <span className=''>Comment:</span> {comment.comment}
                  </p>
                </div>
              ))}
            </div>
            <div className={userComment ? '' : 'hidden'}>
              {comments?.userComments?.map((comment, index) => (
                <div key={index} className='p-2 m-2 shadow-md'>
                  <h1>
                    <span className='aext-yellow-400'>User:</span>
                    {}
                    <span className='text-green-400'> {comment.name}</span>
                  </h1>
                  <p>
                    <span className='aext-yellow-400'>Comment:</span>{' '}
                    {comment.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={commentSubmit} className=' mt-7'>
            <div className='flex items-center w-auto gap-3 '>
              <textarea
                required
                name='comment'
                className='relative w-full textarea textarea-primary'
                placeholder='Type Comment here'
              ></textarea>

              <div
                className={
                  showTooltip_success
                    ? 'tooltip  tooltip-open tooltip-success  '
                    : showTooltip_error
                    ? 'tooltip tooltip-open tooltip-warning'
                    : ''
                }
                data-tip={
                  showTooltip_success
                    ? 'success'
                    : showTooltip_error
                    ? 'warning'
                    : ''
                }
              >
                <button className='text-lg btn btn-sm btn-primary'>
                  Comment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BlogDetails
