import {Routes,Route} from 'react-router-dom'

import SigninForm from './_auth/forms/SigninForm'
import SignupForm from './_auth/forms/SignupForm'

import { Home } from './_root/pages'
import './globals.css'

import AuthLayout from './_auth/forms/AuthLayout'
import RootLayout from './_root/pages/RootLayout'


export default function App() {
  return (
    <main className='flex h-secreen'>
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout/>}>
      <Route path='sign-in' element={<SigninForm/>}/>
      <Route path='sign-up' element={<SignupForm/>}/>
        </Route>
      {/* private routes */}
      <Route element={<RootLayout/>}>
      <Route  index element={<Home/>}/>
      </Route>
      </Routes>
    </main>
  )
}
