import React from 'react'
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Posts from '../pages/Posts';
import { privateRoutes, publicRoutes } from '../router/routes';
import Login from '../pages/Login';

export default function AppRouter() {
  const isAuth = true
  return (
    isAuth 
    ? 
    <Routes>
      {privateRoutes.map(route => 
        <Route 
          element={route.component} 
          path={route.path} 
          exact={route.exact}
        />  
      )}
      <Route path='*' element={<Posts/>}/>
    </Routes>
    :
    <Routes>
      {publicRoutes.map(route => 
        <Route 
          element={route.component} 
          path={route.path} 
          exact={route.exact}
        />  
      )}
      <Route path='*' element={<Login/>}/>
    </Routes>
  )
}
