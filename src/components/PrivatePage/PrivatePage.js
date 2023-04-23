import React from "react";
import style from './PrivatePage.module.css';
import image from '../../img/private.png'
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import CreateError from '../CreateError/CreateError'

const PrivatePage = () => {
    return (
        <ErrorBoundary>
            <div className={style.private}>
                <h2>Welcome to Private Page!</h2>
                <CreateError/>
                <img src={image} alt={'private'} /> 
            </div>    
        </ErrorBoundary>  
    )
}

export default PrivatePage;