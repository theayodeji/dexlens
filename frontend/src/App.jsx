import React from 'react'
import './global.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import TokenPage from './pages/TokenPage';
import Watchlist from './pages/Watchlist';
import Settings from './pages/Settings';
import SignUp from './pages/SignUp';
import MainLayout from './layouts/MainLayout';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/token/:id" element={<TokenPage />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
