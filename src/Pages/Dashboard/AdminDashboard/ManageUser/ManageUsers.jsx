import { useQuery } from '@tanstack/react-query'
import { FaTrashAlt } from 'react-icons/fa'
import Swal from 'sweetalert2'

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await fetch('https://e-exam-pro-server.vercel.app/users')
    return res.json()
  })

  const handleMakeAdmin = user => {
    fetch(`https://e-exam-pro-server.vercel.app/users/admin/${user._id}`, {
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
    fetch(`https://e-exam-pro-server.vercel.app/users/instructor/${user._id}`, {
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
        fetch(`https://e-exam-pro-server.vercel.app/users/${user._id}`, {
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

  return (
    <div>
      <h2 className='text-2xl my-3'>Manage Users: {users.length}</h2>
      <div className='overflow-x-auto p-4'>
        <table className='table'>
          {/* git */}
          <thead>
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
            {users.map((user, index) => (
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
                      className=' ag-purple-700 btn btn-ghost btn-sm'
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
                      className=' ag-purple-700 btn btn-ghost btn-sm'
                    >
                      Admin
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className='btn  ag-red-600 btn-ghost btn-sm'
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageUsers
