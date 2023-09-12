import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../../Provider/AuthProvider'
import { Helmet } from 'react-helmet-async'

const PaymentHistory = () => {
  const [paymentInfo, setPaymentInfo] = useState([])
  const { user } = useContext(AuthContext)

  useEffect(() => {
    fetch(`http://localhost:4000/history/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setPaymentInfo(data)
      })
  }, [])
  console.log(paymentInfo)
  return (
    <div>
      <Helmet><title>E-ExamPro | Payment History </title></Helmet>
      <h1 className='md:text-4xl text-2xl text-center my-5'>
        Your Payment history
      </h1>
      <div className='overflow-x-auto'>
        <table className='table'>
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {paymentInfo.map((history, index) => (
              <tr key={history._id} className='hover'>
                <td>{index + 1}</td>
                <td>{history.price}</td>
                <td>{history.transactionId}</td>
                <td>{history.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PaymentHistory
