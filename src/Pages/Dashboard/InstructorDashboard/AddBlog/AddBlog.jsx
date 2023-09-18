import React from 'react'
import { Helmet } from 'react-helmet-async'
import Swal from 'sweetalert2'

const AddBlog = () => {
  const handleBlogAdding = event => {
    event.preventDefault()

    const form = event.target
    const image_url = form.image_url.value
    const title = form.title.value
    const publishing_date = form.publishing_date.value
    const content = form.content.value
    const instructorName = form.instructorName.value

    const order = {
      image_url,
      instructorName,
      title,
      publishing_date,
      content
    }
    //console.log(order)

    fetch('https://e-exam-pro-server.vercel.app/blogs', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
      .then(res => res.json())
      .then(data => {
        //console.log(data)
        if (data.insertedId) {
          Swal.fire({
            position: 'middle-center',
            icon: 'success',
            title: 'Added Successfully',
            showConfirmButton: true,
            timer: 1500
          })
        }

        form.reset()
      })
  }

  return (
    <div className='p-5 text-center'>
      <Helmet>
        <title>E-ExamPro | Add Blog </title>
      </Helmet>
      <h2 className='my-10 text-3xl'>Add Blog</h2>

      <form onSubmit={handleBlogAdding} className='pb-20 text-center'>
        <div className='grid gap-5 p-5 pb-20-20 md:grid-cols-2 '>
          <input
            type='text'
            name='image_url'
            placeholder='Photo URL'
            className='input input-bordered'
          />
          <input
            type='text'
            name='title'
            placeholder='Your Title'
            className='w-full input input-bordered '
          />
          <input
            type='date'
            name='publishing_date'
            placeholder='Publishing Date'
            className='w-full input input-bordered '
          />
          <input
            type='text'
            name='instructorName'
            placeholder='Publisher Name'
            className='w-full input input-bordered '
          />
          <textarea
            className='w-full textarea textarea-bordered'
            name='content'
            placeholder='Your content'
          ></textarea>
        </div>
        <div>
          <input className='btn btn-primary ' type='submit' value='Submit' />
        </div>
      </form>
    </div>
  )
}

export default AddBlog
