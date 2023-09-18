import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import useAuth from '../../../Hooks/useAuth/useAuth'
import { useEffect, useState } from 'react'

const SSLCart = () => {
  const [infoPayment, setInfoPayment] = useState([])
  const { id } = useParams()
  const { user } = useAuth()
  const Premium = 'Premium'
  const dateTime = new Date()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = data => {
    //console.log(data);
    data.orderId = id
    data.paymentName = Premium
    data.orderDateTime = new Date(dateTime).toLocaleString()
    fetch('https://e-exam-pro-server.vercel.app/sslPayment', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        window.location.replace(data?.url)
        //console.log(data);
      })
  }

  // useEffect(() => {
  //     fetch(`https://e-exam-pro-server.vercel.app/payments/${id}`)
  //     .then(res => res.json())
  //     .then(data => //console.log(data))

  // }, [id])

  return (
    <div className=' mx-auto mt-10 '>
      <h1 className=' text-3xl text-center mb-10 mt-5'>SSL Payment Gatway</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=' space-y-6 md:w-1/2 mx-auto  '
      >
        <div className='flex items-center gap-5'>
          <div className='w-1/2'>
            <label htmlFor='name' className=''>
              {' '}
              Name{' '}
            </label>{' '}
            <br />
            <input
              className='bg-transparent border-2 focus:outline-none shadow-2xl border-violet-800 p-3 w-full rounded-md'
              defaultValue={user?.displayName}
              required
              {...register('name')}
            />
          </div>
          <div className='w-1/2'>
            <label
              htmlFor='email'
              className='text-lg  text-slate-100 tracking-wider '
            >
              {' '}
              Email{' '}
            </label>{' '}
            <br />
            <input
              className='bg-transparent border-2 focus:outline-none shadow-2xl border-violet-800 p-3 w-full rounded-md'
              required
              defaultValue={user?.email}
              {...register('email')}
            />
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <div className='w-1/2'>
            <label htmlFor='phone' className=''>
              {' '}
              Phone Number{' '}
            </label>{' '}
            <br />
            <input
              type='number'
              className='bg-transparent border-2 focus:outline-none shadow-2xl border-violet-800 p-3 w-full rounded-md'
              // defaultValue={user?.displayName}
              placeholder='+8801000-000000'
              required
              {...register('phone')}
            />
          </div>
          <div className='w-1/2'>
            <label
              htmlFor='address'
              className='text-lg  text-slate-100 tracking-wider'
            >
              {' '}
              Address{' '}
            </label>{' '}
            <br />
            <input
              className='bg-transparent border-2 focus:outline-none shadow-2xl border-violet-800 p-3 w-full rounded-md'
              defaultValue={user?.address}
              placeholder='Please your address'
              required
              {...register('address')}
            />
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <div className='w-1/2'>
            <label htmlFor='postCode' className=''>
              {' '}
              Post Code{' '}
            </label>{' '}
            <br />
            <input
              className='bg-transparent border-2 focus:outline-none shadow-2xl border-violet-800 p-3 w-full rounded-md'
              // defaultValue={user?.displayName}
              placeholder='Post Code'
              required
              {...register('postCode')}
            />
          </div>
          <div className='w-1/2'>
            <label
              htmlFor='adders'
              className='text-lg  text-slate-100 tracking-wider'
            >
              {' '}
              Currency{' '}
            </label>{' '}
            <br />
            <select
              {...register('currency')}
              required
              className='bg-transparent border-2 focus:outline-none shadow-2xl border-violet-800 p-3 w-full rounded-md'
            >
              <option className='text-black' value='USD'>
                USD
              </option>
              <option className='text-black' value='BDT'>
                BDT
              </option>
              <option className='text-black' value='EUR'>
                EUR
              </option>
              <option className='text-black' value='IND'>
                IND
              </option>
              <option className='text-black' value='PAK'>
                PAK
              </option>
            </select>
          </div>
        </div>
        {errors.exampleRequired && <span>This field is required</span>}

        <div className='flex justify-center '>
          <input
            type='submit'
            value='Pay Now'
            className=' duration-300 primary-btn mx-auto w-1/2 text-center rounded-md py-3 cursor-pointer'
          />
        </div>
      </form>
    </div>
  )
}

export default SSLCart
