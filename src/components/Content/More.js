import axios from 'axios';
import { useState, useEffect } from 'react'
import Button from './Button';
import '../../Styles/style.css';

function More(props) {

  const page = props.page;

  const [contents, setContent] = useState([]);

  useEffect(() => {
    axios("http://localhost:3001/contents")
      .then((res) => setContent(res.data))
      .catch((e) => console.log(e))
  }, []);

  return (
    <div className='container'>

      {
        contents.map((content) => ( content.pageName === page &&
          <div key={content.id}>
            
            {/* <h1 className='more-h1'>{content.title}</h1> */}
           
            <h1 className={content.styles.h1}>{content.title}</h1>


            <br />

            <p className={content.styles.p}>{content.body}</p>

            <p className={content.styles.p}>{content.detail}
              <b>
                <a className={content.styles.a} href={content.detailUrl}> Freepik</a>
              </b>
            </p>


            <br/>

            <Button title = {content.btnContent} />
        
            

          </div>
        ))
      }



      {/* <h1 className='more-h1'>{props.title}</h1>  */}

      <br />

      {/* <p className='more-p'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p> */}



      <br />


      {/* <Button title={props.butn} /> */}

    </div>
  )
}
export default More;