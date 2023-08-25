import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useState } from 'react'
import './TextEditor.css'

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' }
    ],
    ['link', 'image', 'video']
  ]
}

const TextEditor = ({ shortQs, onAnswerSubmit }) => {
  const [value, setValue] = useState('')
  console.log(shortQs)
  const handleInput = content => {
    setValue(content)
    console.log(content)
  }

  const handleSubmit = () => {
    onAnswerSubmit(value)
  }

  return (
    <div className='primary-bg px-3 md:px-7 shadow-xl   mx-auto my-6 min-h-[40vh]  rounded-md'>
      <div className='text-2xl text-center text-white p-4 '>Question: {shortQs?.question}</div>{' '}
      {/* Display the question */}
      <ReactQuill
        theme='snow'
        value={value}
        onChange={handleInput}
        className='w-full min-h-[30vh]  bg-white text-black rounded-md'
        modules={modules}
      />
      <div className='mt-2'>
        <button
          onClick={handleSubmit}
          className='px-6 py-2 text-lg font-medium tracking-wide text-white bg-orange-600 rounded-md'
        >
          Ans Submit
        </button>
      </div>
    </div>
  )
}

export default TextEditor
