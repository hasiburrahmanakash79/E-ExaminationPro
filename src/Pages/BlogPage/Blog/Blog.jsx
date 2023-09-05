import React, { useState } from 'react'
import { FaCommentDots, FaHeart, FaShareAltSquare } from 'react-icons/fa'
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LineShareButton,
  LinkedinIcon,
  PinterestIcon,
  PinterestShareButton,
  TwitterIcon,
  TwitterShareButton
} from 'react-share'
import ShowCommentApp from '../BlogComments/ShowCommentApp'

const Blog = () => {
  const [color, setColor] = useState('white')
  const [originalColor, setOriginalColor] = useState('white')

  const handleLikeClick = () => {
    if (color === 'red') {
      setColor(originalColor)
    } else {
      setOriginalColor(color)
      setColor('red')
    }
  }

  return (
    <div>
      <section className='text-white'>
        <div className='container p-5 py-20 mx-auto space-y-6 sm:space-y-12'>
          <div
            data-aos="fade-down"
            data-aos-duration="1300"
            data-aos-easing="ease-in-sine"
            className='p-5 border border-blue-600 rounded-xl'>
            <a
              rel='noopener noreferrer'
              href='#'
              className='items-center block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12'
            >
              <img
                data-aos="fade-left"
                data-aos-duration="2400"
                src='https://static-cse.canva.com/blob/571589/blogheaderdesign.jpg'
                alt='blog image'
                className='w-full rounded md:h-96 lg:col-span-7'
              />
              <div
                data-aos="fade-right"
                data-aos-duration="2400"
                className='p-6 space-y-2 lg:col-span-5'>
                <h3 className='text-2xl font-semibold sm:text-4xl hover:translate-y-2 group-focus:underline md:pb-5'>
                  Noster tincidunt reprimique ad pro
                </h3>
                <span className='text-xs dark:text-gray-400'>
                  February 19, 2021
                </span>
                <p>
                  Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est
                  in graece fuisset, eos affert putent doctus id.
                </p>
                <div>
                  <div>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="2600"
                      className='pt-5'>
                      <button className=' btn btn-outline btn-sm'>
                        Read More
                      </button>
                    </div>

                    <ShowCommentApp></ShowCommentApp>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
            <a
              data-aos="fade-right"
              data-aos-duration="900"
              rel='noopener noreferrer'
              href='#'
              className='hover:shadow-2xl p-1 rounded-md mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900'
            >
              <img
                role='presentation'
                className='object-cover w-full rounded h-44 dark:bg-gray-500'
                src='https://source.unsplash.com/random/480x360?1'
                alt='blog image'
              />
              <div className='p-6 space-y-2'>
                <h3 className='text-2xl font-semibold group-hover:underline group-focus:underline'>
                  In usu laoreet repudiare legendos
                </h3>
                <span className='text-xs dark:text-gray-400'>
                  January 21, 2021
                </span>
                <p>
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                  neglegentur, ex has tantas percipit perfecto. At per tempor
                  albucius perfecto, ei probatus consulatu patrioque mea, ei
                  vocent delicata indoctum pri.
                </p>

                <div className='flex items-center justify-between gap-5 pt-6'>
                  <div className='flex items-center gap-5'>
                    <FaHeart
                      style={{ color: color, cursor: 'pointer' }}
                      onClick={handleLikeClick}
                      className='text-xl color-change'
                    ></FaHeart>
                    <FaCommentDots
                      className='text-xl'
                      onClick={() => window.my_modal_2.showModal()}
                    ></FaCommentDots>

                    {/* Open the modal using ID.showModal() method */}

                    <dialog id='my_modal_2' className='mx-auto modal '>
                      <div
                        method='dialog'
                        className='modal-box dark:bg-gray-900 '
                      >
                        {/* <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
                          <div className="flex flex-col items-center w-full">
                            <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                            <div className="flex flex-col items-center py-6 space-y-3">
                              <span className="text-center">How was your experience on it?</span>
                              <div className="flex space-x-3">





                              </div>
                            </div>
                            <div className="flex flex-col w-full">
                              <textarea rows="3" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
                              <button type="button" className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400">Leave feedback</button>
                            </div>
                          </div>

                        </div> */}

                        <div className='mb-3 ms-16'>
                          <ShowCommentApp></ShowCommentApp>
                        </div>
                      </div>
                      <form method='dialog' className='modal-backdrop'>
                        <button>close</button>
                      </form>
                    </dialog>

                    <FaShareAltSquare
                      className='text-xl'
                      onClick={() => window.my_modal_21.showModal()}
                    ></FaShareAltSquare>

                    <dialog id='my_modal_21' className='modal'>
                      <form
                        method='dialog'
                        className='modal-box bg-gradient-to-r from-[#A8EB12]  to-[#042B66] ...'
                      >
                        <div className='text-center '>
                          <EmailShareButton
                            url='https://e-exampro.web.app/blog'
                            quote={'Blog by E-examPro'}
                            hastag={'blog'}
                          >
                            <EmailIcon
                              className='me-10'
                              size={50}
                              round={true}
                            ></EmailIcon>
                          </EmailShareButton>
                          <TwitterShareButton
                            url='https://e-exampro.web.app/blog'
                            quote={'Blog by E-examPro'}
                            hastag={'blog'}
                          >
                            <TwitterIcon
                              className='me-10'
                              size={50}
                              round={true}
                            ></TwitterIcon>
                          </TwitterShareButton>
                          <FacebookShareButton
                            url='https://e-exampro.web.app/blog'
                            quote={'Blog by E-examPro'}
                            hastag={'blog'}
                          >
                            <FacebookIcon
                              className='me-10'
                              size={50}
                              round={true}
                            ></FacebookIcon>
                          </FacebookShareButton>
                          <LineShareButton
                            url='https://e-exampro.web.app/blog'
                            quote={'Blog by E-examPro'}
                            hastag={'blog'}
                          >
                            <LinkedinIcon
                              className='me-10'
                              size={50}
                              round={true}
                            ></LinkedinIcon>
                          </LineShareButton>
                          <PinterestShareButton
                            url='https://e-exampro.web.app/blog'
                            quote={'Blog by E-examPro'}
                            hastag={'blog'}
                          >
                            <PinterestIcon
                              size={50}
                              round={true}
                            ></PinterestIcon>
                          </PinterestShareButton>
                        </div>
                      </form>
                      <form method='dialog' className='modal-backdrop'>
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>

                  <button className=' btn btn-outline btn-sm text-end'>
                    Read More
                  </button>
                </div>
              </div>
            </a>
            <a
              data-aos="fade-down"
              data-aos-duration="900"
              rel='noopener noreferrer'
              href='#'
              className='hover:shadow-2xl p-1 rounded-md mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900'
            >
              <img
                role='presentation'
                className='object-cover w-full rounded h-44 dark:bg-gray-500'
                src='https://source.unsplash.com/random/480x360?2'
                alt='blog image'
              />
              <div className='p-6 space-y-2'>
                <h3 className='text-2xl font-semibold group-hover:underline group-focus:underline'>
                  In usu laoreet repudiare legendos
                </h3>
                <span className='text-xs dark:text-gray-400'>
                  January 22, 2021
                </span>
                <p>
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                  neglegentur, ex has tantas percipit perfecto. At per tempor
                  albucius perfecto, ei probatus consulatu patrioque mea, ei
                  vocent delicata indoctum pri.
                </p>

                <div className='flex items-center justify-between gap-5 pt-6'>
                  <div className='flex items-center gap-5'>
                    <FaHeart className='text-xl'></FaHeart>
                    <FaCommentDots
                      className='text-xl'
                      onClick={() => window.my_modal_10.showModal()}
                    ></FaCommentDots>

                    {/* Open the modal using ID.showModal() method */}

                    <dialog id='my_modal_10' className='modal '>
                      <div
                        method='dialog'
                        className='modal-box dark:bg-gray-900 '
                      >
                        <div className='flex flex-col w-full p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100'>
                          <div className='flex flex-col items-center w-full'>
                            <h2 className='text-3xl font-semibold text-center'>
                              Your opinion matters!
                            </h2>
                            <div className='flex flex-col items-center py-6 space-y-3'>
                              <span className='text-center'>
                                How was your experience on it?
                              </span>
                              <div className='flex space-x-3'></div>
                            </div>
                            <div className='flex flex-col w-full'>
                              <textarea
                                rows='3'
                                placeholder='Message...'
                                className='p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900'
                              ></textarea>
                              <button
                                type='button'
                                className='py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400'
                              >
                                Leave feedback
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <form method='dialog' className='modal-backdrop'>
                        <button>close</button>
                      </form>
                    </dialog>

                    <FaShareAltSquare
                      className='text-xl'
                      onClick={() => window.my_modal_22.showModal()}
                    ></FaShareAltSquare>

                    <dialog id='my_modal_22' className='modal'>
                      <form
                        method='dialog'
                        className='modal-box bg-gradient-to-r from-[#A8EB12]  to-[#042B66] ...'
                      >
                        <div className='text-center '>
                          <EmailShareButton
                            url='https://e-exampro.web.app/blog'
                            quote={'Blog by E-examPro'}
                            hastag={'blog'}
                          >
                            <EmailIcon
                              className='me-10'
                              size={50}
                              round={true}
                            ></EmailIcon>
                          </EmailShareButton>
                          <TwitterShareButton
                            url='https://e-exampro.web.app/blog'
                            quote={'Blog by E-examPro'}
                            hastag={'blog'}
                          >
                            <TwitterIcon
                              className='me-10'
                              size={50}
                              round={true}
                            ></TwitterIcon>
                          </TwitterShareButton>
                          <FacebookShareButton
                            url='https://e-exampro.web.app/blog'
                            quote={'Blog by E-examPro'}
                            hastag={'blog'}
                          >
                            <FacebookIcon
                              className='me-10'
                              size={50}
                              round={true}
                            ></FacebookIcon>
                          </FacebookShareButton>
                          <LineShareButton
                            url='https://e-exampro.web.app/blog'
                            quote={'Blog by E-examPro'}
                            hastag={'blog'}
                          >
                            <LinkedinIcon
                              className='me-10'
                              size={50}
                              round={true}
                            ></LinkedinIcon>
                          </LineShareButton>
                          <PinterestShareButton
                            url='https://e-exampro.web.app/blog'
                            quote={'Blog by E-examPro'}
                            hastag={'blog'}
                          >
                            <PinterestIcon
                              size={50}
                              round={true}
                            ></PinterestIcon>
                          </PinterestShareButton>
                        </div>
                      </form>
                      <form method='dialog' className='modal-backdrop'>
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>

                  <button className=' btn btn-outline btn-sm text-end'>
                    Read More
                  </button>
                </div>
              </div>
            </a>
            <a
              data-aos="fade-up"
              data-aos-duration="1000"
              rel='noopener noreferrer'
              href='#'
              className='hover:shadow-2xl p-1 rounded-md mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900'
            >
              <img
                role='presentation'
                className='object-cover w-full rounded h-44 dark:bg-gray-500'
                src='https://source.unsplash.com/random/480x360?3'
                alt='blog image'
              />
              <div className='p-6 space-y-2'>
                <h3 className='text-2xl font-semibold group-hover:underline group-focus:underline'>
                  In usu laoreet repudiare legendos
                </h3>
                <span className='text-xs dark:text-gray-400'>
                  January 23, 2021
                </span>
                <p>
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                  neglegentur, ex has tantas percipit perfecto. At per tempor
                  albucius perfecto, ei probatus consulatu patrioque mea, ei
                  vocent delicata indoctum pri.
                </p>

                <div className='flex items-center justify-between gap-5 pt-6'>
                  <div className='flex items-center gap-5'>
                    <FaHeart className='text-xl'></FaHeart>
                    <FaCommentDots
                      className='text-xl'
                      onClick={() => window.my_modal_11.showModal()}
                    ></FaCommentDots>

                    {/* Open the modal using ID.showModal() method */}

                    <dialog id='my_modal_11' className='modal '>
                      <div
                        method='dialog'
                        className='modal-box dark:bg-gray-900 '
                      >
                        <div className='flex flex-col w-full p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100'>
                          <div className='flex flex-col items-center w-full'>
                            <h2 className='text-3xl font-semibold text-center'>
                              Your opinion matters!
                            </h2>
                            <div className='flex flex-col items-center py-6 space-y-3'>
                              <span className='text-center'>
                                How was your experience on it?
                              </span>
                              <div className='flex space-x-3'></div>
                            </div>
                            <div className='flex flex-col w-full'>
                              <textarea
                                rows='3'
                                placeholder='Message...'
                                className='p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900'
                              ></textarea>
                              <button
                                type='button'
                                className='py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400'
                              >
                                Leave feedback
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <form method='dialog' className='modal-backdrop'>
                        <button>close</button>
                      </form>
                    </dialog>

                    <FaShareAltSquare
                      className='text-xl'
                      onClick={() => window.my_modal_23.showModal()}
                    ></FaShareAltSquare>

                    <dialog id='my_modal_23' className='modal'>
                      <form
                        method='dialog'
                        className='modal-box bg-gradient-to-r from-[#A8EB12]  to-[#042B66] ...'
                      >
                        <div className='text-center '>
                          <EmailShareButton
                            url='https://e-exampro.web.app/blog'
                            quote={'Blog by E-examPro'}
                            hastag={'blog'}
                          >
                            <EmailIcon
                              className='me-10'
                              size={50}
                              round={true}
                            ></EmailIcon>
                          </EmailShareButton>
                          <TwitterShareButton
                            url='https://e-exampro.web.app/blog'
                            quote={'Blog by E-examPro'}
                            hastag={'blog'}
                          >
                            <TwitterIcon
                              className='me-10'
                              size={50}
                              round={true}
                            ></TwitterIcon>
                          </TwitterShareButton>
                          <FacebookShareButton
                            url='https://e-exampro.web.app/blog'
                            quote={'Blog by E-examPro'}
                            hastag={'blog'}
                          >
                            <FacebookIcon
                              className='me-10'
                              size={50}
                              round={true}
                            ></FacebookIcon>
                          </FacebookShareButton>
                          <LineShareButton
                            url='https://e-exampro.web.app/blog'
                            quote={'Blog by E-examPro'}
                            hastag={'blog'}
                          >
                            <LinkedinIcon
                              className='me-10'
                              size={50}
                              round={true}
                            ></LinkedinIcon>
                          </LineShareButton>
                          <PinterestShareButton
                            url='https://e-exampro.web.app/blog'
                            quote={'Blog by E-examPro'}
                            hastag={'blog'}
                          >
                            <PinterestIcon
                              size={50}
                              round={true}
                            ></PinterestIcon>
                          </PinterestShareButton>
                        </div>
                      </form>
                      <form method='dialog' className='modal-backdrop'>
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>

                  <button className=' btn btn-outline btn-sm text-end'>
                    Read More
                  </button>
                </div>
              </div>
            </a>
            <a
              data-aos="fade-left"
              data-aos-duration="800"
              rel='noopener noreferrer'
              href='#'
              alt='blog image'
              className='hover:shadow-2xl p-1 rounded-md mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900'
            >
              <img
                role='presentation'
                className='object-cover w-full rounded h-44 dark:bg-gray-500'
                src='https://source.unsplash.com/random/480x360?4'
              />
              <div className='p-6 space-y-2'>
                <h3 className='text-2xl font-semibold group-hover:underline group-focus:underline'>
                  In usu laoreet repudiare legendos
                </h3>
                <span className='text-xs dark:text-gray-400'>
                  January 24, 2021
                </span>
                <p>
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                  neglegentur, ex has tantas percipit perfecto. At per tempor
                  albucius perfecto, ei probatus consulatu patrioque mea, ei
                  vocent delicata indoctum pri.
                </p>

                <div className='flex items-center justify-between gap-5 pt-6'>
                  <div className='flex items-center gap-5'>
                    <FaHeart className='text-xl'></FaHeart>
                    <FaCommentDots
                      className='text-xl'
                      onClick={() => window.my_modal_12.showModal()}
                    ></FaCommentDots>

                    {/* Open the modal using ID.showModal() method */}

                    <dialog id='my_modal_12' className='modal '>
                      <div
                        method='dialog'
                        className='modal-box dark:bg-gray-900 '
                      >
                        <div className='flex flex-col w-full p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100'>
                          <div className='flex flex-col items-center w-full'>
                            <h2 className='text-3xl font-semibold text-center'>
                              Your opinion matters!
                            </h2>
                            <div className='flex flex-col items-center py-6 space-y-3'>
                              <span className='text-center'>
                                How was your experience on it?
                              </span>
                              <div className='flex space-x-3'></div>
                            </div>
                            <div className='flex flex-col w-full'>
                              <textarea
                                rows='3'
                                placeholder='Message...'
                                className='p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900'
                              ></textarea>
                              <button
                                type='button'
                                className='py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400'
                              >
                                Leave feedback
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <form method='dialog' className='modal-backdrop'>
                        <button>close</button>
                      </form>
                    </dialog>

                    <FaShareAltSquare
                      className='text-xl'
                      onClick={() => window.my_modal_24.showModal()}
                    ></FaShareAltSquare>

                    <dialog id='my_modal_24' className='modal'>
                      <form
                        method='dialog'
                        className='modal-box bg-gradient-to-r from-[#A8EB12]  to-[#042B66] ...'
                      >
                        <div className='text-center '>
                          <EmailShareButton
                            url='https://e-exampro.web.app/blog'
                            quote={'Blog by E-examPro'}
                            hastag={'blog'}
                          >
                            <EmailIcon
                              className='me-10'
                              size={50}
                              round={true}
                            ></EmailIcon>
                          </EmailShareButton>
                          <TwitterShareButton
                            url='https://e-exampro.web.app/blog'
                            quote={'Blog by E-examPro'}
                            hastag={'blog'}
                          >
                            <TwitterIcon
                              className='me-10'
                              size={50}
                              round={true}
                            ></TwitterIcon>
                          </TwitterShareButton>
                          <FacebookShareButton
                            url='https://e-exampro.web.app/blog'
                            quote={'Blog by E-examPro'}
                            hastag={'blog'}
                          >
                            <FacebookIcon
                              className='me-10'
                              size={50}
                              round={true}
                            ></FacebookIcon>
                          </FacebookShareButton>
                          <LineShareButton
                            url='https://e-exampro.web.app/blog'
                            quote={'Blog by E-examPro'}
                            hastag={'blog'}
                          >
                            <LinkedinIcon
                              className='me-10'
                              size={50}
                              round={true}
                            ></LinkedinIcon>
                          </LineShareButton>
                          <PinterestShareButton
                            url='https://e-exampro.web.app/blog'
                            quote={'Blog by E-examPro'}
                            hastag={'blog'}
                          >
                            <PinterestIcon
                              size={50}
                              round={true}
                            ></PinterestIcon>
                          </PinterestShareButton>
                        </div>
                      </form>
                      <form method='dialog' className='modal-backdrop'>
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>

                  <button className=' btn btn-outline btn-sm text-end'>
                    Read More
                  </button>
                </div>
              </div>
            </a>
            <a
              data-aos="fade-right"
              data-aos-duration="1000"
              rel='noopener noreferrer'
              href='#'
              className='hover:shadow-2xl p-1 rounded-md mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900'
            >
              <img
                role='presentation'
                className='object-cover w-full rounded h-44 dark:bg-gray-500'
                src='https://source.unsplash.com/random/480x360?5'
                alt='blog image'
              />
              <div className='p-6 space-y-2'>
                <h3 className='text-2xl font-semibold group-hover:underline group-focus:underline'>
                  In usu laoreet repudiare legendos
                </h3>
                <span className='text-xs dark:text-gray-400'>
                  January 25, 2021
                </span>
                <p>
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                  neglegentur, ex has tantas percipit perfecto. At per tempor
                  albucius perfecto, ei probatus consulatu patrioque mea, ei
                  vocent delicata indoctum pri.
                </p>

                <div className='flex items-center justify-between gap-5 pt-6'>
                  <div className='flex items-center gap-5'>
                    <FaHeart className='text-xl'></FaHeart>
                    <FaCommentDots
                      className='text-xl'
                      onClick={() => window.my_modal_13.showModal()}
                    ></FaCommentDots>

                    {/* Open the modal using ID.showModal() method */}

                    <dialog id='my_modal_13' className='modal '>
                      <div
                        method='dialog'
                        className='modal-box dark:bg-gray-900 '
                      >
                        <div className='flex flex-col w-full p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100'>
                          <div className='flex flex-col items-center w-full'>
                            <h2 className='text-3xl font-semibold text-center'>
                              Your opinion matters!
                            </h2>
                            <div className='flex flex-col items-center py-6 space-y-3'>
                              <span className='text-center'>
                                How was your experience on it?
                              </span>
                              <div className='flex space-x-3'></div>
                            </div>
                            <div className='flex flex-col w-full'>
                              <textarea
                                rows='3'
                                placeholder='Message...'
                                className='p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900'
                              ></textarea>
                              <button
                                type='button'
                                className='py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400'
                              >
                                Leave feedback
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <form method='dialog' className='modal-backdrop'>
                        <button>close</button>
                      </form>
                    </dialog>

                    <FaShareAltSquare
                      className='text-xl'
                      onClick={() => window.my_modal_25.showModal()}
                    ></FaShareAltSquare>

                    <dialog id='my_modal_25' className='modal'>
                      <form
                        method='dialog'
                        className='modal-box bg-gradient-to-r from-[#A8EB12]  to-[#042B66] ...'
                      >
                        <div className='text-center '>
                          <EmailShareButton
                            url='https://e-exampro.web.app/blog'
                            quote={'Blog by E-examPro'}
                            hastag={'blog'}
                          >
                            <EmailIcon
                              className='me-10'
                              size={50}
                              round={true}
                            ></EmailIcon>
                          </EmailShareButton>
                          <TwitterShareButton
                            url='https://e-exampro.web.app/blog'
                            quote={'Blog by E-examPro'}
                            hastag={'blog'}
                          >
                            <TwitterIcon
                              className='me-10'
                              size={50}
                              round={true}
                            ></TwitterIcon>
                          </TwitterShareButton>
                          <FacebookShareButton
                            url='https://e-exampro.web.app/blog'
                            quote={'Blog by E-examPro'}
                            hastag={'blog'}
                          >
                            <FacebookIcon
                              className='me-10'
                              size={50}
                              round={true}
                            ></FacebookIcon>
                          </FacebookShareButton>
                          <LineShareButton
                            url='https://e-exampro.web.app/blog'
                            quote={'Blog by E-examPro'}
                            hastag={'blog'}
                          >
                            <LinkedinIcon
                              className='me-10'
                              size={50}
                              round={true}
                            ></LinkedinIcon>
                          </LineShareButton>
                          <PinterestShareButton
                            url='https://e-exampro.web.app/blog'
                            quote={'Blog by E-examPro'}
                            hastag={'blog'}
                          >
                            <PinterestIcon
                              size={50}
                              round={true}
                            ></PinterestIcon>
                          </PinterestShareButton>
                        </div>
                      </form>
                      <form method='dialog' className='modal-backdrop'>
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>

                  <button className=' btn btn-outline btn-sm text-end'>
                    Read More
                  </button>
                </div>
              </div>
            </a>
            <a
              data-aos="fade-down"
              data-aos-duration="800"
              rel='noopener noreferrer'
              href='#'
              className='hover:shadow-2xl p-1 rounded-md mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900'
            >
              <img
                role='presentation'
                className='object-cover w-full rounded h-44 dark:bg-gray-500'
                src='https://source.unsplash.com/random/480x360?6'
                alt='blog image'
              />
              <div className='p-6 space-y-2'>
                <h3 className='text-2xl font-semibold group-hover:underline group-focus:underline'>
                  In usu laoreet repudiare legendos
                </h3>
                <span className='text-xs dark:text-gray-400'>
                  January 26, 2021
                </span>
                <p>
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                  neglegentur, ex has tantas percipit perfecto. At per tempor
                  albucius perfecto, ei probatus consulatu patrioque mea, ei
                  vocent delicata indoctum pri.
                </p>

                <div className='flex items-center justify-between gap-5 pt-6'>
                  <div className='flex items-center gap-5'>
                    <FaHeart className='text-xl'></FaHeart>
                    <FaCommentDots
                      className='text-xl'
                      onClick={() => window.my_modal_14.showModal()}
                    ></FaCommentDots>

                    {/* Open the modal using ID.showModal() method */}

                    <dialog id='my_modal_14' className='modal '>
                      <div
                        method='dialog'
                        className='modal-box dark:bg-gray-900 '
                      >
                        <div className='flex flex-col w-full p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100'>
                          <div className='flex flex-col items-center w-full'>
                            <h2 className='text-3xl font-semibold text-center'>
                              Your opinion matters!
                            </h2>
                            <div className='flex flex-col items-center py-6 space-y-3'>
                              <span className='text-center'>
                                How was your experience on it?
                              </span>
                              <div className='flex space-x-3'></div>
                            </div>
                            <div className='flex flex-col w-full'>
                              <textarea
                                rows='3'
                                placeholder='Message...'
                                className='p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900'
                              ></textarea>
                              <button
                                type='button'
                                className='py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400'
                              >
                                Leave feedback
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <form method='dialog' className='modal-backdrop'>
                        <button>close</button>
                      </form>
                    </dialog>

                    <FaShareAltSquare
                      className='text-xl'
                      onClick={() => window.my_modal_26.showModal()}
                    ></FaShareAltSquare>

                    <dialog id='my_modal_26' className='modal'>
                      <form
                        method='dialog'
                        className='modal-box bg-gradient-to-r from-[#A8EB12]  to-[#042B66] ...'
                      >
                        <div className='text-center '>
                          <EmailShareButton
                            url='https://e-exampro.web.app/blog'
                            quote={'Blog by E-examPro'}
                            hastag={'blog'}
                          >
                            <EmailIcon
                              className='me-10'
                              size={50}
                              round={true}
                            ></EmailIcon>
                          </EmailShareButton>
                          <TwitterShareButton
                            url='https://e-exampro.web.app/blog'
                            quote={'Blog by E-examPro'}
                            hastag={'blog'}
                          >
                            <TwitterIcon
                              className='me-10'
                              size={50}
                              round={true}
                            ></TwitterIcon>
                          </TwitterShareButton>
                          <FacebookShareButton
                            url='https://e-exampro.web.app/blog'
                            quote={'Blog by E-examPro'}
                            hastag={'blog'}
                          >
                            <FacebookIcon
                              className='me-10'
                              size={50}
                              round={true}
                            ></FacebookIcon>
                          </FacebookShareButton>
                          <LineShareButton
                            url='https://e-exampro.web.app/blog'
                            quote={'Blog by E-examPro'}
                            hastag={'blog'}
                          >
                            <LinkedinIcon
                              className='me-10'
                              size={50}
                              round={true}
                            ></LinkedinIcon>
                          </LineShareButton>
                          <PinterestShareButton
                            url='https://e-exampro.web.app/blog'
                            quote={'Blog by E-examPro'}
                            hastag={'blog'}
                          >
                            <PinterestIcon
                              size={50}
                              round={true}
                            ></PinterestIcon>
                          </PinterestShareButton>
                        </div>
                      </form>
                      <form method='dialog' className='modal-backdrop'>
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>

                  <button className=' btn btn-outline btn-sm text-end'>
                    Read More
                  </button>
                </div>
              </div>
            </a>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className='flex justify-center'>
            <button
              type='button'
              className='px-6 py-3 animate-pulse hover:animate-none text-sm rounded-md hover:bg-white hover:text-black btn btn-accent dark:bg-gray-900 dark:text-gray-400 transition duration-300'
            >
              Load more posts...
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
