
import { FaClock } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import details from '../../../../public/fakeblog.json';
// import ShowCommentApp from "../ForComments/ShowCommentApp";
import { useEffect, useState } from "react";
import UnderSingleBlog from '../../../Pages/BlogPage/NewBlog/UnderSingleBlog';
import CommentSection from "../../Home/Faq/CommentSection";


const NewBlogDetails = () => {


  const [smallCards, setSmallCard] = useState([]);
  const [displayCard, setDisplayCard] = useState(4)

  useEffect(() => {
    fetch('../../../../public/fakeblog.json')
      .then(res => res.json())
      .then(data => setSmallCard(data))
  }, [])



  const { id, image_url, publishing_date, content } = useParams();
  console.log(id);

  const info = details.find((detail) => detail.id == id)
  return (
    <div className='md:py-20 py-5'>
      <img className='mx-auto md:w-1/2 px-5' src={info?.image_url} alt="" />
      <div className='mx-auto mb-20 md:w-1/2 px-5'>
        <div className='flex items-center justify-between mt-5 mb-5 md:mb-10'>
          <div>
            <h2 className='text-3xl font-semibold '>{info?.title}</h2>
          </div>
          <div className='flex items-center gap-2 md:gap-3'>
            <FaClock></FaClock><h2 className='text-sm mb-5 mt-5 pe-2
          '>{info?.publishing_date}</h2>
          </div>
        </div>
        <h2 >{info?.content}</h2>

        <div className="mt-10">
          <CommentSection ></CommentSection>
        </div>
      </div>




      <div>
        <div className='pt-40'>


          <h2 className='text-center text-2xl mb-10'>
            More Blogs for you
          </h2>

          <div className='md:grid grid-cols-4 gap-5 container px-10 mx-auto'>
            {
              smallCards.slice(0, displayCard).map(smallCard => <UnderSingleBlog
                key={smallCard.id}
                smallCard={smallCard}

              ></UnderSingleBlog>)
            }
          </div>


        </div>
      </div>

    </div>
  );
};

export default NewBlogDetails;