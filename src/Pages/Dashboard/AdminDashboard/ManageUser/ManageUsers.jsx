import { useQuery } from '@tanstack/react-query'
import Swal from 'sweetalert2'

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await fetch('http://localhost:5000/users')
    return res.json()
  })

  const handleMakeAdmin = user => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
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
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
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

  return (
    <div>
      <h2 className='text-2xl'>Manage Users: {users.length}</h2>
      <div className='overflow-x-auto'>
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
                      className='bg-purple-700 btn btn-ghost btn-sm'
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
                      className='bg-purple-700 btn btn-ghost btn-sm'
                    >
                      Admin
                    </button>
                  )}
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
