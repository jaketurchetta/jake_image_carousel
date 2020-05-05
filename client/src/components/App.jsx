import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>

      <button>call me button</button>
      <main>

        <div className='largeBox' >
        <img src='https://6-pack.s3-us-west-1.amazonaws.com/00/00.jpg'  className='largeBox' />
        <h1>Large Box</h1>
        </div>

        <div className='smallBox1'>
        <img src='https://6-pack.s3-us-west-1.amazonaws.com/00/01.jpg'  className='smallBox1' />
        <h1>Small Box 1</h1>
        </div>

        <div className='smallBox2'>
        <img src='https://6-pack.s3-us-west-1.amazonaws.com/00/02.jpg'  className='smallBox2' />
        <h1>Small Box 2</h1>
        </div>

        <div className='smallBox3'>
        <img src='https://6-pack.s3-us-west-1.amazonaws.com/00/03.jpg'  className='smallBox3' />
        <h1>Small Box 3</h1>
        </div>

        <div className='smallBox4'>
        <img src='https://6-pack.s3-us-west-1.amazonaws.com/00/04.jpg'  className='smallBox4' />
        <h1>Small Box 4</h1>
        </div>

        </main>

      <div>Im from App.jsx</div>
      </div>
    )
  }
}

export default App;

