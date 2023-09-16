import React, { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const SocialLogin = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'

  const { googleSignIn } = useContext(AuthContext)

  // googleLogin
  const handleGoogleLogin = () => {
    googleSignIn()
      .then(result => {
        const signInUser = result.user

        const userInfo = {
          displayName: signInUser.displayName,
          email: signInUser.email,
          photoURL: signInUser.photoURL
        }
        fetch('https://e-exam-pro-server.vercel.app/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(userInfo)
        })
          .then(res => res.json())
          .then(() => {
            navigate(from, { replace: true })
            Swal.fire({
              showConfirmButton: false,
              timer: 2000,
              title: 'Login Successful',
              icon: 'success'
            })
          })
      })
      .catch(error => console.log(error))
  }
  return (
    <div>
      <button onClick={() => handleGoogleLogin()}>
        <img src='https://i.ibb.co/KjQdbSD/image.png' alt='' className='w-6' />
      </button>
    </div>
  )
}

export default SocialLogin
