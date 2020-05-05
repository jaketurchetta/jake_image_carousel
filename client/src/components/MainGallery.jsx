import React from 'react';

const MainGallery = (props) => {

  return (
    <div>
    <main>
    <button className='Sharebtn'>Share</button>
    <button className='Savebtn'>Save</button>

    
    <button className='Viewbtn' onClick={props.handleViewButton}>View Photos</button>

      <div className='largeBox' onClick={props.handleViewButton}>
      <img src='https://6-pack.s3-us-west-1.amazonaws.com/00/00.jpg'  className='largeBox' />
      <h1>Large Box</h1>
      </div>

      <div className='smallBox1' onClick={props.handleViewButton}>
      <img src='https://6-pack.s3-us-west-1.amazonaws.com/00/01.jpg'  className='smallBox1' />
      <h1>Small Box 1</h1>
      </div>

      <div className='smallBox2' onClick={props.handleViewButton}>
      <img src='https://6-pack.s3-us-west-1.amazonaws.com/00/02.jpg'  className='smallBox2' />
      <h1>Small Box 2</h1>
      </div>

      <div className='smallBox3' onClick={props.handleViewButton}>
      <img src='https://6-pack.s3-us-west-1.amazonaws.com/00/03.jpg'  className='smallBox3' />
      <h1>Small Box 3</h1>
      </div>

      <div className='smallBox4' onClick={props.handleViewButton}>
      <img src='https://6-pack.s3-us-west-1.amazonaws.com/00/04.jpg'  className='smallBox4' />

      <h1>Small Box 4</h1>
      </div>

      </main>
    </div>
  )

}

export default MainGallery;