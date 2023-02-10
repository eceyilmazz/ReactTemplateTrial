import React from 'react'
import key from '../images/key.jpg';
import Grid from './Grid';

function Key() {
    return (
        <div>
            <br />
            <h1>Key Features</h1>
            <p>From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.</p>

            <div className='container'>
                <div className='row'>
                    <div className='col-sm'>

                        <div className='container' >


                            <img src={key} alt='' className='keyImg'></img>


                        </div>


                    </div>

                    <div className='col-sm' >
                        <div className='container'>

                            <div className='row'>
                                <div className='col-sm' id='grid1'>

                                    <Grid page="Key" grid="grid1"></Grid>

                                    {/* <Grid icon="fa-solid fa-laptop-code" title="Development" fontW="400" fontS="40px" textColor="white"></Grid> */}


                                    {/* <div className='container'>
                                    <i className="fa-solid fa-laptop-code"></i>
                                    <h1 className='key-h1'>Development</h1>
                                </div> */}

                                </div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div className='col-sm' id='grid2'>

                                    <Grid page="Key" grid="grid2"></Grid>

                                    {/* <Grid 
                                    icon="fa-solid fa-briefcase"
                                    title="Top Skills"
                                    fontW="400" 
                                    fontS="40px" 
                                    textColor="white">
                                </Grid> */}

                                    {/* <div className='container'>
                                    <i class="fa-solid fa-briefcase"></i>
                                    <h1 className='key-h1'>Top Skills</h1>
                                </div> */}

                                </div>
                            </div>
                            <br />
                            <div className='row'>
                                <div className='col-sm' id='grid3'>

                                    <Grid page="Key" grid="grid3"></Grid>

                                    {/* <Grid
                                        icon="fa-solid fa-table-cells-large"
                                        title="Design"
                                        fontW="400"
                                        fontS="40px"
                                        textColor="white" >
                                    </Grid> */}

                                    {/* <div className='container'>
                                    <i class="fa-solid fa-table-cells-large"></i>
                                    <h1 className='key-h1'>Design</h1>
                                </div> */}

                                </div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div className='col-sm' id='grid4'>

                                    <Grid page="Key" grid="grid4"></Grid>

                                    {/* <Grid
                                        icon="fa-solid fa-mobile"
                                        title="Responsive"
                                        fontW="400"
                                        fontS="40px"
                                        textColor="white">
                                    </Grid> */}

                                    {/* <div className='container'>
                                    <i class="fa-solid fa-mobile"></i>
                                    <h1 className='key-h1'>Responsive</h1>
                                </div> */}

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <br />

            <p>Image from ...</p>
            {/* Image'in alındığı kaynağı göstermek için ayrı bir component olabilir ? */}

        </div>
    )
}
export default Key;