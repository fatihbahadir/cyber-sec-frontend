import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthLayout from './layouts/AuthLayout/AuthLayout'
import Login from './views/Login/Login'
import Register from './views/Register/Register'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PersistLogin from './components/AuthComponents/PersistLogin/PersistLogin'
import RequireAuth from './components/AuthComponents/RequireAuth/RequireAuth'

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}

function App() {
  
  return (
    <div className=''>
      <Routes>
        <Route element={<AuthLayout/>}>
          <Route path='/login' element= {<Login/>} />
          <Route path='/signup' element= {<Register/>} />
        </Route>

        <Route element={<PersistLogin/>}>
          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]}/>}>
              <Route path='/' element={<div>Hello World</div>} />
          </Route>
        </Route>
      </Routes>

      <ToastContainer toastStyle={{
      }} />
    </div>
  )
}

export default App
