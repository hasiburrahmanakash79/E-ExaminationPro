import { FaClock } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
// import ShowCommentApp from "../ForComments/ShowCommentApp";
import { useEffect, useState } from 'react'
import UnderSingleBlog from '../../../Pages/BlogPage/NewBlog/UnderSingleBlog'
import CommentSection from '../../Home/Faq/CommentSection'

const NewBlogDetails = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const blogId = searchParams.get('_id')
  console.log(blogId)
  const [smallCards, setSmallCard] = useState([])
  const [displayCard, setDisplayCard] = useState(4)

  useEffect(() => {
    fetch('https://e-exam-pro-server.vercel.app/blogs')
      .then(res => res.json())
      .then(data => setSmallCard(data))
  }, [])

  const { id, image_url, publishing_date, content } = useParams()
  console.log(id)

  // const { _id, image_url, publishing_date, content } = useParams();
  // console.log(_id);

  const info = smallCards.find(smallCard => smallCard._id == blogId)
  return (
    <div className='py-5 md:py-20'>
      <img className='px-5 mx-auto md:w-1/2' src={info?.image_url} alt='' />
      <div className='px-5 mx-auto mb-20 md:w-1/2'>
        <div className='flex items-center justify-between mt-5 mb-5 md:mb-10'>
          <div>
            <h2 className='text-3xl font-semibold '>{info?.title}</h2>
          </div>
          <div className='flex items-center gap-2 md:gap-3'>
            <FaClock></FaClock>
            <h2 className='mt-5 mb-5 text-sm pe-2 '>{info?.publishing_date}</h2>
          </div>
        </div>
        <h2>{info?.content}</h2>

        <div className='mt-10'>
          <CommentSection blogId={blogId}></CommentSection>
        </div>
      </div>

      <div>
        <div className='pt-40'>
          <h2 className='mb-10 text-2xl text-center'>More Blogs for you</h2>

          <h2 className='mb-10 text-2xl text-center'>More Blogs for you</h2>

          <div className='container grid-cols-4 gap-5 px-10 mx-auto md:grid'>
            {smallCards.slice(0, displayCard).map(smallCard => (
              <UnderSingleBlog
                key={smallCard._id}
                smallCard={smallCard}
              ></UnderSingleBlog>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewBlogDetails
