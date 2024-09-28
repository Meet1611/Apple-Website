import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/Model"
import Features from "./components/Features";

import * as Sentry from '@sentry/react';
import Chip from "./components/Chip";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () =>  {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/home' element={<ProtectedRoute isLoggedIn={isLoggedIn} component={MainPage} />} />
      </Routes>
    </div>
    
  )
}

export default Sentry.withProfiler(App);
// export default App
