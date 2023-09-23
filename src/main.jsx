import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home/Home.jsx'
import Story from './Pages/Story/Story.jsx'
import Characters from './Pages/Characters/Characters.jsx'
import Tales from './Pages/Tales/Tales.jsx'
import Tale from './Pages/Tale/Tale.jsx'
import NotFound from './Pages/NotFound/NotFound.jsx'
import Game from './Pages/Game/Game.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='story' element={<Story />} />
          <Route path='characters' element={<Characters />} />
          <Route path='tales' element={<Tales />} />
          <Route path='tale/:id' element={<Tale />} />
          <Route path='game' element={<Game />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
