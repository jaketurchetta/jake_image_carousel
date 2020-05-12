import React from 'react';
import styled from 'styled-components';

const MainGrid = styled.div`
  display: grid ;
  grid-template-columns: 50% 25% 25%;
  grid-template-rows:  295px 295px;
  width: 100%
  height: 400px;
  cursor: pointer;
  overflow: hidden;
`;

const LargeBox = styled.img`
  grid-row: 1/3;
  grid-column: 1;
  width: 100%;
  height: 100%
  border: 2px solid black;
  &:hover  {
    transform: scale(1.1);
    transition: 0.5s;
    overflow: hidden;
  }
 `;

const SmallBox1 = styled.img`
  background: lightblue;
  /* width: 480px;
  height: 295px; */
  width: 100%;
  height: 100%;
  border: 2px solid black;
  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
    overflow: hidden;
  }
 `;
const SmallBox2 = styled.img`
  background: lightgreen;
  /* width: 480px;
  height: 295px; */
  overflow: hidden;
  width: 100%;
  height: 100%;
  border: 2px solid black;
  &:hover ${Sharebtn}{
    transform: scale(1.1);
    transition: 0.5s;
  }
 `;
const SmallBox3 = styled.img`
  background: lightseagreen;
  /* width: 480px;
  height: 295px; */
  overflow: hidden;
  width: 100%;
  height: 100%;
  border: 2px solid black;
  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
 `;
const SmallBox4 = styled.img`
  background: lightsalmon;
  /* width: 480px;
  height: 295px; */
  width: 100%;
  height: 100%;
  border: 2px solid black;
  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
 `;

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
`;

const Savebtn = styled.button`
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
`;

const Viewbtn = styled.button`
  position: absolute;
  top: 60%;
  left: 93%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: white;
  font-size: 15px;
  padding: 11px 18px;
  border: none;
  cursor: pointer;
  border-radius: 6px;
`

// const MainGallery = (props) => (
class MainGallery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div onClick={this.props.handleGetAtt}>
        <Sharebtn>
          <img src="https://6-pack.s3-us-west-1.amazonaws.com/icons/Screen+Shot+2020-05-06+at+11.06.44+AM.png" className="shareIcon" />
          Share
        </Sharebtn>

        <Savebtn>
          <img src="https://6-pack.s3-us-west-1.amazonaws.com/icons/Screen+Shot+2020-05-06+at+11.06.35+AM.png" className="saveIcon" />
          Save
        </Savebtn>

        <Viewbtn>View Photos</Viewbtn>


        <MainGrid onClick={this.props.handleViewButton}>
          <LargeBox src="https://6-pack.s3-us-west-1.amazonaws.com/00/0.jpg" id="0" />

          <SmallBox1 src="https://6-pack.s3-us-west-1.amazonaws.com/00/1.jpg" id="1" />

          <SmallBox2 src="https://6-pack.s3-us-west-1.amazonaws.com/00/2.jpg" id="2" />

          <SmallBox3 src="https://6-pack.s3-us-west-1.amazonaws.com/00/3.jpg" id="3" />

          <SmallBox4 src="https://6-pack.s3-us-west-1.amazonaws.com/00/4.jpg" id="4" />
        </MainGrid>


      </div>
    );
  }
}

export default MainGallery;


// <MainGrid onClick={() => {
//   this.props.handleGetAtt();
//   this.props.handleViewButton();
// }}>