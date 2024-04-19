import React from 'react';
import './NotFound.css';
import error from "../../assets/images/error.jpeg";

const NotFound = () => {
  return (
    <div className='container-fluid full-height'>
      <div className='row full-height'>
        <div className='col-lg-4 col-md-4 col-12'>
          <img className='error-image' src={error} alt="Error" />
        </div>
        <div className='col-lg-8 col-md-8 col-12 d-flex flex-column justify-content-center align-items-center'>
          <h1 className='title-text'>AWWW...DON’T CRY.</h1>
          <p className='error-txt'>It's just a 404 Error!</p>
          <p className='next-txt'>What you’re looking for may have been misplaced in Long Term Memory.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
