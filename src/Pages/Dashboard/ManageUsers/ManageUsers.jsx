import { useQuery } from "@tanstack/react-query";


const ManageUsers = () => {
    
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("https://e-exam-pro-server.vercel.app/users");
    return res.json();
  });

  
  
  return (
    <div>
      <h2 className="text-2xl">Manage Users: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
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
              <tr key={user._id} className="hover">
                <td>{index + 1}</td>
                <td>{user.displayName}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td className="flex justify-center">
                  {user.role === "instructor" ? (
                    <button className="btn btn-disabled btn-xs">
                      Instructor
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className="bg-purple-700 btn btn-ghost btn-sm"
                    >
                      Instructor
                    </button>
                  )}
                </td>
                <td>
                  {user.role === "admin" ? (
                    <button className="btn btn-disabled btn-xs">
                      Admin
                    </button>
                  ) : (
                    <button onClick={() => handleMakeAdmin(user)} className="bg-purple-700 btn btn-ghost btn-sm">
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
  );
};

export default ManageUsers;
