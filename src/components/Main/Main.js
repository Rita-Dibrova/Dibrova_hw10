import React from 'react';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import CreateError from '../CreateError/CreateError'
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
      <ErrorBoundary>
        <div style={{border:"3px solid green", margin: "50px"}}>
          <h2 style={{color:"orange"}}>Hello! This is Main page!</h2>
          <Outlet/> 
          <CreateError/> 
        </div>  
      </ErrorBoundary>
    )
  }

export default Main;