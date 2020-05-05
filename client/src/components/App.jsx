import React from 'react';
import MainGallery from './MainGallery.jsx'
import ViewPhotos from './ViewPhotos.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      viewButton: false
    }
    this.handleViewButton = this.handleViewButton.bind(this)
  }


handleViewButton (event) { //working
  console.log('you click me')
  this.setState ({
    viewButton: !this.state.viewButton
  })
  console.log(this.state.viewButton)
}


  render() {
    return (
      <div>
      <div >
      {this.state.viewButton === false
        ? <MainGallery handleViewButton={this.handleViewButton} />
        : <ViewPhotos />}
        </div>
      </div>
    );
  }
}

export default App;


