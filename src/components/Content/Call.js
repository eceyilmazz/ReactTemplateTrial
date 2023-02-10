import React from 'react'
import '../../Styles/style.css';

function Call(props) {
  return (
    <div id='call'>
        <br/>
        <i class="fa-solid fa-phone-volume" />
        <br/>
        <h1>{props.title}</h1>

        <p>+30-2106019311</p>
        <p>+30-6977664062</p>

        
      </div>
  )
}
export default Call;