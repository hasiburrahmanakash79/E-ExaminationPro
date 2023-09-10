
import { useEffect, useState } from 'react';
import SingleBlogCard from '../../BlogPage/NewBlog/SingleBlogCard';

const NewBlog = () => {

  const [newBlogs, setNewBlogs] = useState([]);

  useEffect(() => {

    fetch('../../../../public/fakeblog.json')
      .then(res => res.json())
      .then(data => setNewBlogs(data))
  }, [])
  return (
    <div >
      <div className='pt-14'>
        <h2 className='text-xl text-center '>Blog's for You</h2>
        <h2 className='text-3xl text-center text-orange-500'>Publish your Passions, Your way</h2>
      </div>
      <div className='py-20' >


        <div className='md:grid md:grid-cols-4 md:gap-5 md:px-12 '>
          {
            newBlogs.map(newBlog => <SingleBlogCard
              key={newBlog.id}
              newBlog={newBlog}></SingleBlogCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default NewBlog;