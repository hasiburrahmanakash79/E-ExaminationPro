import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../Provider/AuthProvider'
import useAxiosSecure from '../../../Hooks/useAxiosSecure.jsx/useAxiosSecure'
import defaultPic from '../../../assets/userPro.png'
const Profile = () => {
  const { user, loading } = useContext(AuthContext)
  const [axiosSecure] = useAxiosSecure()
  const {
    data: info,
    refetch,
    isLoading: p_loading
  } = useQuery({
    queryKey: ['profile_Info', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user?email=${user?.email}`)
      //console.log(res);
      return res.data
    }
  })
  return (
    <div className='navigation-bar2 container mx-auto md:p-10'>
      <div className='card  mx-auto'>
        <div className='card-body'>
          <div className='md:flex justify-center md:gap-10 gap-5 items-center'>
            <div className='text-center lg:text-left flex flex-col '>
              <img
                src={info?.photoURL ? info?.photoURL : defaultPic}
                className=' h-80  border-2   rounded-lg mb-2 p-3 w-80'
                alt=''
              />
            </div>
            <div>
              <div className='form-control  grid sm:grid-cols-6 mt-2'>
                <label className='label col-span-1'>
                  <span className='label-text '>Name:</span>
                </label>
                <h1 className=' col-span-5 input input-sm   ag-transparent shadow-xl'>
                  {info?.displayName}
                </h1>
              </div>

              <div className='form-control  grid sm:grid-cols-6 my-2'>
                <label className='label col-span-1'>
                  <span className='label-text '>Email:</span>
                </label>
                <h1 className='col-span-5 input input-sm   ag-transparent shadow-xl'>
                  {info?.email}
                </h1>
              </div>

              <div className='form-control grid sm:grid-cols-6 my-2'>
                <label className='label col-span-1'>
                  <span className='label-text '>Batch:</span>
                </label>
                <h1 className='col-span-5 input input-sm   ag-transparent shadow-xl'>
                  {info?.batch ? info.batch : 'Add Batch in Edit Profile'}
                </h1>
              </div>
              <div className='form-control  grid sm:grid-cols-6 my-2'>
                <label className='label col-span-1'>
                  <span className='label-text '>Gender:</span>
                </label>
                <h1 className='col-span-5 input input-sm   ag-transparent shadow-xl'>
                  {info?.gender ? info.gender : 'Add Gender in Edit Profile'}
                </h1>
              </div>
              <div className='form-control grid sm:grid-cols-6 my-2'>
                <label className='label col-span-1'>
                  <span className='label-text '>Address:</span>
                </label>
                <h1 className='col-span-5 input input-sm   ag-transparent shadow-xl'>
                  {info?.address ? info.address : 'Add Address in Edit Profile'}
                </h1>
              </div>
              <div className='form-control grid h-auto sm:grid-cols-6 my-2'>
                <label className='label col-span-1'>
                  <span className='label-text '>Mobile:</span>
                </label>
                <h1 className='col-span-5 input input-sm   ag-transparent shadow-xl'>
                  {info?.mobile ? info.mobile : 'Add Mobile in Edit Profile'}
                </h1>
              </div>
              <Link to='/updateProfile'>
                <button className='btn btn-primary mt-5'>Edit Profile</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
