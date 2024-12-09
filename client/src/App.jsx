import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Login from './pages/Login'
import HeroSection from './pages/student/HeroSection '
import MainLayout from './layout/MainLayout'
import { RouterProvider } from 'react-router'


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
            {/* cources */}
          </>
        )
      },
      {
        path: "/login",
        element: <Login />
      }
    ]
  }
])

function App() {


  return (
    <main>
      <RouterProvider router={appRouter} />
    </main>
  )
}

export default App
