import axios from 'axios';
import { useState, useEffect } from 'react'
import React from 'react'
import '../../Styles/style.css';


function Address(props) {

  const type = props.type;

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios("http://localhost:3001/contacts")
      .then((res) => setContacts(res.data))
      .catch((e) => console.log(e))
  }, []);
  
  return (
    <>
      {
        contacts.map((contact) => contact.name === type &&
        <div key={contact.id} id={contact.name}>
          <br/>
          <i class={contact.icon} />        
         <br/>
         <h1>{contact.title}</h1>
         <p>{contact.content}</p>


        </div>)
      }

    </>



//     <div  id='address'>

//         <br/>
//         <i class="fa-solid fa-location-pin" />        
//         <br/>
//         <h1>{props.title}</h1>

//         <p>Keas 69 Str.
// 15234, Chalandri
// Athens,
// Greece</p>

//       </div>
  )
}
export default Address;