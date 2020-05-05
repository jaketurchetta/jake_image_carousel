import React from 'react';

const ViewPhotos = (props) => {

  return (
    <div>
    <button className='leftButton'>left button</button>
    <button className='rightButton'>right button</button>
    <button className='exitButton' onClick={props.handleViewButton}>Exit button</button>
    <img src='https://6-pack.s3-us-west-1.amazonaws.com/00/00.jpg'  className='ViewPhotosLarge' />

    <div className='ViewPhotosPage'>1/49 /image page go here</div>
    <div className='ViewPhotosDescription'>Rock House /description go here</div>
     <h1>Yo it works, this is ViewPhotos.jsx</h1>
    </div>
  )

}

export default ViewPhotos; 