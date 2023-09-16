import React, { useState } from 'react'

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

    fetch('https://chatbot-xi-mocha.vercel.app/', {
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
    <main className='relative max-w-md p-4 overflow-y-auto border rounded rounded-l-lg max-h-96 primary-bg font-inter'>
      <h1 className='text-3xl leading-1.1 text-center sticky top-0'>
        E-Exam Support
      </h1>
      <p className='my-4 text-center text-orange-200'>
        Ask any exam related question you have
      </p>
      <section className='p-4 mb-12 rounded-lg shadow-2xl drop-shadow-2xl'>
        {chats && chats.length
          ? chats.map((chat, index) => (
              <p
                key={index}
                className={`${
                  chat.role === 'user' ? 'text-right ml-30 ' : ''
                } ${
                  chat.role === 'user' ? 'flex-row-reverse' : ''
                } bg-darkslategray max-w-70 p-4  rounded-50`}
              >
                <span className='text-blue-700'>{chat.role.toUpperCase()}</span>
                <span> : </span>
                <span>{chat.content}</span>
              </p>
            ))
          : ''}
      </section>

      <div className={isTyping ? '' : 'hidden'}>
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

      <form
        onSubmit={e => chat(e, message)}
        className='w-2/3 pb-2 ml-auto text-center'
      >
        <input
          type='text'
          name='message'
          value={message}
          placeholder='Share with us your problem'
          onChange={e => setMessage(e.target.value)}
          className='w-full h-12 p-2 text-lg text-black border-none shadow-2xl bg-slate-200 rounded-xl focus:outline-none placeholder:italic placeholder:text-zinc-600'
        />
      </form>
    </main>
  )
}

export default Bot
