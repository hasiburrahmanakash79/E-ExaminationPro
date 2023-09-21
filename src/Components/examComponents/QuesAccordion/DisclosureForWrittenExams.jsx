import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import React from 'react'
import {} from 'react-icons/fa'
import { useSelector } from 'react-redux'

const DisclosureForWrittenExams = ({ writtenQuestions }) => {
  const { userAnswers } = useSelector(state => state.writtenQuestions)
  return (
    <div className='container sticky top-0 py-2 text-2xl text-white rounded-lg shadow-2xl drop-shadow-2xl md:mx-auto'>
      <div className='w-full px-4 pt-1'>
        <div className='w-full max-w-md p-2 mx-auto rounded-2xl'>
          {writtenQuestions?.map((sq, index) => (
            <div className='space-y-4' key={index}>
              {sq.questions.map(question => {
                const answer = userAnswers?.find(
                  a => a?.questionId == question?.id
                )

                return (
                  <Disclosure key={question.id}>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex justify-between w-full px-4 py-4 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                          <span>{question?.question}</span>
                          <ChevronUpIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-6 w-6 text-purple-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500 border rounded-lg bg-slate-50'>
                          {answer?.answer ? (
                            <p className='break-words h-fit'>
                              {' '}
                              {answer?.answer}
                            </p>
                          ) : (
                            <p className='text-red-700'>
                              Please write answer!!!!!
                            </p>
                          )}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DisclosureForWrittenExams
