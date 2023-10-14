import { Link } from 'react-router-dom'
import { FaArrowCircleRight } from 'react-icons/fa'
import { Helmet } from 'react-helmet-async'

const NoticeBoard = () => {
  return (
    <>
      <Helmet>
        <title> Notice Board | E-ExamPro</title>
      </Helmet>
      <div>
        <h2 className='text-2xl'>Notice Board</h2>
      </div>

      <div className='overflow-x-auto'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr>
              <th className='text-xl text-center'>Subject</th>
              <th className='text-xl text-center'>Date</th>
              <th className='text-xl text-center'>Apply</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            <tr>
              <td className='text-lg font-medium text-center'>English</td>
              <td className='text-lg font-medium text-center'>14-09-2023</td>
              <td className='text-center'>
                <Link
                  to='/dashboard/upcomingLiveExam'
                  className='hover:text-primary'
                >
                  <button>
                    <FaArrowCircleRight size={30} />
                  </button>
                </Link>
              </td>
            </tr>
            <tr>
              <td className='text-lg font-medium text-center'>Chemistry</td>
              <td className='text-lg font-medium text-center'>14-09-2023</td>
              <td className='text-center'>
                <Link
                  to='/dashboard/upcomingLiveExam'
                  className='hover:text-primary'
                >
                  <button>
                    <FaArrowCircleRight size={30} />
                  </button>
                </Link>
              </td>
            </tr>
            <tr>
              <td className='text-lg font-medium text-center'>Physics</td>
              <td className='text-lg font-medium text-center'>14-09-2023</td>
              <td className='text-center'>
                <Link
                  to='/dashboard/upcomingLiveExam'
                  className='hover:text-primary'
                >
                  <button>
                    <FaArrowCircleRight size={30} />
                  </button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default NoticeBoard
