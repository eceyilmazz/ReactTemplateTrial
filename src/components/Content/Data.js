import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import data from '../images/data.jpg';
import '../../Styles/style.css';
import '../../App.css';

function Data() {


  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios("http://localhost:3001/datas")
      .then((res) => setDatas(res.data))
      .catch((e) => console.log(e))
  }, []);


  return (
    <div className='data'>
        <br/><br/>
        <div className='Container'>
          <div className='row'>
            <div className='col-md-7'>
              
                <div className='container'>
                  <h1>Data Visualization</h1>
                  <img src={data} alt="" className="dataImg"></img>
                  <p>Image From <a className='data-a' href='https://www.freepik.com/vectors/computer'> Freepik</a></p>

                </div>

            </div>
            <div className='col-sm-4'>
              <div className='row'>
                <div className='container'>

                {
                      datas.map((data) => 
                      <div key={data.id} className="container">
                        <div className='container'>
                          <h1>{data.title}</h1>
                          <p className={data.p}>{data.content}</p>
                          <a className={data.styles.a} href={data.link}>More</a>

                        </div>
                        <br/>

                      </div>)
                    }

                  {/* <div className='container'>
                    <h1>01.GOALS</h1>
                    <p className='data-p'>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                    <a className="data-aa" href='https://nicepage.com/website-builder'>More</a>
                  </div>
                  <br/>
                  <div className='container'>

                    <h1>02.STRATEGY</h1>
                    <p className='data-p'>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                    <a className="data-aa" href='https://nicepage.com/website-builder'>More</a>
                  </div> */}
                </div>
            
              </div>
            </div>
          </div>

        </div>
        <br/><br/>
    </div>
  )
}
export default Data;