import React from 'react'
import fff from '../images/fff.jpg';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MemoryIcon from '@mui/icons-material/Memory';
import Grid from './Grid';


function Deneme() {
  return (
    <div className='AraSayfa'>
        <div className='AraSayfa'>
        
        <div className='back-image'> </div>
        <img src={fff} alt='' className="image2"></img>

        <div className='icerik'>
            <div className='container'>

                <div className='row'>
                    <div className='col-sm' id='grid-1'>
                        
                        <Grid icon="fa-solid fa-lightbulb" title="DEVELOPMENT" fontW="400" fontS="20px" textColor="black"></Grid>

                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className='col-sm' id='grid-2'>
                        
                        <Grid icon="fa-solid fa-wifi" title="5G NETWORK" fontW="400" fontS="20px" textColor="black"></Grid>

                    </div>
                </div>
                <br/>
                <div className='row'>
                    <div className='col-sm' id='grid-3'>
                        <div className='container'>
                            
                            <PsychologyIcon className='icon' sx={{ fontSize: 50 }}></PsychologyIcon>
                            <br/>
                            <br/>
                            <h1 className='ara-h1'>AI PRODUCT</h1>

                        </div>

                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className='col-sm' id='grid-4'>
                        <div className='container'>
                            <MemoryIcon className='icon' sx={{ fontSize: 50 }}></MemoryIcon>
                            <br/>
                            <br/>
                            <h1 className='ara-h1'>AUTOMATION</h1>

                        </div>

                    </div>
                </div>

            </div>

        </div>

        </div>
        
        
    </div>
  )
}
export default Deneme;