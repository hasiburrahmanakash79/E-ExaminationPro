import React, { useState } from 'react'
import Loading from '../../../Components/Loading/Loading'
import useAuth from '../../../Hooks/useAuth/useAuth'
import useComments from '../../../Hooks/useComments/useComments'

function CommentSection () {
  const [comment, setComment] = useState('')
  const [message, setMessage] = useState('')
  const { user } = useAuth()
  console.log(user)
  // const [comments, setComments] = useState([]);
  const [comments, loading, refetch] = useComments()

  const handleCommentChange = e => {
    setComment(e.target.value)
  }
  console.log(comments)

  const handleCommentSubmit = async () => {
    if (comment.trim() !== '') {
      try {
        const currentTime = new Date().toISOString() // Get the current time in ISO format
        const requestBody = {
          comment,
          username: user.displayName, // Assuming the user object has a "username" property
          time: currentTime
        }

        const response = await fetch(
          'https://e-exam-pro-server.vercel.app/comments',
          {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify({ requestBody })
          }
        )

        if (response.ok) {
          setMessage('Comment added successfully')
          setComment('')
          refetch()
        } else {
          setMessage('Failed to add comment')
        }
      } catch (error) {
        setMessage('Error: ' + error.message)
      }
    } else {
      setMessage('Please enter a comment')
    }
  }

  if (loading) {
    return <Loading></Loading>
  }

  return (
    <div>
      <div className='mx-auto text-start'>
        <input
          className='w-full max-w-xs bg-transparent border-white input'
          type='text'
          placeholder='Enter your comment'
          value={comment}
          onChange={handleCommentChange}
        />
        <button
          className='bg-transparent border-none btn primary-bg ms-2'
          onClick={handleCommentSubmit}
        >
          Comment
        </button>
      </div>
      <div>{message}</div>
      <div>
        <ul className='mt-2 ms-10'>
          {comments?.map(c => (
            <li key={c._id}>{c.comment}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CommentSection
