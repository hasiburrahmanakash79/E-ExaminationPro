import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layouts/Main'
import HomePage from '../Pages/Home/HomePage/HomePage'
import Contact from '../Pages/Contact/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children: [
        {
            path: '/',
            element: <HomePage />
        },
        {
          path: '/contuct',
          element: <Contact />
      },

    ]
  }
])

export default router