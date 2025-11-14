import React from 'react'
import './global.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import TokenPage from './pages/TokenPage';
import Watchlist from './pages/Watchlist';
import Settings from './pages/Settings';
import SignUp from './pages/SignUp';
import MainLayout from './layouts/MainLayout';
import AllTokensPage from './pages/AllTokens';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            retryDelay: 2000,
        }
    }
});
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/tokens" element={<AllTokensPage />} />
          <Route path="/tokens/:id" element={<TokenPage />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  )
}

export default App
