import React from 'react';
import { useForm } from 'react-hook-form';
import profile from '../../../assets/up.png'

import { useContext } from 'react';

import useAxiosSecure from '../../../Hooks/useAxiosSecure.jsx/useAxiosSecure';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const UpdateProfile = () => {

    const img_token = import.meta.env.VITE_Image_Key;
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_token}`

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
    console.log(info)

    const onSubmitData = (event) => {

        event.preventDefault();
        const form = event.target;
        const batch = form.batch.value;
        const mobile = form.mobile.value;
        const address = form.address.value;
        const gender = form.gender.value;
        const data = { batch, mobile, address, gender }
        const formData = new FormData();

        formData.append('image',form.image.files[0])
        console.log(formData)

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const data2 = { photoURL: imgURL, ...data }
                    console.log(data2)
                    axiosSecure.patch(`/updateProfile?email=${user?.email}`, data2)
                        .then(data => {
                            console.log(data)
                            if (data.data.modifiedCount) {
                                refetch()
                                console.log('updated')
                            }
                        })
                }
            })
    }

    if( p_loading ){
return <h1>Loading...........</h1>        
    }

    return (
        <div className="navigation-bar2 md:mx-20" >
            <h1 className='text-2xl mt-4  mx-4'>Edit Profile:</h1>
            <div className="card  mx-auto">
                <div className="card-body">
                    <form onSubmit={() => onSubmitData} className='grid md:gap-20 md:grid-cols-2 gap-5 grid-cols-1'>
                        <div className="text-center lg:text-left flex flex-col ">

                            <img src={info?.photoURL} className=' border-2 border-white rounded-lg mb-2 p-3 h-48   w-48  mx-auto' alt="" />

                            <div className='grid grid-cols-1'>


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

                                <div className="form-control grid grid-cols-6 mb-2 items-center">
                                    <label className="label  col-span-1">
                                        <span className="label-text text-white">Change Image</span>
                                    </label>
                                    <input  type="file" className=' col-span-5 file-input file-input-sm w-full shadow-lg' />
                                </div>


                            </div>
                        </div>
                        <div>
                            <div className="form-control grid grid-cols-6 my-2">
                                <label className="label col-span-1">
                                    <span className="label-text text-white">Batch:</span>
                                </label>
                                <input
                                    name='batch' className='col-span-5 input input-sm text-slate-900 bg-slate-200 shadow-lg' value={info?.batch}
                                />
                            </div>
                            <div className="form-control  grid grid-cols-6 my-2">
                                <label className="label col-span-1">
                                    <span className="label-text text-white">Gender:</span>
                                </label>
                                <input
                                    name='gender' className=' col-span-5 input input-sm text-slate-900 bg-slate-200 shadow-lg' value={info?.gender}
                                />

                            </div>
                            <div className="form-control grid grid-cols-6 my-2">
                                <label className="label col-span-1">
                                    <span className="label-text text-white">Address:</span>
                                </label>
                                <input
                                    name='address' className='col-span-5 input input-sm text-slate-900 bg-slate-200 shadow-lg' value={info?.address}
                                />
                            </div>
                            <div className="form-control grid  grid-cols-6 my-2">
                                <label className="label col-span-1">
                                    <span className="label-text text-white">Mobile:</span>
                                </label>
                                <input
                                 value={info?.mobile}   className='col-span-5 input input-sm text-slate-900 bg-slate-200 shadow-lg' name='mobile'
                                />

                            </div>
                            <div className="form-control mt-6">
                                <input type='submit' className="btn w-1/2 mx-auto btn-primary" value='Update Profile' /> 
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default UpdateProfile;