import React from 'react';

const MainGallery = (props) => (
  // console.log(props.data, 'props data')
  // console.log(props.data.rows, 'props data rows')
  // console.log(props.data.rows[0].url, 'props data rows[0].url')

  <div>
    <button className="Sharebtn" type="button">Share</button>
    <button className="Savebtn" type="button">Save</button>


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
