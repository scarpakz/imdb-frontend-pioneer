import { Routes, Route } from 'react-router-dom'
import './App.css'
import {Home} from './pages/Home'
import {MovieDetail} from './pages/MovieDetail'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movie/:id" element={<MovieDetail />}/>
      </Routes>
    </>
  )
}

export default App
