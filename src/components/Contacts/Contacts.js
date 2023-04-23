import React from "react";
import style from './Contacts.module.css';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import CreateError from '../CreateError/CreateError'

const Contacts = () => {
    return (
        <ErrorBoundary>
            <div className={style.contacts}>
                <h2>Contacts</h2>
                <p>Phone number for contacting us: +380501234567</p>
                <p>Email address for contacting us: example@gmail.com</p>
                <CreateError/>
            </div>  
        </ErrorBoundary>    
    )
}

export default Contacts;