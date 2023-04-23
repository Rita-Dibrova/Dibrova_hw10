import React, { useState } from 'react';
import style from './CreateError.module.css';

const CreateError = () => {
  const [error, setError] = useState(false);

  const handleError = () =>  {
    try {
      throw new Error('An error has occurred in your application!');
    } catch(err) {
      console.log(err);
      setError(true);
    }
  }

  if(error) {
    return new Error('An error has occurred in your application!');
  }

  return (
    <button className={style.createError} onClick={handleError}>Issue an error </button>
  )
}

export default CreateError;