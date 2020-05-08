import React from 'react';
import styled from 'styled-components';


const ExitButton = styled.button`
height: 24px;
width: 24px;
display: block;
fill: rgb(72, 72, 72);
position: absolute;
top: 8%;
left: 95%;
color: red;
`

const ViewPhotosLarge = styled.div`
  width: 856px;
  height: 642px;
  position: absolute;
  top: 12%;
  left: 15%;
  border-radius: 2%;
`
const ViewPhotosPage = styled.div`
position: absolute;
top: 31%;
left: 77%;
`

const ViewPhotosDescription = styled.div `
position: absolute;
top: 38%;
left: 77%;
`
const ViewPhotos = (props) => {
  console.log(props.rows)

  return (
    <div>
      <button className="leftButton" type="button">left button</button>
      <button className="rightButton" type="button">right button</button>
      <ExitButton onClick={props.handleViewButton}> Exit button</ExitButton>

      <img src={`https://6-pack.s3-us-west-1.amazonaws.com/00/${props.attbId}.jpg`} className="ViewPhotosLarge" />


      <ViewPhotosPage>1/{props.rows.length}</ViewPhotosPage>
      <ViewPhotosDescription>Rock House /description go here</ViewPhotosDescription>

    </div>
  );

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
