import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import Create from "./components/Create/Create";
import Preview from "./components/Preview/Preview";
import Resume from "./components/Resume/Resume";
import Wizard from "./components/Wizard/wizard";
import First from "./components/Wizard/first";
import Second from "./components/Wizard/second";
import Third from "./components/Wizard/third";
import Fourth from "./components/Wizard/fourth";
import Fifth from "./components/Wizard/fifth";
import Sixth from "./components/Wizard/sixth";
import './custom.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/preview' element={<Preview />}></Route>
        <Route path='/resume' element={<Resume />}></Route>
        <Route path='/wizard' element={<Wizard />}></Route>
        <Route path='/first' element={<First />}></Route>
        <Route path='/second' element={<Second />}></Route>
        <Route path='/third' element={<Third />}></Route>
        <Route path='/fourth' element={<Fourth />}></Route>
        <Route path='/fifth' element={<Fifth />}></Route>
        <Route path='/sixth' element={<Sixth />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App