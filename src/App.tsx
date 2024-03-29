import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './components/main';
import { Detail } from './components/detail';
import './App.css'

export const App = () => {
  
  const url = import.meta.env.VITE_BASE_URL;
  
  return (
    <>
      <h1>Project Marvel</h1>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/detail/:id' element={<Detail />}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}