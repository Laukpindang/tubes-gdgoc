import { createBrowserRouter } from 'react-router'

// Layout
import MainLayout from './layouts/main-layout'
import AuthLayout from './layouts/auth-layout'

// Auth
import Login from './pages/login'
import Register from './pages/register'

// Destination
import DestinationPage from './pages/destination'
import AddDestinationPage from './pages/destination/add'
import EditDestinationPage from './pages/destination/[id]/edit'

// User
import UserPage from './pages/user'
import UserDetail from './pages/user/[id]'
import AddUserPage from './pages/user/add'
import EditUserPage from './pages/user/[id]/edit'

const router = createBrowserRouter([
  {
    // Layout for auth & theme
    Component: MainLayout,
    children: [
      {
        // Layout for main app with sidebar
        Component: AuthLayout,
        children: [
          // Destination
          {
            path: '/',
            children: [
              {
                index: true,
                Component: DestinationPage
              },
              {
                path: '/destination/add',
                Component: AddDestinationPage
              },
              {
                path: '/destination/:id/edit',
                Component: EditDestinationPage
              }
            ]
          },
          // User
          {
            path: 'user',
            children: [
              {
                index: true,
                Component: UserPage
              },
              {
                path: ':id',
                Component: UserDetail
              },
              {
                path: 'add',
                Component: AddUserPage
              },
              {
                path: ':id/edit',
                Component: EditUserPage
              }
            ]
          }
        ]
      },
      // Login & Register does not have sidebar
      {
        // Login
        path: 'login',
        Component: Login
      },
      {
        // Register
        path: 'register',
        Component: Register
      }
    ]
  }
])

export default router
