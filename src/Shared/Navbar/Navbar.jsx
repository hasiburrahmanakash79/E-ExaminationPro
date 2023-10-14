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
import { FaMoon, FaSun } from 'react-icons/fa'
import { useEffect } from 'react'
import useLiveExam from '../../Hooks/useLiveExam/useLiveExam'
import Loading from '../../components/Loading/Loading'

const Navbar = () => {
  const dark = localStorage.getItem('customDarkTheme')
  console.log(dark)
  const [isDarkMode, setIsDarkMode] = useState(dark == 'true' ? true : false)

  useEffect(() => {
    if (isDarkMode == true) {
      localStorage.removeItem('customDarkTheme')
      localStorage.setItem('customDarkTheme', 'true')

      document.documentElement.removeAttribute('data-theme')
      document.documentElement.setAttribute('data-theme', 'customDarkTheme')
    } else {
      localStorage.removeItem('customDarkTheme')
      localStorage.setItem('customDarkTheme', 'false')

      document.documentElement.removeAttribute('data-theme')
      document.documentElement.setAttribute('data-theme', 'customLightTheme')
    }
  }, [isDarkMode, dark])
  const [isOpen, setIsOpen] = useState(false)
  const { user, logOut } = useContext(AuthContext)
  const [isAdmin] = useAdmin()
  const [isInstructor] = useInstructor()
  const [info] = useUser()

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

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
      <button>Exam</button>
      {isOpen && (
        <div className='absolute top-0 z-50 text-white rounded-lg left-32 md:left-0 backdrop-blur-2xl bg-black/80 md:top-full'>
          <div className='px-2 py-2 space-y-3 '>
            <button className='px-4 py-1 rounded hover:bg-white/10'>
              <Link to='/allSubjects'>All Subject</Link>
            </button>

            <button className='px-2 py-1 rounded hover:bg-white/10'>
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
  const [notices] = useLiveExam()

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
      <nav className='z-50 text-white backdrop-blur-lg bg-black/40'>
        <div className='navbar z-[40]  container mx-auto  sticky top-0'>
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
                className='z-50 p-2 mt-3 shadow w-36 menu menu-sm dropdown-content rounded-box bg-black/80 md:bg-black/40 backdrop-blur'
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
            <div className='indicator me-6'>
              <span
                className={`${
                  notices?.length > 0 && 'indicator-item badge badge-warning'
                } `}
              >
                {notices ? notices?.length : ''}
              </span>
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
                  className='list-none tooltip tooltip-bottom'
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
                    className='p-2 mt-3 text-white shadow-md bg-black/80 menu menu-compact backdrop-blur-lg dropdown-content rounded-box w-52'
                  >
                    <li>
                      <Link
                        to='/leaderboard'
                        className='justify-between w-full'
                      >
                        LeaderBoard
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
                className='border-none shadow-md btn btn-sm btn-primary'
              >
                Login
              </Link>
            )}
            <div>
              <button onClick={toggleDarkMode} className='mx-3 text-lg'>
                {isDarkMode == true ? (
                  <FaSun className=''></FaSun>
                ) : (
                  <FaMoon></FaMoon>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </Headroom>
  )
}

export default Navbar
