import './Authentication.css'
import React, { useEffect, useState, useContext } from 'react'
import { Link, json, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import SocialLogin from '../../../Hooks/SocialLogin/SocialLogin'
import { AuthContext } from '../../../Provider/AuthProvider'
import Swal from 'sweetalert2'
import Loading from '../../../Components/Loading/Loading'
import { Helmet } from 'react-helmet-async'
import Lottie from 'lottie-react'
import educationLottie from "../../../assets/animationFile/educational.json"
const Login = () => {
  const [passShow, setPassShow] = useState(false)
  const [randomNumbers, setRandomNumbers] = useState([])
  const [isButtonEnable, setIsButtonEnable] = useState(false)
  const { logInUser, loading } = useContext(AuthContext)

  const navigate = useNavigate()
  // const location = useLocation()

  // const from = location.state?.from?.pathname || '/'

  useEffect(() => {
    const newRandomNumbers = Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * 10)
    )
    setRandomNumbers(newRandomNumbers)
  }, [])

  const handleInputChange = event => {
    setIsButtonEnable(event.target.value === randomNumbers.join(''))
  }
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()


  const onSubmit = data => {
    logInUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user
        navigate('/welCome')
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className='Auth_bg'>
      <Helmet>
        <title>Login | E-ExamPro</title>
      </Helmet>
      <div className='min-h-screen hero'>
        <div className='items-center justify-between gap-12 px-3 md:flex'>
          <div className='md:w-1/2'>
            {/* <img src='https://i.ibb.co/jDMz1bj/login-page-banner.png' alt='' /> */}
            <Lottie
              animationData={educationLottie}
              loop={true} className=" md:w-10/12 mx-auto" />
          </div>
          <div className='flex-shrink-0 w-full  ag-transparent border   rounded-lg shadow-xl md:w-1/2 card backdrop-blur-sm'>
            <div className='text-center '>
              <h1 className='my-5 text-4xl font-bold '>Login</h1>
            </div>
            <div className='card-body'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-control'>
                  <label className='label'>
                    <span className='font-bold label-text'>Email</span>
                  </label>
                  <input
                    {...register('email', { required: true })}
                    type='email'
                    placeholder='email'
                    className=' ag-transparent input input-bordered'
                  />
                  {errors.email && (
                    <span className='mt-1 aext-red-500'>
                      Email field is required
                    </span>
                  )}
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Password</span>
                  </label>
                  <input
                    {...register('password', { required: true })}
                    type={passShow ? 'text' : 'password'}
                    placeholder='enter your password'
                    className=' ag-transparent input input-bordered'
                  />
                  <div className='flex justify-between mb-5 '>
                    <a onClick={() => setPassShow(!passShow)}>
                      <small>
                        {passShow ? (
                          <span>Hide Pass</span>
                        ) : (
                          <span>Show Pass</span>
                        )}
                      </small>
                    </a>
                    <a href='#'>Forgot password?</a>
                  </div>
                </div>
                <div className='form-control '>
                  <input
                    className='btn btn-primary '
                    type='submit'
                    value={'Login'}
                  />
                </div>
              </form>
              <div className='text-center mb-7'>
                <div className='divider divide-red-50'></div>
                <p className='font-semibold'>Or Sign In with</p>
                <div className='flex items-center justify-center gap-4 my-2'>
                  <SocialLogin></SocialLogin>
                </div>
                <p className='text-center'>
                  Don't Have Any Account?{' '}
                  <Link className='link link-hover' to='/signUp'>
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

export default Login
