import { Controller, useForm } from 'react-hook-form'
import useAuth from '../../Hooks/useAuth/useAuth'
import axios from 'axios'
import Swal from 'sweetalert2'

const PostInput = () => {
    const { user } = useAuth()
    const createdAtDate = new Date();
    const { control, handleSubmit } = useForm({
        defaultValues: {
            postField: "",
        },
    })

    const onSubmit = (data) => {
        const article = data.postField;
        // axios.post("https://e-exam-pro-server.vercel.app/forumPost",
        axios.post("https://e-exam-pro-server.vercel.app/forumPost",
            {
                article,
                userName: user?.displayName,
                userImage: user?.photoURL,
                timeDate: createdAtDate,
                replies: [],
            })
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'your post uploaded',
                        showConfirmButton: false,
                        timer: 1200
                    })
                }
            })
            .catch(err => {
                console.log(err.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${err?.message}`,
                })
            })
    }
    // const onSubmit = data => {
    //   const article = data.postField
    //   axios
    //     .post('https://e-exam-pro-server.vercel.app/forumPost', {
    //       article,
    //       userName: user?.displayName,
    //       userImage: user?.photoURL,
    //       timeDate: createdAtDate
    //     })
    //     .then(res => {
    //       console.log(res)
    //       if (res.data.insertedId) {
    //         Swal.fire({
    //           position: 'top-center',
    //           icon: 'success',
    //           title: 'your post uploaded',
    //           showConfirmButton: false,
    //           timer: 1200
    //         })
    //       }
    //     })
    //     .catch(err => {
    //       console.log(err.message)
    //       Swal.fire({
    //         icon: 'error',
    //         title: 'Oops...',
    //         text: `${err?.message}`
    //       })
    //     })
    // }
  
    return (
      <div className=''>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='items-center flex-initial '
        >
          <Controller
            name='postField'
            control={control}
            render={({ field }) => (
              <textarea
                {...field}
                placeholder='Write your comment'
                className='block w-full h-24 p-3 border shadow-2xl rounded-md bg-white/10 focus:outline-teal-700'
              />
            )}
          />
          <button
            type='submit'
            className='px-4 py-2 mt-2 mb-4 text-sm font-semibold tracking-wide text-white uppercase bg-blue-500 rounded-md'
          >
            Post
          </button>
        </form>
      </div>
    )
  }


export default PostInput
