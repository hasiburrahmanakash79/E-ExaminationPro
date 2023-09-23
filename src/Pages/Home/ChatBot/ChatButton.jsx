import { Dialog, Transition } from '@headlessui/react'
import { FaTimes } from 'react-icons/fa'
import { Fragment, useState } from 'react'
import Bot from './Bot'
import chatIcon from '../../../assets/chatbot.png'
export default function ChatButton () {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal () {
    setIsOpen(false)
  }

  function openModal () {
    setIsOpen(true)
  }

  return (
    <div className='z-50'>
      <div className='fixed z-40 bottom-4 right-4'>
        {!isOpen && (
          <button
            type='button'
            onClick={openModal}
            className='transition-all hover:scale-110'
          >
            <img src={chatIcon} className='w-20 hover:scale-110' alt='' />
          </button>
        )}
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 right-0 overflow-y-auto'>
            <div className='flex items-center justify-end h-full p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md overflow-y-auto text-left text-white align-middle transition-all transform shadow-xl rounded-2xl'>
                  <Bot />

                  <div className='absolute z-50 rounded-full top-5 right-5 '>
                    <button
                      type='button'
                      className='inline-flex justify-center p-2 text-sm font-medium text-blue-900 bg-blue-100 rounded-full hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={closeModal}
                    >
                      <FaTimes />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
