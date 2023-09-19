import { useForm } from 'react-hook-form'
import { useLocation, useParams } from 'react-router-dom'
import useAuth from '../../../Hooks/useAuth/useAuth'
import { useEffect, useState } from 'react'
import usePrice from '../../../Hooks/usePrice/usePrice'
import useAxiosSecure from '../../../Hooks/useAxiosSecure.jsx/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import Loading from '../../../Components/Loading/Loading'

const SSLCart = () => {
  const [pricePackage] = usePrice();
  // console.log("10 >", pricePackage);

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const id = searchParams.get('Cardid')
  // console.log("dma d", id);

  const [axiosSecure] = useAxiosSecure()
  const { user } = useAuth()
  const dateTime = new Date()

  const { data: priceData, isLoading } = useQuery({
    queryKey: ['priceData', id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/price?id=${id}`)
      //console.log(res.data);
      return res.data
    }
  })

  const cartPrice = pricePackage.filter(price => price?._id == id);
  // console.log("serial number 45 >", cartPrice);
  const totalPrice = priceData?.packageAmount * 92;
  const price = totalPrice.toFixed(2);
  const feature = priceData?.features
  console.log("fkjfv erefg ker", feature);
  console.log("serial number 67 >>>>", price);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = data => {
    console.log(" ki re vai koi tui 42>>>>>", data);
    data.paymentId = priceData?.id,
      data.packageName = cartPrice[0]?.name,
      data.price = priceData?.packageAmount,
      data.features = feature,
      data.status = "paid",
      data.date = new Date(dateTime).toLocaleString()
    fetch('http://localhost:4000/sslPayment', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        window.location.replace(data?.url)
        console.log(data?.url);
      })
  }

  return (
    <div className=' mx-auto mt-10 '>
      <h1 className=' text-3xl text-center mb-10 mt-5'>SSL Payment Gatway</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=' space-y-6 md:w-1/2 mx-auto  '
      >
        <div className='flex items-center gap-5'>
          <div className='w-1/2'>
            <label htmlFor='userName' className=''>
              Name
            </label>
            <br />
            <input
              className='bg-transparent border-2 focus:outline-none shadow-2xl border-violet-800 p-3 w-full rounded-md'
              defaultValue={user?.displayName}
              required
              {...register('userName')}
            />
          </div>
          <div className='w-1/2'>
            <label
              htmlFor='email'
              className='text-lg  text-slate-100 tracking-wider '
            >
              Email
            </label>
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
              Phone Number
            </label>
            <br />
            <input
              type='number'
              className='bg-transparent border-2 focus:outline-none shadow-2xl border-violet-800 p-3 w-full rounded-md'
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
              Address
            </label>
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
            <label htmlFor='packagePrice' className=''>
              Package Price
            </label>
            <br />
            <input
              className='bg-transparent border-2 focus:outline-none shadow-2xl border-violet-800 p-3 w-full rounded-md'
              defaultValue={price}
              disabled
              {...register('packagePrice')}
            />
          </div>
          <div className='w-1/2'>
            <label
              htmlFor='adders'
              className='text-lg  text-slate-100 tracking-wider'
            >
              Currency
            </label>
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
