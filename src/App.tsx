

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Notebook from './pages/Notebook/Notebook'

function App() {


  return (
    <>
      <Routes>
      <Route path="/" element={<Layout/>}>
          <Route index element={<Notebook />}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
