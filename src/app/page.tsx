"use client";
const React = require('react');
const { Children } = require('react');

import ReactDOM from 'react-dom/client'

import Footer from "./Components/Footer";
import BlogList from "./Components/BlogList";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './Components/auth/NavBar';







export default function Home() {
  return (
  <>
    <ToastContainer theme="dark"/>
    
    
    <BlogList/>
    <Footer/>
  </>  
  );
}

