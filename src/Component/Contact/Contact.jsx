import React, { useState,useEffect,fetchData, useRef } from 'react'
import './Contact.css'
import Loading from '../Loading/Loading'
function Contact() {
  const [loading, setloading] = useState(false)
  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycbyMCABi35HKv3MkXy5ja_4VPuQBrDrGV4dTDKMVUEo-iUGh82CU54qD1bZmR8t2Jyfj/exec"

  const handleSubmit = (e) => {
    e.preventDefault()
    setloading(true)
    fetch(scriptUrl, {
      method: 'POST',
      withCredentials: true,
      crossorigin: true,
      mode: "no-cors",
      body: new FormData(formRef.current),

    }).then(res => {
      setloading(false)
      console.log(res)
      alert("Form Submited Successfully")   
    })
      .catch(err => console.log(err))
  }
  return (
    <section className='contact-page' id='contact'>
      <h1 className='title'><span className="material-symbols-outlined ">mail</span>Contact</h1>
      <div className='form'>
        <form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
          <div className="box">
            <div className='top-row'>
              <input type="text" placeholder='Full Name' name='name' required />
              <input type="Email" placeholder='Email' name='email' required />
            </div>
            <input className='address' type="text" placeholder='Address' name='address' required/>
            <input className='text' type="text" placeholder='Type Something....' name='message' required />
            <div className='send'>
              {loading ? <Loading/> :   <button type="submit"><span className="material-symbols-outlined">send</span>Send</button>  }
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact