import React from 'react'
import '../../Styles/style.css';


function Email(props) {
  return (
    <div id='email'>
        <br/>
        <i class="fa-solid fa-envelope" />

        <br/>
        <h1>{props.title}</h1>

        <p>ylzece19@gmail.com</p>

      </div>
  )
}
export default Email;