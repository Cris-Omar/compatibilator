
import React, { useState } from 'react'
import "../styles/style.css"


export default function Contact() {

  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);


  return (
    <div className='contact'>
      
      <h1>Contact us</h1>
      <form className='contactForm'>
       <div>
         <label htmlFor='name'>Name</label>
         <input className='name' ></input>
       </div>
    
       <div>
         <label htmlFor='email'>Email</label>
         <input className='email' ></input>
       </div>
    
       <div>
         <label htmlFor='message'>Message</label>
         <textarea type="text" rows="6" ></textarea>
       </div>

       <div className='fileUploader'>
        <p>Upload files</p>      
        <i class="fa-solid fa-arrow-up-from-bracket" type="file" value={selectedFile} onChange={(e) => setSelectedFile(e.target.files[0])}></i>
       </div>

       <button type="submit">Submit</button>
    
       </form>
    </div>
  )
}
