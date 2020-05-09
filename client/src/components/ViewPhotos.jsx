import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


const ExitButton = styled.button`
height: 24px;
width: 24px;
display: block;
fill: rgb(72, 72, 72);
position: absolute;
top: 8%;
left: 95%;
`

const ViewPhotosLarge = styled.div`

`
const ViewPhotosPage = styled.div`
position: absolute;
top: 35%;
left: 80%;
color: #454242;
font-family: 'Roboto',sans-serif;
`

const ViewPhotosDescription = styled.div `
position: absolute;
top: 39.5%;
left: 80%;
color: #6b6767;
font-family: 'Roboto',sans-serif;
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

  minusAttb() {
    console.log(this.state.attbId)
    if(this.state.attbId <= 0 ) {
      this.setState({
        attbId: 17
      })
    } else {
      this.setState({
        attbId: Number(this.state.attbId - Number(1))
      })
    }
  }

  addAttb() {
    if(this.state.attbId === 17) {
      this.setState({
        attbId: 0
      })
    } else {
      this.setState({
        attbId: Number(this.state.attbId + Number(1))
      })
    }
  }



render() {
  console.log(this.props.data)
  return (
    <div>
    <svg onClick={this.props.handleViewButton} className='exitButton' viewPort="0 0 12 12" version="1.1"
    xmlns="http://www.w3.org/2000/svg">
   <line x1="1" y1="25"
         x2="25" y2="1"
         stroke="black"
         stroke-width="2"/>
   <line x1="1" y1="1"
         x2="25" y2="25"
         stroke="black"
         stroke-width="2"/>
</svg>

      <button className="leftButton" type="button" onClick={this.minusAttb}></button>
      <button className="rightButton" type="button" onClick={this.addAttb}></button>



      <img src={`https://6-pack.s3-us-west-1.amazonaws.com/00/${this.state.attbId}.jpg`} className="ViewPhotosLarge" />



      <ul className='miniGalleryUl'>
      <div>

      <img src={`https://6-pack.s3-us-west-1.amazonaws.com/00/${this.state.attbId}.jpg`} className='miniGallery' />


      </div>
      </ul>

      <ViewPhotosPage>{this.state.attbId} / {this.props.rows.length}</ViewPhotosPage>
      <ViewPhotosDescription>{this.props.rows[this.state.attbId].description}</ViewPhotosDescription>

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