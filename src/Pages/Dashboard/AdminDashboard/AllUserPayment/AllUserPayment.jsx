import React, { useState } from 'react';

const AllUserPayment = () => {
    const [paymentInfo, setPaymentInfo] = useState([]);
    useEffect(() => {
      fetch(`http://localhost:5000/history`)
        .then((res) => res.json())
        .then((data) => {
          setPaymentInfo(data);
        });
    }, []);
    console.log(paymentInfo);
    return (
      <div>
        <h1 className="md:text-4xl text-2xl text-center my-5">All User Payment History</h1>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Serial</th>
                <th>Name</th>
                <th>Email</th>
                <th>Transaction ID</th>
                <th>Package Name</th>
                <th>Date</th>
                <th>Atatus</th>
              </tr>
            </thead>
            <tbody>
              {/* row  */}
              {paymentInfo.map((history, index) => (
                <tr key={history._id} className="hover">
                  <td>{index + 1}</td>
                  <td>{history.displayName}</td>
                  <td>{history.email}</td>
                  <td>{history.transactionId}</td>
                  <td>{history.packageName}</td>
                  <td>{history.date}</td>
                  <td>{history.Status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

export default AllUserPayment;