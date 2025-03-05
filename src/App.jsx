import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Read from './components/Read'
import Create from './components/Create'
import ErrorPage from './components/ErrorPage'
import {getItems} from './services/api'
import DeleteUpdate from './components/DeleteUpdate'
function App() {
  const [patients, setPatients] = useState([])
  useEffect(() => {
    getItems()
    .then(data => {
      setPatients(data)
    })
  }, [patients])
  return (
    <div>
      <Header />
      <main className='mt-20'>
        <BrowserRouter>
          <Routes>
            <Route index element={<Read patients={patients} />}/>
            <Route path='/create' element={<Create />} />
            <Route path='*' element={<ErrorPage />} />
            <Route path='/patient/:id' element={<DeleteUpdate />}/>
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  )
}

export default App
