import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";

import { Routes, Route , Navigate} from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";
import { useThemeStore } from "./store/useThemeStore";

import {useEffect} from 'react';

import{ Loader } from "lucide-react";
import { Toaster } from "react-hot-toast";

const App = () => {
  const {authUser , checkAuth, isCheckingAuth, onlineUsers }=useAuthStore();
  const {theme} = useThemeStore()

  console.log(onlineUsers);

  useEffect( () => {
    checkAuth()
  } , [checkAuth]);

  console.log({ authUser });
  if(isCheckingAuth && !authUser){
    return<div>
      <div className="flex items-center justify-center h-screen">
        <Loader className = "size-10 animate-spin"></Loader>
      </div>
    </div>
  }

  return <div data-theme={theme}>


  <Navbar />

  <Routes>
    <Route path="/" element={authUser? <HomePage /> : <Navigate to="/login" /> } />
    <Route path="/signup" element={ !authUser? <SignUpPage /> : <Navigate to="/login" /> } />
    <Route path="/login" element={ <LoginPage /> } />
    <Route path="/settings" element={  <SettingsPage /> } />
    <Route path="/profile" element={ authUser? <ProfilePage /> : <Navigate to="/login" /> } />
  </Routes>

  <Toaster />

  </div>
};

export default App