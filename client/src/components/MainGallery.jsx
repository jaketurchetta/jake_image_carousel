import React from 'react';
import styled from 'styled-components';

const MainGrid = styled.main`
  display: grid ;
  grid-template-columns: 50% 25% 25%;
  grid-template-rows:  295px 295px;
`
const LargeBox = styled.img`
  /* background: lightcoral; */
  grid-row: 1/3;
  grid-column: 1;
  /* width: 960px;
  height: 590px; */
  width: 100%;
  height: 100%;
 `
 const SmallBox1 = styled.img`
  background: lightblue;
  /* width: 480px;
  height: 295px; */
  width: 100%;
  height: 100%;
 `
 const SmallBox2 = styled.img`
  background: lightgreen;
  /* width: 480px;
  height: 295px; */
  width: 100%;
  height: 100%;
 `
 const SmallBox3 = styled.img`
  background: lightseagreen;
  /* width: 480px;
  height: 295px; */
  width: 100%;
  height: 100%;
 `
 const SmallBox4 = styled.img`
  background: lightsalmon;
  /* width: 480px;
  height: 295px; */
  width: 100%;
  height: 100%;
 `

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

<MainGrid onClick={props.handleViewButton}>
      <button className="Viewbtn" type="button">View Photos</button>

      <LargeBox src="https://6-pack.s3-us-west-1.amazonaws.com/00/00.jpg">
      </LargeBox>

      <SmallBox1 src="https://6-pack.s3-us-west-1.amazonaws.com/00/01.jpg">
      </SmallBox1>

      <SmallBox2 src="https://6-pack.s3-us-west-1.amazonaws.com/00/02.jpg">
      </SmallBox2>

      <SmallBox3 src="https://6-pack.s3-us-west-1.amazonaws.com/00/03.jpg">
      </SmallBox3>

      <SmallBox4 src="https://6-pack.s3-us-west-1.amazonaws.com/00/04.jpg">
      </SmallBox4>

      </MainGrid>

  </div>
);

export default MainGallery;
