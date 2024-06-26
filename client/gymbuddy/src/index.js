import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home'
import Protected from './components/Protected'

import{
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<App />}>
      <Route path = "signup" element = {<Signup />} />
      <Route path = "login" element = {<Login />} />
      <Route path = "/" element = {<Protected />}>
        <Route path = "/" index element = {<Home />}/>
      </Route>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


