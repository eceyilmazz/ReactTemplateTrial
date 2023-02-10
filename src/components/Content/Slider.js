import React from 'react'
import '../../Styles/style.css';
import More from './More';
import axios from 'axios';
import { useState, useEffect } from 'react'

function Slider() {
    const [contents, setContent] = useState([]);

    useEffect(() => {
        axios("http://localhost:3001/contents")
            .then((res) => setContent(res.data))
            .catch((e) => console.log(e))
    }, []);
    
    return (
        <div className='slider'>

            <div className='container'>
                <div className='row'>
                    <div className='col-sm'>

                        {/* <More title={props.title2} butn={props.butn}></More> */}
                        <More page="Slider"></More>


                    </div>

                    <div className='col-sm'>
                        <div className='container'>

                            {
                                
                                contents.map((content) => ( content.pageName === "Slider" &&
                                    <img src={content.image} alt='' className='firstImg'></img>))

                               
                                
                            }

                            {/* <img src={first} alt='' className='firstImg'></img> */}
                            {/* <img src={"../images/first.jpg"} alt='' className='firstImg'></img> */}

                            
                        </div>

                    </div>
                </div>
            </div>
            <br />

        </div>
    )
}
export default Slider;