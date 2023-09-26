import { useQuery } from '@tanstack/react-query'
import { FaTrashAlt } from 'react-icons/fa'
import Swal from 'sweetalert2'
import Pagination from '../../../../Components/Pagination/Pagination'
import { useState } from 'react'

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await fetch('http://localhost:4000/users')
    return res.json()
  })

  const handleMakeAdmin = user => {
    fetch(`http://localhost:4000/users/admin/${user._id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        refetch()
        if (data.modifiedCount) {
          Swal.fire({
            showConfirmButton: false,
            timer: 1500,
            title: `${user.displayName} is admin now`,
            icon: 'success'
          })
        }
      })
  }

  const handleMakeInstructor = user => {
    fetch(`http://localhost:4000/users/instructor/${user._id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        //console.log(data)
        refetch()
        if (data.modifiedCount) {
          Swal.fire({
            showConfirmButton: false,
            timer: 1500,
            title: `${user.displayName} is Instructor now`,
            icon: 'success'
          })
        }
      })
  }

  const handleDeleteUser = user => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to remove this user!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/users/${user._id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            refetch()
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'User has been deleted.', 'success')
            }
          })
      }
    })
  }

  ////////---------------------------------Pagination
  const [currentPage, setCurrentPage] = useState(0)
  const [itemsPerPage, setItemPerPage] = useState(12); // Number of items to display per page
  const totalItems = users?.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = users.slice(startIndex, endIndex)



  return (
    <div>
      <h2 className='my-3 text-2xl'>Manage Users: {users.length}</h2>
      <div className='overflow-x-auto p-4 min-h-[80vh]'>
        <table className='table'>
          {/* git */}
          <thead className='text-sm text-accent'>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Make Instructor</th>
              <th>Make Admin</th>
              <th>Delete user</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {displayedData?.map((user, index) => (
              <tr key={user._id} className='hover'>
                <td>{index + 1}</td>
                <td>{user.displayName}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td className=''>
                  {user.role === 'instructor' ? (
                    <button className='btn btn-disabled btn-xs'>
                      Instructor
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className=' bg-secondary btn btn-ghost btn-sm'
                    >
                      Instructor
                    </button>
                  )}
                </td>
                <td>
                  {user.role === 'admin' ? (
                    <button className='btn btn-disabled btn-xs'>Admin</button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className=' bg-warning btn btn-ghost btn-sm'
                    >
                      Admin
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className='text-white bg-red-700 rounded-md btn-sm'
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='flex justify-center my-6'>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></Pagination>
      </div>

    </div>
  )
}

export default ManageUsers
