import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Svg from './Svg.jsx';
import ViewPhotosMini from './ViewPhotosMini.jsx';
// import ImageList from './ImageList.jsx'



const ExitButton = styled.button`
height: 24px;
width: 24px;
display: block;
fill: rgb(72, 72, 72);
position: absolute;
top: 8%;
left: 95%;
`;

const ViewPhotosPage = styled.div`
position: absolute;
top: 35%;
left: 80%;
color: #454242;
font-family: 'Roboto',sans-serif;
`;

const ViewPhotosDescription = styled.div`
position: absolute;
top: 39.5%;
left: 80%;
color: #6b6767;
font-family: 'Roboto',sans-serif;
`;

const LeftButton = styled.button`
  position: absolute;
  top: 49%;
  left: 4.1%;
  border: solid grey;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 9px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
`;

const RightButton = styled.button`
  position: absolute;
  top: 49%;
  left: 71.5%;
  border: solid grey;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 9px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`;


class ViewPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attbId: this.props.attbId,
    };
    this.addAttb = this.addAttb.bind(this);
    this.minusAttb = this.minusAttb.bind(this);
  }

  minusAttb() {
    console.log(this.state.attbId);
    if (this.state.attbId <= 0) {
      this.setState({
        attbId: 17,
      });
    } else {
      this.setState({
        attbId: Number(this.state.attbId - Number(1)),
      });
    }
  }

  addAttb() {
    console.log(this.state.attbId);
    if (this.state.attbId === 17) {
      this.setState({
        attbId: 0,
      });
    } else {
      this.setState({
        attbId: Number(this.state.attbId + Number(1)),
      });
    }
  }

  render() {
    console.log(this.props.data);
    return (
      <div>
      <Svg handleViewButton={this.props.handleViewButton}/>

      <LeftButton onClick={this.minusAttb}/>
      <RightButton onClick={this.addAttb}/>

      <img src={`https://6-pack.s3-us-west-1.amazonaws.com/00/${this.state.attbId}.jpg`} className="ViewPhotosLarge" />

        <ViewPhotosPage>
          {this.state.attbId}
          {' '}
          /
          {' '}
          {this.props.rows.length}
        </ViewPhotosPage>

        <ViewPhotosDescription>{this.props.rows[this.state.attbId].description}</ViewPhotosDescription>

        <ViewPhotosMini
        attbId={this.state.attbId}
        data={this.props.data}
        handleGetAtt={this.props.handleGetAtt}
        handleRerenderButton={this.props.handleRerenderButton}
          />

      </div>
    );
  }
}

export default ViewPhotos;
