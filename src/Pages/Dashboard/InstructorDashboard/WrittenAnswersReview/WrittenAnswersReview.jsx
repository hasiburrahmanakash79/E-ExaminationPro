import React from 'react'
import useWrittenReviews from '../../../../Hooks/useWrittenReviews/useWrittenReviews'
import { Link } from 'react-router-dom'
import Loading from '../../../../components/Loading/Loading'
const WrittenAnswersReview = () => {
  const [writtenAnswers, loading, refetch] = useWrittenReviews()
  if (loading) {
    return <Loading />
  }
  return (
    <div>
      <h1 className='text-lg text-center md:text-4xl md:my-6'>
        Review written answers
      </h1>
      <div>
        <h3 className='text-2xl text-center'>Student submissions</h3>
        <div className='overflow-x-auto'>
          <table className='table table-xs table-pin-rows '>
            {/* head */}
            <thead className='text-primary'>
              <tr>
                <th>
                  <label>#</label>
                </th>
                <th>Name</th>
                <th>Date</th>
                <th>Subject</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {writtenAnswers.map((answer, index) => (
                <tr key={answer._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div>
                      <div className='font-bold'>{answer.stu_name}</div>
                      <div className='text-sm opacity-50'>
                        {answer.stu_email}
                      </div>
                    </div>
                  </td>
                  <td>
                    {answer.date}

                    <span className='mx-2 badge badge-ghost badge-sm'>
                      {answer.sub_code}
                    </span>
                  </td>
                  <td>{answer.subjectName}</td>
                  <th>
                    <Link
                      to={`/dashboard/singleUserAnswer/${answer._id}`}
                      className='btn btn-ghost btn-xs'
                    >
                      details
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default WrittenAnswersReview
