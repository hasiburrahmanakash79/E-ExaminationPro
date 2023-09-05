import { HiRocketLaunch, HiMapPin } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRef, useState } from 'react'
import contact from '../../assets/contact.png'

const Contact = () => {
  const form = useRef()
  const [msg, setMsg] = useState('')
  const sendEmail = e => {
    e.preventDefault()
    setMsg('')
    emailjs
      .sendForm(
        'service_sccjrni',
        'template_qrbc4xn',
        form.current,
        'tYJtdAx20n3Bxru2l'
      )
      .then(
        result => {
          if (result.text) {
            setMsg('Message Sent')
            toast.success('Message Sent.', {
              position: 'top-center',
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
              progress: undefined,
              theme: 'colored'
            })
          }
          console.log(result.text)
        },
        error => {
          console.log(error.text)
          setMsg('Message Limit is Over')
        }
      )
  }

  return (
    <div className='navigation-bar2 min-h-[50vh] py-16'>
      <div className='flex justify-center pt-3 mx-2'>
        <div className='grid items-center grid-cols-1 gap-5 md:grid-cols-2 md:gap-10'>
          <div 
          data-aos="fade-up"
           data-aos-duration="1400"
          >
            <img src={contact} alt='' />
          </div>
          <form 
          data-aos="fade-down" 
           data-aos-duration="1000"
          ref={form} onSubmit={sendEmail} className='pb-5 md:pt-20 card-body border border-blue-500 rounded-lg'>
            <div className=''>
              <div className='form-control'>
                <label className='label'>
                  <span className='text-lg font-semibold text-white label-text'>
                    Name
                  </span>
                </label>
                <input
                  required
                  name='name'
                  type='text'
                  placeholder='Name'
                  className='text-black border-2 bg-transparent input border-gray-200 '
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='text-lg font-semibold text-white label-text'>
                    Email
                  </span>
                </label>
                <input
                  required
                  name='email'
                  type='text'
                  placeholder='Email'
                  className='text-black border-2 bg-transparent input border-gray-200'
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='text-lg font-semibold text-white label-text'>
                    Message
                  </span>
                </label>
                <textarea
                  required
                  name='message'
                  className='text-black border-2 textarea bg-transparent border-gray-200'
                  placeholder='Message'
                ></textarea>
              </div>
              <div className='mt-6'>
                <button className=' btn hover:-translate-y-1 primary-btn'>
                  <span>Send Message</span> <HiRocketLaunch></HiRocketLaunch>
                </button>
                <p className='z-20 mt-3 text-green-600'>{msg}</p>
              </div>
            </div>
            <ToastContainer></ToastContainer>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
