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

// const MiniGallery = styled.ul `
// position: absolute !important;
//     list-style-type: none !important;
//     left: 0px !important;
//     transition: -ms-transform 0.3s ease-out 0s, -webkit-transform 0.3s ease-out 0s, transform 0.3s ease-out 0s !important;
//     margin: 0px !important;
//     padding: 0px 0px 0px 8px !important;
// `
// const MiniGalleryChild = styled.li`

// `
// const ViewPhotos = (props) => {
//   console.log(props.rows)
class ViewPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attbId: this.props.attbId
    }
    this.addAttb = this.addAttb.bind(this);
    this.minusAttb = this.minusAttb.bind(this);
  }

  addAttb() {
    if(this.state.attbId === 18) {
      this.setState({
        attbId: 0
      })
    } else {
      this.setState({
        attbId: Number(this.state.attbId + Number(1))
      })
    }
  }

  minusAttb() {
    if(this.state.attbId === 0) {
      this.setState({
        attbId: 18
      })
    } else {
      this.setState({
        attbId: Number(this.state.attbId - Number(1))
      })
    }
  }

render() {
  return (
    <div>
      <button className="leftButton" type="button" onClick={this.addAttb}>left button</button>
      <button className="rightButton" type="button" onClick={this.minusAttb}>right button</button>
      <ExitButton onClick={this.props.handleViewButton}> Exit button</ExitButton>

      <img src={`https://6-pack.s3-us-west-1.amazonaws.com/00/${this.state.attbId}.jpg`} className="ViewPhotosLarge" />



      <ul className='miniGalleryUl'>
      <div>

      <img src={`https://6-pack.s3-us-west-1.amazonaws.com/00/${this.state.attbId}.jpg`} className='miniGallery' />


      </div>
      </ul>

      <ViewPhotosPage>{this.state.attbId}/{this.props.rows.length}</ViewPhotosPage>
      <ViewPhotosDescription>{this.props.rows[1].description}</ViewPhotosDescription>

    </div>
  );
}


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


// <div>
// <img src={`https://6-pack.s3-us-west-1.amazonaws.com/00/${Number(props.attbId) + Number(1)}.jpg`} className='miniGallery' />
// </div>

// <div>
// <img src={`https://6-pack.s3-us-west-1.amazonaws.com/00/${Number(props.attbId) + Number(2)}.jpg`} className='miniGallery' />
// </div>