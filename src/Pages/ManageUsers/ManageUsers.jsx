


import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';

const ManageUsers = () => {

  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await fetch('https://sports-academy-server-eta.vercel.app/users')
    return res.json();
  })

  const handleMakeAdmin = user => {
    fetch(`https://sports-academy-server-eta.vercel.app/users/admin/${user._id}`, {
      method: "PATCH"
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }

  const handleMakeInstructor = (user) => {
    fetch(`https://sports-academy-server-eta.vercel.app/users/instructor/${user._id}`, {
      method: "PATCH"
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `${user.name} is an Instructor Now!`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }

  const handleDelete = user => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Want to remove the User!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://sports-academy-server-eta.vercel.app/users/${user._id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                'Deleted!',
                'User has been removed.',
                'success'
              )
            }
          })
      }
    })
  }


  return (
    <div className='w-full ps-5'>


      <h3 className='text-2xl font-semibold  md:mb-10 text-orange-600'><span className='underline'>Amount of Users:</span> <span className='text-black font-bold '>{users.length}</span></h3>
      <div className="overflow-x-auto">
        <table className="table text-xl">
          {/* head */}
          <thead>
            <tr className='text-xl'>
              <th>

              </th>

              <th>Name</th>
              <th>Email</th>
              <th></th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => <tr key={user._id}>
                <th>
                  {index + 1}
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user.photo} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">{user.name}</div>

                    </div>
                  </div>
                </td>

                <td>{user.email}</td>
                <td>{user.role === 'instructor' ? 'instructor' :
                  <button onClick={() => handleMakeInstructor(user)} className="btn btn-sm bg-red-600 text-white hover:text-white hover:bg-red-800 ">Make Insturctor</button>
                }</td>
                <td>{user.role === 'admin' ? 'admin' :
                  <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-red-600 text-white hover:text-red-700 hover:bg-orange-500">  <FaUserShield className='text-xl text-white  '></FaUserShield></button>
                }</td>
                <td>
                  <button onClick={() => handleDelete(user)} className="btn btn-ghost hover:bg-red-600 text-white bg-black "><FaTrashAlt></FaTrashAlt></button>
                </td>
              </tr>)
            }


          </tbody>



        </table>
      </div>
    </div>
  );
};

export default ManageUsers;