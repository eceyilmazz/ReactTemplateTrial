import React from 'react'
import '../../Styles/style.css';
import Address from './Address';
import Call from './Call';
import Email from './Email';

function Contact() {
  return (
    <div className='contact'>
        <div className='container' >
          <br/>
            <h1>Get in Touch</h1>
            <br/>
            <h6>From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.</h6>
            <br/>

            <div className='container'>
                <div className='row'>
                    <div className='col-sm'>

                        <Address type="address" />
                        {/* <Address title="Address" /> */}

                        
                        

                    </div>
                    <div className='col-sm'>

                        
                        <Address type="email" />
                        {/* <Email title="Email" /> */}
                        
                        

                        
                    </div>
                    <div className='col-sm'>

                        
                        <Address type="call" />
                        {/* <Call title="Call Us" /> */}
                        
                        
                        
                    </div>
                </div>
                <br/>
            </div>

        </div>

        
      </div>
  )
}
export default Contact;