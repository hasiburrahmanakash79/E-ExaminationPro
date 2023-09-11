import React, { useEffect, useState } from 'react';
import Loading from '../../../Components/Loading/Loading';
import useAuth from '../../../Hooks/useAuth/useAuth';
import useComments from '../../../Hooks/useComments/useComments';

function CommentSection({ blogId }) {
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState('');

  const { user } = useAuth()
  console.log(user);
  // const [comments, setComments] = useState([]);
  const [comments, loading, refetch] = useComments();

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  console.log(comments);

  const handleCommentSubmit = async () => {
    if (comment.trim() !== '') {
      try {

        const currentTime = new Date().toISOString(); // Get the current time in ISO format
        const requestBody = {
          comment,
          username: user.displayName, // Assuming the user object has a "username" property
          time: currentTime,
          blogId
        };

        const response = await fetch(`http://localhost:5000/comments`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({ requestBody }),
        });

        if (response.ok) {
          setMessage('Comment added successfully');
          setComment('');
          refetch()
        } else {
          setMessage('Failed to add comment');
        }
      } catch (error) {
        setMessage('Error: ' + error.message);
      }
    } else {
      setMessage('Please enter a comment');
    }
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`http://localhost:5000/comments?blogId=${blogId}`);

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setComments(data)
        }
        else {
          setMessage('Failed to fetch comments')
        }
      } catch (error) {
        setMessage('Error: ' + error.message);
      }
    };

    fetchComments();
  },
    []);
  if (loading) {
    return <Loading></Loading>
  }

  return (
    <div >

      <div className='mx-auto text-start'>
        <input
          className="input w-full max-w-xs bg-transparent border-white"
          type="text"
          placeholder="Enter your comment"
          value={comment}
          onChange={handleCommentChange}
        />
        <button className='btn primary-bg bg-transparent border-none ms-2' onClick={handleCommentSubmit}>Comment</button>
      </div>
      <div>{message}</div>
      <div>

        <ul className='mt-2 ms-10'>
          {comments?.map((c) => (
            <li key={c._id}
            >{c.comment}</li>
          ))}
        </ul>


      </div>
    </div>
  );
}




export default CommentSection;

