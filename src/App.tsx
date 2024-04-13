import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Banner } from './components/Banner'
import { Header } from './components/Header'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Banner />
  }
])

export function App() {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}
