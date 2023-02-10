import React from 'react'
import fff from '../images/fff.jpg';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MemoryIcon from '@mui/icons-material/Memory';
import Grid from './Grid';

// Çizgili image ve turuncu arka planlı sayfa
function AraSayfa() {
  return (
    <div className='AraSayfa'>
        <div className='AraSayfa'>
        
        <div className='back-image'> </div>
        <img src={fff} alt='' className="image2"></img>

        <div className='icerik'>
            <div className='container'>

                <div className='row'>
                    <div className='col-sm' id='grid-1'>

                        <Grid page="AraSayfa" grid="grid1"></Grid>

                    {/* <div className='container'>
                            <i class="fa-solid fa-lightbulb"></i>
                            <br/>
                            <h1 className='ara-h1'>DEVELOPMENT</h1>
                        </div> */}

                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className='col-sm' id='grid-2'>

                        <Grid page="AraSayfa" grid="grid2"></Grid>

                    {/* <div className='container'>
                            <i class="fa-solid fa-wifi"></i>
                            <br/>
                            <h1 className='ara-h1'>5G NETWORK</h1>
                        </div> */}

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
export default AraSayfa;