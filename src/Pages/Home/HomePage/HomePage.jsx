import { useEffect, useState } from 'react'
import examPic from '../../../assets/exam.jpg'
import QuesAccordian from '../../../Components/QuesAccordian/QuesAccordian'
import Achievement from '../Achievement/Achievement'
import Banner from '../Banner/Banner'
import DemoTestSection from '../DemoTest/DemoTestSection'
import Faq from '../Faq/Faq'
import Testimonial from '../Testimonial/Testimonial'
import TopSubjects from '../TopSubjects/TopSubjects'
import ShortcutKey from '../../../Components/ShortcutKey/ShortcutKey'
const HomePage = () => {
  console.log(window.localStorage.getItem('showMainContent'))
  const [showMainContent, setShowMainContent] = useState(window.localStorage.getItem('showMainContent') === null ? false : true);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShowMainContent(true)
      window.localStorage.setItem('showMainContent', 'true')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  if (showMainContent) {
    const a = () => {
      window.scrollTo(0, 0)
    }
    a()
  }
  console.log(window.scrollY)
  console.log(showMainContent)

  return (
    <div className=''>
      <div className={`hero min-h-[100vh]  transition-all duration-700 ${showMainContent ? '  opacity-0 hidden' : 'opacity-100 '}`} style={{ backgroundImage: `url(${examPic})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-6xl text-white font-bold">Welcome to E-ExamPro</h1>
            <p className="mb-5  text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

          </div>
        </div>
      </div>

      <div className={`transition-opacity duration-700 ${showMainContent ? '  opacity-100' : 'opacity-0'} navigation-bar2 `}>
        <Banner />
        <DemoTestSection />
        <TopSubjects />
        <Achievement />
        <Testimonial />
        <Faq />
      </div>
    </div>
  )
}

export default HomePage
