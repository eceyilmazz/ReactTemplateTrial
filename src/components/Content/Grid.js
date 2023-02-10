import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import '../../Styles/style.css';

function Grid(props) {

  const page = props.page;
  const grid = props.grid;

  const [icons, setIcons] = useState([]);

  useEffect(() => {
    axios("http://localhost:3001/icons")
      .then((res) => setIcons(res.data))
      .catch((e) => console.log(e))
  }, []);

  return (
    <div className='container'>
      {
        icons.map((icon) => (icon.pageName === page  && ( icon.grid === grid &&
          <div key={icon.id}>
            <i className={icon.icon}></i>
            <br />
            <h1 style={icon.styles}>{icon.title}</h1>
          </div>
        )
        )
        )
      }

    </div>
  )


  // const myStyle = {
  //   color: props.textColor,
  //   fontWeight: props.fontW,
  //   fontSize: props.fontS
  // }


  // return (
  //   <div className='container'>


  //       <i className={props.icon}></i>
  //       <br/>
  //       <h1 style={myStyle}>{props.title}</h1>

  //   </div>
  // )
}
export default Grid;