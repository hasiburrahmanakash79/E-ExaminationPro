import Footer from '../Shared/Footer/Footer'
import Navbar from '../Shared/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div
      className={`
    `}
    >
      <Navbar />
      <div className='min-h-[calc(100vh-390px)]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Main
