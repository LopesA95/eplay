import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Rotas } from './routes'
import { store } from './store'

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}
