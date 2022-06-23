import React from 'react'
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Posts from '../pages/Posts';
import { router } from '../router/routes';

export default function AppRouter() {
  return (
    <Routes>
        {router.map(route => 
          <Route 
            element={route.component} 
            path={route.path} 
            exact={route.exact}
          />  
        )}
        <Route path='*' element={<Posts/>}/>
    </Routes>
  )
}
