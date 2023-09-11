


import { useEffect, useState } from 'react';
import SingleBlogCard from '../../BlogPage/NewBlog/SingleBlogCard';

const NewBlog = () => {
  const [newBlogs, setNewBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 8;

  useEffect(() => {
    fetch('http://localhost:5000/blogs')
      .then((res) => res.json())
      .then((data) => setNewBlogs(data));
  }, []);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = newBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(newBlogs.length / blogsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className='pt-14'>
        <h2 className='text-xl text-center '>Blogs for You</h2>
        <h2 className='text-3xl text-center text-orange-500'>
          Publish your Passions, Your Way
        </h2>
      </div>
      <div className='py-20'>
        <div className='md:grid md:grid-cols-4 md:gap-5 md:px-12'>
          {currentBlogs.map((newBlog) => (
            <SingleBlogCard key={newBlog._id} newBlog={newBlog}
            
            />
          ))}
        </div>
        <div className='flex justify-center mt-4'>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-2 py-2 px-4 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'
                }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewBlog;
