import { BrowserRouter, Routes, Route } from 'react-router-dome';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';


export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route  path="/" element={<Home/>} >
    <Route  path="/profile" element={<Profile/>} >
    <Route  path="/sign-in" element={<SignIn/>} >
    <Route  path="/sign-up" element={<SignOut/>} >

  </Routes>
}