import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../../Hooks/useAxiosSecure.jsx/useAxiosSecure';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { FaCommentDots } from 'react-icons/fa';

const BlogDetails = () => {

    const [allComment,setAllComment]=useState(true)
    const [userComment,setUserComment]=useState(false)

    const [showTooltip_success, setTooltip_success] = useState(false)
    const [showTooltip_error, setTooltip_error] = useState(false)

    const { id } = useParams()
    console.log(id)


    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data: blog, isLoading: isBlogLoading } = useQuery({
        queryKey: ['blog', id],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/blogs/${id}`);
            return res.data;
        }
    })
    console.log(blog)


    const { data: comments, refetch } = useQuery({
        queryKey: ['comments', id],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/comments?id=${id}&userEmail=${user?.email}`);
            return res.data;
        }
    })
    console.log(comments)

    const commnetSubmit = e => {
        e.preventDefault()
        const form = e.target
        const comment = form.comment.value
        const data = { comment: comment, BlogId: id, userEmail: user?.email, name: user?.displayName }
        fetch('http://localhost:4000/comments', {
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
                }
                else {
                    setTooltip_error('true')
                }
            })
    }


    return (
        <div  onClick={() => {
            setTooltip_success(false)
            showTooltip_error(false)
        }}>
            <div className="  flex flex-col justify-center items-center mt-5 mx-2 md:mx-10  ">
                <figure className='rounded-lg '><img className='rounded-lg ' src={blog?.image_url} alt="Album" /></figure>
                <div className=" md:w-1/2 mt-3">
                    <h2 className="text-3xl">{blog?.title}</h2>
                    <p>{blog?.publishing_date}</p>
                    <p className='mt-5'>{blog?.content}</p>
                </div>

            </div>
            <div className='flex justify-center'>

                <div className='  grid  grid-cols-1  p-5 md:w-1/2 rounded-lg '>
                    <hr />
                    <h1 className='text-3xl text-center mt-5'>Comment Section</h1>
                    <button onClick={
                        ()=>{
                            setAllComment(!allComment)
                            setUserComment(!userComment)
                        }
                    } className='btn bg-white text-black hover:bg-slate-400 btn-sm text-md text-center mt-2'>{allComment?"View Your Comments":"View All Comments"}</button>
                    <div className='h-[200px] overflow-y-auto'>
                        <div className={allComment?"":"hidden"}>
                            {comments?.allUserComments?.map((comment, index) => <div key={index} className='m-2 p-2 shadow-md' >
                                <h1><span className='text-yellow-400'>User:</span>{ }<span className='text-green-400'> {comment.name}</span></h1>
                                <p><span className='text-yellow-400'>Commnet:</span> {comment.comment}</p>
                            </div>)}
                        </div>
                        <div className={userComment?"":"hidden"}>
                            {comments?.userComments?.map((comment, index) => <div key={index} className='m-2 p-2 shadow-md' >
                                <h1><span className='text-yellow-400'>User:</span>{ }<span className='text-green-400'> {comment.name}</span></h1>
                                <p><span className='text-yellow-400'>Commnet:</span> {comment.comment}</p>
                            </div>)}
                        </div>
                    </div>

                    <form onSubmit={commnetSubmit} className=' mt-7 '>

                        <div className=' flex gap-3 items-center w-auto'>
                            <textarea required name='comment' className="textarea textarea-primary w-full relative" placeholder="Type Comment here"></textarea>

                            <div className={showTooltip_success ? "tooltip  tooltip-open tooltip-success  " : showTooltip_error ? "tooltip tooltip-open tooltip-warning" : ""} data-tip={showTooltip_success ? "success" : showTooltip_error ? "warning" : ""}>
                                {/* <input type='submit' className=' btn primary-bg' value={FaCommentDots} /> */}
                                <button className='text-lg btn btn-sm primary-btn hover:text-red-500'>Comment</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;