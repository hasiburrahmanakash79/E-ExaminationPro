import axios from 'axios'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthProvider'

const axiosSecure = axios.create({
 // baseURL: 'https://e-exam-pro-server.vercel.app'
<<<<<<< HEAD
  baseURL: 'http://localhost:5000'
=======
  baseURL: 'http://localhost:5000/'
>>>>>>> 0878a28c16f3c1c3afdb41c4211a3c42d594e4ce
})

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    axiosSecure.interceptors.request.use(config => {
      const token = localStorage.getItem('access-token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    })

    axiosSecure.interceptors.response.use(
      response => response,
      async error => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logOut()
          navigate('/login')
        }
        return Promise.reject(error)
      }
    )
  }, [logOut, navigate])

  return [axiosSecure]
}

export default useAxiosSecure
