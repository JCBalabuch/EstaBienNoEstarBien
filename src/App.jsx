import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import NavLinks from './components/NavLinks/NavLinks'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <div className='App'>
        <Header />
        <NavLinks />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
