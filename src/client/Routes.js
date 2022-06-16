/** @format */

import React from "react";
import HomePage from "./pages/HomePage";
import Sample from "./components/SampleRoute";
import UsersListPage from './pages/UsersListPage';

export default[
  {
    ...HomePage,
    path: '/',
    exact:true
    
  },
  {
    ...UsersListPage,
    path: '/users',
    

  } 
 
  
];
