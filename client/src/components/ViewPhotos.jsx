import React from 'react';

const ViewPhotos = (props) => {
  console.log(props.data.rows, 'from viewphoto');
  // if (props.data !== []) {
  //   console.log(props.data.rows, 'props data rows')
  //   const row = props.data.rows.map((row, i) => {
  //       console.log(row.url)
  //   })
  // const r = props.data.rows.map((row,i) => {
  //   url={row.url} description={row.description}
  // })

  return (
    <div>
      <button className="leftButton" type="button">left button</button>
      <button className="rightButton" type="button">right button</button>
      <button className="exitButton" onClick={props.handleViewButton} type="button">Exit button</button>
      <img src="https://6-pack.s3-us-west-1.amazonaws.com/00/00.jpg" className="ViewPhotosLarge" />

      <div className="ViewPhotosPage">1/49 /image page go here</div>
      <div className="ViewPhotosDescription">Rock House /description go here</div>
      <h1>Yo it works, this is ViewPhotos.jsx</h1>
    </div>
  );


  // }
};

export default ViewPhotos;


// return (
//   <div>
//   <button className='leftButton'>left button</button>
//   <button className='rightButton'>right button</button>
//   <button className='exitButton' onClick={props.handleViewButton}>Exit button</button>
//   <img src='https://6-pack.s3-us-west-1.amazonaws.com/00/00.jpg'  className='ViewPhotosLarge' />

//   <div className='ViewPhotosPage'>1/49 /image page go here</div>
//   <div className='ViewPhotosDescription'>Rock House /description go here</div>
//    <h1>Yo it works, this is ViewPhotos.jsx</h1>
//   </div>
// )
