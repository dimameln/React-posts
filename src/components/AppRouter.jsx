import React from 'react'
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Posts from '../pages/Posts';
import { privateRoutes, publicRoutes } from '../router/routes';
import Login from '../pages/Login';
import { useContext } from 'react';
import { AuthContext } from '../context/index';
import MyLoader from './UI/Loader/MyLoader';

export default function AppRouter() {
  const {isAuth, isLoading} = useContext(AuthContext)

  if (isLoading) return <MyLoader/>
  
  return (
    isAuth 
    ? 
    <Routes>
      {privateRoutes.map(route => 
        <Route 
          element={route.component} 
          path={route.path} 
          exact={route.exact}
          key={route.path}
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
          key={route.path}
        />  
      )}
      <Route path='*' element={<Login/>}/>
    </Routes>
  )
}
