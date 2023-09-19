import './Navbar.css'
import { AiFillBell } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo12.png'
import { useContext, useState } from 'react'
import Swal from 'sweetalert2'
import useAdmin from '../../Hooks/useAdmin/useAdmin'
import useInstructor from '../../Hooks/useInstructor/useInstructor'
import { AuthContext } from '../../Provider/AuthProvider'
import Headroom from 'react-headroom'
import useUser from '../../Hooks/useUser/useUser'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logOut } = useContext(AuthContext)
  const [isAdmin] = useAdmin()
  const [isInstructor] = useInstructor()
  const [info] = useUser()
  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Log Out Successful',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch(error => console.log(error))
  }

  const navbarLink_First = (
    <>
      <li>
        <Link>Home</Link>
      </li>
    </>
  )

  const toggleDropdown = data => {
    setIsOpen(data)
  }

  const hideDropdown = () => {
    setIsOpen(false)
  }

  const navbarLink_Middle = (
    <div
      onMouseEnter={() => toggleDropdown(true)}
      onMouseLeave={() => toggleDropdown(false)}
      className='relative'
    >
      <button className=''>Exam</button>
      {isOpen && (
        <div className='absolute z-50 text-white rounded-lg top-full primary-bg'>
          <div className='p-5 space-y-3'>
            <button className='px-2 py-1 rounded hover:bg-purple-100/10'>
              <Link to='/allSubjects'>All Subject</Link>
            </button>

            <button className='px-2 py-1 rounded hover:bg-purple-100/10'>
              <Link to='/written'>Written Exam</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  )

  const navbarLink_Last = (
    <>
      <li>
        <Link to='/instructors'>Instructors</Link>
      </li>
      <li>
        <Link to='/blog'>Blog</Link>
      </li>
      <li>
        <Link to='/about'>About us</Link>
      </li>
      <li>
        <Link to='/forum'>Forum</Link>
      </li>
      {user && (
        <li>
          {isAdmin ? (
            ''
          ) : isInstructor ? (
            <Link to='/createLiveExam'>Create Live Exam</Link>
          ) : (
            <Link to='/joinLiveExam'>Join Live Exam</Link>
          )}
        </li>
      )}
    </>
  )

  const searchData = e => {
    e.preventDefault()
    const data = document.getElementById('search').value

    //console.log(data);
  }

  return (
    <Headroom
      style={{
        zIndex: '100',
        WebkitTransition: 'all .5s ease-in-out',
        MozTransition: 'all .5s ease-in-out',
        OTransition: 'all .5s ease-in-out',
        transition: 'all .5s ease-in-out'
      }}
    >
      <nav className='z-50 backdrop-blur primary-nav'>
        <div className='navbar z-[40]  container mx-auto  sticky top-0   text-white'>
          <div className='navbar-start'>
            <div className='dropdown'>
              <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h8m-8 6h16'
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className='z-50 p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 primary-bg'
              >
                {/* navbarFirst */}
                {navbarLink_First}
                <li>
                  {/* navbar_middle */}
                  {navbarLink_Middle}
                </li>
                {/* navbar Last */}
                {navbarLink_Last}
              </ul>
            </div>
            <Link to='/'>
              <img
                className='w-[200px] hover:-translate-y-0.5 duration-200'
                src={logo}
                alt=''
              />
            </Link>
          </div>
          <div className='hidden navbar-center lg:flex'>
            <ul className='px-1 menu menu-horizontal'>
              {/* navbarFirst */}
              {navbarLink_First}
              <li tabIndex={0}>
                {/* navbar_middle */}
                {navbarLink_Middle}
              </li>
              {/* navbar Last */}
              {navbarLink_Last}
            </ul>
          </div>
          <div className='navbar-end '>
            <div className='indicator me-4'>
              <span className='indicator-item badge badge-secondary'>1+</span>
              <button>
                <Link to='notice' className='text-2xl'>
                  {' '}
                  <AiFillBell></AiFillBell>
                </Link>
              </button>
            </div>
            {user ? (
              <div className='ml-5 dropdown dropdown-end'>
                <div
                  className='tooltip tooltip-left'
                  data-tip={info?.displayName}
                >
                  <label
                    tabIndex={0}
                    className='btn btn-ghost btn-circle avatar'
                  >
                    <div className='w-10 rounded-full'>
                      <img src={user?.photoURL} />
                    </div>
                  </label>
                </div>

                <div className=''>
                  <ul
                    tabIndex={0}
                    className='p-2 mt-3 text-white shadow-lg primary-bg backdrop-blur-xl menu menu-compact dropdown-content rounded-box w-52'
                  >
                    <li className=''>
                      <Link
                        to='/leaderboard'
                        className='justify-between w-full'
                      >
                      Leaderboard
                      </Link>
                    </li>
                    {/* Navigate to different dashboard route based on user role */}
                    {user && (
                      <li>
                        {isAdmin ? (
                          <Link to='/dashboard/adminHome'>Dashboard</Link>
                        ) : isInstructor ? (
                          <Link to='/dashboard/instructorHome'>Dashboard</Link>
                        ) : (
                          <Link to='/dashboard/userHome'>Dashboard</Link>
                        )}
                      </li>
                    )}
                    <li>
                      <Link to='/profile'>Profile</Link>
                    </li>
                    <li>
                      <Link className='w-full' onClick={handleLogout}>
                        Log Out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                to='/login'
                className='text-white border-none shadow-md btn primary-bg'
              >
                Login
              </Link>
            )}
          </div>
        </div>
        <div>
          <dialog
            id='my_modal_3'
            className='modal modal-top max-w-[400px] mx-auto mt-[68px] '
          >
            <form method='dialog' className='modal-box primary-bg '>
              <button className='absolute z-20 btn btn-sm btn-circle btn-ghost right-2 top-2'>
                ✕
              </button>
              <input
                id='search'
                name='search'
                type='text'
                placeholder='Type here'
                className='z-10 w-full max-w-xs bg-transparent input top-20 input-bordered'
              />
              <button onClick={searchData} className='absolute p-4 right-14'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </button>
            </form>
          </dialog>
        </div>
      </nav>
    </Headroom>
  )
}

export default Navbar
