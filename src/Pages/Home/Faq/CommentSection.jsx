import React, { useEffect, useState } from 'react'
import Loading from '../../../Components/Loading/Loading'
import useAuth from '../../../Hooks/useAuth/useAuth'
import useComments from '../../../Hooks/useComments/useComments'

function CommentSection ({ blogId }) {
  const [comment, setComment] = useState('')
  const [message, setMessage] = useState('')

  const { user } = useAuth()
  const [comments, loading, refetch] = useComments()

  const handleCommentChange = e => {
    setComment(e.target.value)
  }
  const handleCommentSubmit = async () => {
    if (comment.trim() !== '') {
      try {
        const currentTime = new Date().toISOString() // Get the current time in ISO format
        const requestBody = {
          comment,
          username: user.displayName, // Assuming the user object has a "username" property
          time: currentTime,
          blogId
        }

        const response = await fetch(
          `http://localhost:3500/comments`,
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

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `http://localhost:3500/comments?blogId=${blogId}`
        )

        if (response.ok) {
          const data = await response.json()
          //console.log(data)
          setComment(data)
        } else {
          setMessage('Failed to fetch comments')
        }
      } catch (error) {
        setMessage('Error: ' + error.message)
      }
    }

    fetchComments()
  }, [])
  if (loading) {
    return <Loading></Loading>
  }

  return (
    <div>
      <div className='mx-auto text-start'>
        <input
          className='w-full max-w-xs  ag-transparent border input'
          type='text'
          placeholder='Enter your comment'
          value={comment}
          onChange={handleCommentChange}
        />
        <button
          className=' ag-transparent border-none btn primary-bg ms-2'
          onClick={handleCommentSubmit}
        >
          Comment
        </button>
      </div>
      <div>{message}</div>
    </div>
  )
}

export default CommentSection
