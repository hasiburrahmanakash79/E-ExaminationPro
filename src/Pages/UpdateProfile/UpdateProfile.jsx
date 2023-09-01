import React from 'react';
import { useForm } from 'react-hook-form';
import profile from '../../assets/up.png'
import useAxiosSecure from '../../Hooks/useAxiosSecure.jsx/useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
const UpdateProfile = () => {
    const {user,loading}=useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()

    if(loading){
        return <h1>Loading.....</h1>
    }

    const onSubmit = (data) => {
        axiosSecure.patch(`/updateProfile?email=${user?.email}`, data)
                        .then(data => {
                            if (data.data.insertedId) {
                              
                                console.log('updated')
                            }
                        })
    }


    return (
        <div className=''>
            <div className="navigation-bar2" >
                <div className='flex justify-center'>

                    <div className="  items-center grid md:grid-cols-2 grid-cols-1">
                        <div className="text-center lg:text-left">
                            <img src={profile} className='w-[full]' alt="" />
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-control ">
                                        <label className="label"> 
                                            <span className="label-text">Batch:</span>
                                        </label>
                                        <input
                                            className='input text-slate-900 bg-slate-200 shadow-lg'    {...register("batch", { required: false })}
                                            aria-invalid={errors.batch ? "true" : "false"}
                                        />
                                        {errors.batch && (
                                            <p role="alert">Batch is required</p>
                                        )}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Gender</span>
                                        </label>
                                        <input
                                            className='input text-slate-900 bg-slate-200 shadow-lg'    {...register("gender", { required: false })}
                                            aria-invalid={errors.gender ? "true" : "false"}
                                        />
                                        {errors.gender && (
                                            <p role="alert">Gender is required</p>
                                        )}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Change Address</span>
                                        </label>
                                        <input
                                            className='input text-slate-900 bg-slate-200 shadow-lg'    {...register("address", { required: false })}
                                            aria-invalid={errors.address ? "true" : "false"}
                                        />
                                        {errors.address && (
                                            <p role="alert">Address is required</p>
                                        )}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Change Mobile</span>
                                        </label>
                                        <input
                                            className='input text-slate-900 bg-slate-200 shadow-lg'    {...register("mobile", { required: false })}
                                            aria-invalid={errors.mobile ? "true" : "false"}
                                        />
                                        {errors.mobile && (
                                            <p role="alert">Mobile is required</p>
                                        )}
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Update Profile</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;