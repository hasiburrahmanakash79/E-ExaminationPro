import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Bot = () => {
  const [message, setMessage] = useState('')
  const [chats, setChats] = useState([])
  const [isTyping, setIsTyping] = useState(false)

  const chat = async (e, message) => {
    e.preventDefault()

    if (!message) return
    setIsTyping(true)
    window.scrollTo(0, 1e10)

    let msgs = chats
    msgs.push({ role: 'user', content: message })
    setChats(msgs)

    setMessage('')

    fetch('https://chatbot-xi-mocha.vercel.app', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chats
      })
    })
      .then(response => response.json())
      .then(data => {
        msgs.push(data.output)
        setChats(msgs)
        setIsTyping(false)
        window.scrollTo(0, 1e10)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <main className='relative max-w-md overflow-y-auto min-h-3/5 max-h-[700px]  bg-secondary font-inter scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-slate-300 scrollbar-w-2 scrollbar-track-transparent'>
      <div className='sticky top-0 z-40 p-2 ag-slate-800'>
        <h1 className='text-2xl ps-2'>E-Exam Support</h1>
        <p className='text-xs ps-2'>Ask any exam related question you have</p>
        <div className='my-1 divider'></div>
      </div>
      <section className='z-0 mb-12 overflow-hidden '>
        {chats && chats.length
          ? chats.map((chat, index) => (
              <p
                key={index}
                className={`${
                  chat.role === 'user' ? 'text-right ml-30 ' : ''
                } ${
                  chat.role === 'user' ? 'flex-row-reverse' : ''
                } mb-4 max-w-70 p-4  rounded-50`}
              >
                <span className='text-primary'>{chat.role.toUpperCase()}</span>
                <span> : </span>
                <span>{chat.content}</span>
              </p>
            ))
          : ''}

        <div className={isTyping ? 'py-6' : 'hidden'}>
          <p>
            <i>
              {isTyping ? (
                <span className='loading loading-dots loading-lg' />
              ) : (
                ''
              )}
            </i>
          </p>
        </div>

        <div className='fixed bottom-0 z-50 w-full p-2'>
          <form onSubmit={e => chat(e, message)} className='flex gap-3 '>
            <textarea
              type='text'
              name='message'
              value={message}
              placeholder='Share with us your problem'
              onChange={e => setMessage(e.target.value)}
              className='w-full text-sm outline-primary outline textarea textarea-xs placeholder:text-xs placeholder:scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-slate-300 scrollbar-w-2 scrollbar-track-transparent'
            />
            <button className='px-5 rounded-lg bg-primary '>
              <FaArrowRight />
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Bot
