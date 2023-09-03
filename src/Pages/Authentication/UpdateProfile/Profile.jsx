import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import useAxiosSecure from '../../../Hooks/useAxiosSecure.jsx/useAxiosSecure';

const Profile = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data: info, refetch, isLoading: p_loading } = useQuery({
        queryKey: ['profile_Info', user?.email],
        enabled: !loading,
        queryFn: async () => {

            const res = await axiosSecure.get(`/user?email=${user?.email}`);
            console.log(res)
            return res.data;
        }
    })
    return (
        <div className="navigation-bar2 md:mx-20" >
            <Link to='/updateProfile'><button className='text-xl btn btn-primary mt-4  mx-4'>Edit Profile</button></Link>
            <div className="card  mx-auto">
                <div className="card-body">
                    <div className='grid md:gap-10 md:grid-cols-2 gap-5 grid-cols-1 items-center'>
                        <div className="text-center lg:text-left flex flex-col ">
                            <img src={info?.photoURL} className=' border-2 border-white rounded-lg mb-2 p-3 w-80' alt="" />
                        </div>
                        <div>

                            <div className="form-control  grid grid-cols-6 mt-2">
                                <label className="label col-span-1">
                                    <span className="label-text text-white">Name:</span>
                                </label>
                                <h1 className=' col-span-5 input input-sm text-slate-900 bg-slate-200 shadow-lg'>{info?.displayName}</h1>
                            </div>

                            <div className="form-control  grid grid-cols-6 my-2">
                                <label className="label col-span-1">
                                    <span className="label-text text-white">Email:</span>
                                </label>
                                <h1 className=' col-span-5 input input-sm text-slate-900 bg-slate-200 shadow-lg'>{info?.email}</h1>
                            </div>

                            <div className="form-control grid grid-cols-6 my-2">
                                <label className="label col-span-1">
                                    <span className="label-text text-white">Batch:</span>
                                </label>
                                <h1 className=' col-span-5 input input-sm text-slate-900 bg-slate-200 shadow-lg'>{info?.batch ? info.batch : 'Add Batch in Edit Profile'}</h1>
                            </div>
                            <div className="form-control  grid grid-cols-6 my-2">
                                <label className="label col-span-1">
                                    <span className="label-text text-white">Gender:</span>
                                </label>
                                <h1 className=' col-span-5 input input-sm text-slate-900 bg-slate-200 shadow-lg'>{info?.gender ? info.gender : 'Add Gender in Edit Profile'}</h1>

                            </div>
                            <div className="form-control grid grid-cols-6 my-2">
                                <label className="label col-span-1">
                                    <span className="label-text text-white">Address:</span>
                                </label>
                                <h1 className=' col-span-5 input input-sm text-slate-900 bg-slate-200 shadow-lg'>{info?.address ? info.address : 'Add Address in Edit Profile'}</h1>
                            </div>
                            <div className="form-control grid  grid-cols-6 my-2">
                                <label className="label col-span-1">
                                    <span className="label-text text-white">Mobile:</span>
                                </label>
                                <h1 className=' col-span-5 input input-sm text-slate-900 bg-slate-200 shadow-lg'>{info?.mobile ? info.mobile : 'Add Mobile in Edit Profile'}</h1>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;