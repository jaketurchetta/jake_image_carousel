import React from 'react';
import styled from 'styled-components';

// const largeBox = styled.div `
//   /* background: lightcoral; */
//   grid-row: 1/3;
//   grid-column: 1;
//   /* width: 960px;
//   height: 590px; */
//   width: 100%;
//   height: 100%;
//  `

const Sharebtn = styled.button`
position: absolute;
top: 6.5%;
left: 90%;
transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
background-color: white;
font-size: 14px;
padding: 10px 18px;
border: none;
cursor: pointer;
border-radius: 6px;
`

const Savebtn = styled.button `
  position: absolute;
  top: 6.5%;
  left: 95%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: white;
  font-size: 14px;
  padding: 10px 18px;
  border: none;
  cursor: pointer;
  border-radius: 6px;
`

const MainGallery = (props) => (
  // console.log(props.data, 'props data')
  // console.log(props.data.rows, 'props data rows')
  // console.log(props.data.rows[0].url, 'props data rows[0].url')

  <div>
    <Sharebtn>
    <img src="https://6-pack.s3-us-west-1.amazonaws.com/icons/Screen+Shot+2020-05-06+at+11.06.44+AM.png" className="shareIcon" />
    Share
    </Sharebtn>


    <Savebtn>
      <img src="https://6-pack.s3-us-west-1.amazonaws.com/icons/Screen+Shot+2020-05-06+at+11.06.35+AM.png" className="saveIcon" />
      Save
    </Savebtn>


    <main onClick={props.handleViewButton}>
      <button className="Viewbtn" type="button">View Photos</button>

      <div className="largeBox">
        <img src="https://6-pack.s3-us-west-1.amazonaws.com/00/00.jpg" className="largeBox" alt="" />
        <h1>Large Box</h1>
      </div>

      <div className="smallBox1">
        <img src="https://6-pack.s3-us-west-1.amazonaws.com/00/01.jpg" className="smallBox1" alt="" />
        <h1>Small Box 1</h1>
      </div>

      <div className="smallBox2">
        <img src="https://6-pack.s3-us-west-1.amazonaws.com/00/02.jpg" className="smallBox2" alt="" />
        <h1>Small Box 2</h1>
      </div>

      <div className="smallBox3">
        <img src="https://6-pack.s3-us-west-1.amazonaws.com/00/03.jpg" className="smallBox3" alt="" />
        <h1>Small Box 3</h1>
      </div>

      <div className="smallBox4">
        <img src="https://6-pack.s3-us-west-1.amazonaws.com/00/04.jpg" className="smallBox4" alt="" />

        <h1>Small Box 4</h1>
      </div>

    </main>
  </div>
);

export default MainGallery;
