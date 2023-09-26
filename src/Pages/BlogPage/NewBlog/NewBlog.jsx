import { Suspense, lazy, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import Loading from '../../../components/Loading/Loading'
const SingleBlogCard = lazy(() =>
  import('../../BlogPage/NewBlog/SingleBlogCard')
)
const NewBlog = () => {
  const { data: blogs = [], refetch } = useQuery(['blogs'], async () => {
    const res = await fetch('http://localhost:4000/blogs')
    return res.json()
  })
  const [currentPage, setCurrentPage] = useState(1)
  const blogsPerPage = 6
  const indexOfLastBlog = currentPage * blogsPerPage
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog)
  const totalPages = Math.ceil(blogs.length / blogsPerPage)
  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className='container mx-auto'>
      <Helmet>
        <title>Blog | E-ExamPro</title>
      </Helmet>
      <div className='pt-14'>
        <h2 className='text-xl text-center '>Blogs for You</h2>
        <h2 className='text-3xl text-center '>
          Publish your Passions, Your Way
        </h2>
      </div>
      <div className='py-20'>
        <div className='md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5 md:px-12'>
          {currentBlogs.map(newBlog => (
            <Suspense fallback={<Loading />}>
              <SingleBlogCard
                key={newBlog._id}
                newBlog={newBlog}
                refetch={refetch}
              />
            </Suspense>
          ))}
        </div>
        <div className='flex justify-center mt-4'>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-2 py-2 px-4 rounded ${
                currentPage === index + 1 ? ' ag-blue-500 ' : ' ag-gray-300'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewBlog
