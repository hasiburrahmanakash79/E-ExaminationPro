import { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import SocialLogin from '../../../Hooks/SocialLogin/SocialLogin'
import { AuthContext } from '../../../Provider/AuthProvider'
import { Helmet } from 'react-helmet-async'
import Lottie from 'lottie-react'
import registerLottie from "../../../assets/animationFile/login.json"
import { sendEmailVerification } from 'firebase/auth'
const Registration = () => {
  const [passShow, setPassShow] = useState(false)
  const [msg, setMsg] = useState('')
  const { signUpUser, updateUserInfo, loading } = useContext(AuthContext)

  const navigate = useNavigate()

  const img_token = import.meta.env.VITE_Image_Key
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_token}`

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()
  const password = watch('password')

  const onSubmit = data => {
    setMsg('')
    signUpUser(data.email, data.password).then(result => {
      const loggedUser = result.user
      // navigate(from, { replace: true })
      //navigate("/welcome")

      sendEmailVerification(loggedUser).then(() => {
        // Email verification sent!
        // ...
        setMsg('Verify Your Email')
      })

      const formData = new FormData()
      formData.append('image', data.image[0])
      fetch(img_hosting_url, {
        method: 'POST',
        body: formData
      })
        .then(res => res.json())
        .then(imgResponse => {
          const imgURL = imgResponse.data.display_url

          updateUserInfo(data.name, data.photo)
            .then(() => {
              const userInfo = {
                displayName: data.name,
                email: data.email,
                photoURL: imgURL,
                role: 'user'
              }
              fetch('https://e-exam-pro-server.vercel.app/users', {
                method: 'POST',
                headers: {
                  'content-type': 'application/json'
                },
                body: JSON.stringify(userInfo)
              })
                .then(res => res.json())
                .then(data => {
                  if (data.insertedId) {
                    //navigate("/welcome")

                    sendEmailVerification(loggedUser).then(() => {
                      // Email verification sent!
                      // ...
                      setMsg('Verify Your Email')
                    })
                  }
                })
            })
            .catch(error => console.log(error.message))
        })
    })
  }
  return (
    <div>
      <Helmet>
        <title>Registration | E-ExamPro</title>
      </Helmet>
      <div className='container min-h-screen mx-auto hero text-primary'>
        <div className='items-center justify-between gap-10 px-3 md:flex'>
        <div className='md:w-1/2 md:mb-0 mb-10'>
            <Lottie
              animationData={registerLottie}
              loop={true}
            />
          </div>
          <div className='flex-shrink-0 w-full border rounded-lg shadow-xl ag-transparent md:w-1/2 card backdrop-blur-sm'>
            <div className='text-center '>
              <h1 className='my-5 text-4xl font-bold '>Registration</h1>
            </div>
            <div className=' card-body'>
              <form onSubmit={handleSubmit(onSubmit)} className='! '>
                <div className='grid-cols-2 gap-3 md:grid'>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Name</span>
                    </label>
                    <input
                      {...register('name', { required: true })}
                      type='text'
                      placeholder='Enter your name'
                      className=' bg-transparent input border border-secondary'
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
                      className=' bg-transparent input border border-secondary'
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
                      className=' bg-transparent input border border-secondary'
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
                      className=' bg-transparent input border border-secondary'
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
                      className=' bg-transparent input border border-secondary'
                    />
                    {errors.number && <span>This field is required</span>}
                  </div>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Image</span>
                    </label>
                    <div className=' bg-transparent rounded-md border border-secondary form-control '>
                      <input
                        {...register('image', { required: true })}
                        name='image'
                        type='file'
                        className='w-full col-span-5 ag-transparent file-input'
                      />
                    </div>
                    {errors.image && (
                      <span className='mt-1 text-red-500'>
                        Image field is required
                      </span>
                    )}
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
                    className=' bg-transparent input border border-secondary'
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
                <p className='text-center text-red-500'> {msg}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration
