import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import React from 'react'
import {} from 'react-icons/fa'

const ShortQDisclosureForWrittenExams = ({ shortQuestions, userAnswers }) => {
  console.log(userAnswers)
  return (
    <div className='container sticky text-2xl text-white top-44 body md:mx-auto'>
      <div className='w-full px-4 pt-16'>
        <div className='w-full max-w-md p-2 mx-auto bg-white rounded-2xl'>
          {shortQuestions?.map((sq, index) => (
            <div key={index}>
              {sq.questions.map(question => {
                const answer = userAnswers?.find(
                  a => a?.questionId == question?.id
                )
                console.log(question?.question, answer)

                return (
                  <Disclosure key={question?.id}>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                          <span>{question?.question}</span>
                          <ChevronUpIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-purple-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
                          {answer?.answer}
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

export default ShortQDisclosureForWrittenExams
