import { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import SocialLogin from '../../../Hooks/SocialLogin/SocialLogin'
import Loading from '../../../Components/Loading/Loading'
import Swal from 'sweetalert2'
import useAuth from '../../../Hooks/useAuth/useAuth'
import { AuthContext } from '../../../Provider/AuthProvider'
const Registration = () => {
  const [passShow, setPassShow] = useState(false)
  const { signUpUser, updateUserInfo, loading } = useContext(AuthContext)

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()
  const password = watch('password')

  // if (loading) {
  //   return <Loading />;
  // }
  const onSubmit = data => {
    signUpUser(data.email, data.password).then(result => {
      const loggedUser = result.user
      navigate(from, { replace: true })
      console.log(loggedUser)

      updateUserInfo(data.name, data.photo)
        .then(() => {
          const userInfo = {
            displayName: data.name,
            email: data.email,
            photoURL: data.photo,
            role: 'user'
          }
          fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
          })
            .then(res => res.json())
            .then(data => {
              if (data.insertedId) {
                navigate(from, { replace: true })
                Swal.fire({
                  showConfirmButton: false,
                  timer: 1500,
                  title: 'Registration Successful',
                  icon: 'success'
                })
              }
            })
        })
        .catch(error => console.log(error.message))
    })
  }
  return (
    <div className='Auth_bg'>
      <div className='min-h-screen hero'>
        <div className='items-center justify-between gap-10 px-3 md:flex'>
          <div className='md:w-1/2'>
            <img src='https://i.ibb.co/jDMz1bj/login-page-banner.png' alt='' />
          </div>
          <div className='flex-shrink-0 w-full bg-transparent border border-black rounded-lg shadow-xl md:w-1/2 card backdrop-blur-sm'>
            <div className='text-center '>
              <h1 className='my-5 text-4xl font-bold text-white'>
                Registration
              </h1>
            </div>
            <div className='text-white card-body'>
              <form onSubmit={handleSubmit(onSubmit)} className='!text-white'>
                <div className='grid-cols-2 gap-3 md:grid'>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Name</span>
                    </label>
                    <input
                      {...register('name', { required: true })}
                      type='text'
                      placeholder='Enter your name'
                      className='bg-transparent input input-bordered'
                    />
                    {errors.name && <span>This field is required</span>}
                  </div>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Email</span>
                    </label>
                    <input
                      {...register('email', { required: true })}
                      type='email'
                      placeholder='Enter your email'
                      className='bg-transparent input input-bordered'
                    />
                    {errors.email && <span>This field is required</span>}
                  </div>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Password</span>
                    </label>
                    <input
                      {...register('password', {
                        required: 'Password field is required',
                        minLength: {
                          value: 6,
                          message: 'Password must be at least 6 characters'
                        }
                      })}
                      type={passShow ? 'text' : 'password'}
                      placeholder='Enter your password'
                      className='bg-transparent input input-bordered'
                    />
                    <label className='label'>
                      <a className='label-text-alt link link-hover'>
                        <p onClick={() => setPassShow(!passShow)}>
                          <small>
                            {passShow ? (
                              <span>Hide Pass</span>
                            ) : (
                              <span>Show Pass</span>
                            )}
                          </small>
                        </p>
                      </a>
                    </label>
                    {errors.password && <span>{errors.password.message}</span>}
                  </div>

                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Confirm Password</span>
                    </label>
                    <input
                      {...register('confirm', {
                        required: 'Confirm password field is required',
                        validate: value =>
                          value === password || 'Passwords do not match'
                      })}
                      type={passShow ? 'text' : 'password'}
                      placeholder='Confirm password'
                      className='bg-transparent input input-bordered'
                    />
                    {errors.confirm && <span>{errors.confirm.message}</span>}
                  </div>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Contact Number</span>
                    </label>
                    <input
                      {...register('number', { required: true })}
                      type='number'
                      placeholder='+880'
                      className='bg-transparent input input-bordered'
                    />
                    {errors.number && <span>This field is required</span>}
                  </div>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Photo URL</span>
                    </label>
                    <input
                      {...register('photo', { required: true })}
                      type='text'
                      placeholder='Photo URL'
                      className='bg-transparent input input-bordered'
                    />
                  </div>
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Address</span>
                  </label>
                  <input
                    {...register('address', { required: true })}
                    type='text'
                    placeholder='Enter your Address'
                    className='bg-transparent input input-bordered'
                  />
                </div>
                <div className='mt-5 form-control'>
                  <button className='btn btn-primary'>Registration</button>
                </div>
              </form>
              <div className='text-center'>
                <div className='divider divide-red-50'></div>
                <p className='font-semibold'>Or Sign In with</p>
                <div className='flex items-center justify-center gap-4 my-2'>
                  <SocialLogin></SocialLogin>
                </div>
                <p>
                  Already Have Any Account?{' '}
                  <Link className='link link-hover' to='/login'>
                    Click Here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration
