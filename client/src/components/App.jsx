import React from 'react';
import MainGallery from './MainGallery.jsx'
import ViewPhotos from './ViewPhotos.jsx'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      viewButton: false
    }
    this.handleViewButton = this.handleViewButton.bind(this)
  }

  handleError(error) {
    console.log(error)
  }

  getImage() {
    axios.get('/image')
    .then(({data}) => {
      this.setState({
        data: data
      })
    })
    .catch(this.handleError)
  }

handleViewButton (event) { //working
  console.log('you click me')
  this.setState ({
    viewButton: !this.state.viewButton
  })
  console.log(this.state.viewButton)
}

componentDidMount() {
  this.getImage()
}

  render() {
    console.log(this.state.data)
    return (
      <div>
      <div >
      {this.state.viewButton === true
        ? <MainGallery handleViewButton={this.handleViewButton} />
        : <ViewPhotos handleViewButton={this.handleViewButton}/>}
        </div>
      </div>
    );
  }
}

export default App;


