import React from 'react'

function Button(props) {
  return (
    <div className='container'>

        <button className='btn btn-light'>{props.title}</button>
        
      </div>
  )
}
export default Button;