/** @format */

import React from "react";
import Home from "./components/Home";
import Sample from "./components/SampleRoute";
import UsersList, { loadData } from './components/UsersList';

export default[
  {
    path: '/',
    component: Home,
    exact:true
    
  },
  {
    loadData,
    path: '/users',
    component: UsersList,

  } 
 
  
]
