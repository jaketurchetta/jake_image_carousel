import React from 'react';
import axios from 'axios';
import MainGallery from './MainGallery.jsx';
import ViewPhotos from './ViewPhotos.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      viewButton: false,
    };
    this.handleViewButton = this.handleViewButton.bind(this);
  }

  componentDidMount() {
    this.getImage();
  }

  getImage() {
    axios.get('/image')
      .then(({ data }) => {
        this.setState({
          data,
        });
      })
      .catch(this.handleError);
  }

  handleError(error, callback) {
    callback(this.error);
  }

  handleViewButton() { // working
    this.setState({
      viewButton: !this.state.viewButton,
    });
    console.log(this.state.viewButton);
  }

  render() {
    // console.log(this.state.data);
    return (
      <div>
        <div>
          {this.state.viewButton === true
            ? (
              <MainGallery
                handleViewButton={this.handleViewButton}
                data={this.state.data}
              />
            )
            : (
              <ViewPhotos
                handleViewButton={this.handleViewButton}
                data={this.state.data}
              />
            )}
        </div>
      </div>
    );
  }
}

export default App;
