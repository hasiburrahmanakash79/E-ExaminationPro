import { useEffect, useState, lazy, Suspense } from 'react'
import examPic from '../../../assets/exam.jpg'
import Achievement from '../Achievement/Achievement'
import Banner from '../Banner/Banner'
const DemoTestSection = lazy(() => import('../DemoTest/DemoTestSection'))
const Faq = lazy(() => import('../Faq/Faq'))
const Testimonial = lazy(() => import('../Testimonial/Testimonial'))
const TopSubjects = lazy(() => import('../TopSubjects/TopSubjects'))
import { Helmet } from 'react-helmet-async'
const MainContact = lazy(() => import('../../Contact/MainContact'))
const Pricing = lazy(() => import('../Pricing/Pricing'))
import ChatButton from '../ChatBot/ChatButton'
import Loading from '../../../Components/Loading/Loading'
const HomePage = () => {
  //console.log(window.localStorage.getItem('showMainContent'))
  const [showMainContent, setShowMainContent] = useState(
    window.localStorage.getItem('showMainContent') === null ? false : true
  )

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShowMainContent(true)
      window.localStorage.setItem('showMainContent', 'true')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (showMainContent) {
    const a = () => {
      window.scrollTo(0, 0)
    }
    a()
  }
  return (
    <div className='relative'>
      <Helmet>
        <title>E-ExamPro </title>
      </Helmet>
      <div
        className={`hero min-h-[100vh]  transition-all duration-700 ${
          showMainContent ? '  opacity-0 hidden' : 'opacity-100 '
        }`}
        style={{ backgroundImage: `url(${examPic})` }}
      >
        <div className='hero-overlay ag-opacity-60'></div>
        <div className='text-center hero-content '>
          <div className=''>
            <h1 className='mb-5 text-6xl font-bold'>Welcome to E-ExamPro</h1>
            <p className='mb-5 '></p>
          </div>
        </div>
      </div>

      <div
        className={`md:-mt-20 transition-opacity duration-700 ${
          showMainContent ? '  opacity-100' : 'opacity-0'
        } primary-bg2 `}
      >
        <Banner />
        <div className='container px-5 mx-auto'>
          <Suspense fallback={<Loading />}>
            <DemoTestSection />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <TopSubjects />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <Achievement />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <MainContact />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <Pricing />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <Faq />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <Testimonial />
          </Suspense>
        </div>
      </div>
      <ChatButton />
    </div>
  )
}

export default HomePage
