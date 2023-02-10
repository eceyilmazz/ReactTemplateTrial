import React from 'react'
// import it from '../images/it.jpg';
// import Button from './Button';
import More from './More';
import axios from 'axios';
import { useState, useEffect } from 'react'

function It(props) {
    const [contents, setContent] = useState([]);

    useEffect(() => {
        axios("http://localhost:3001/contents")
            .then((res) => setContent(res.data))
            .catch((e) => console.log(e))
    }, []);

  return (
    <div>
        <br/>
        <br/>

        <div className='container'>
            <div className='row'>
                <div className='col-sm'>

                    <More page="ItSol"></More>
                
                    {/* <div className='container'>
        

                    <h1 className='it-h1'>IT Solutions</h1> 

                    <br/>

                    <p className='it-p'>We collaborate with you to create new value through digital transformation. We have hundreds of specialists at your service.</p>

                    <p className='it-p'>Image from 
                        <b>
                            <a className='it-a' href='https://www.freepik.com/vectors/computer'> Freepik</a>
                        </b>
                    </p>

                    <br/>


                    <Button title={props.butn}/>
                    

                     </div> */}

                    
                </div>
                
                <div className='col-sm' >
                    <div className='container'>
                    {
                        contents.map((content) => ( content.pageName === "It" &&
                        <img src={content.image} alt='' className='itImg'></img>))

                     }

                    {/* <img src={it} alt='' className='itImg'></img> */}
                        
                    </div>
                </div>
                
            </div>

        </div>
        <br/>
        <br/>

        
        
      </div>
  )
}
export default It;