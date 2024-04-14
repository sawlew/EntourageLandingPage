import React from 'react'
import "./modal.css"

const Modal = ({displayModal}) => {
  return (
    <div className='light-bg'>
        <div data-aos="fade-right" className='main-bg'>
        <span class="close" onClick={displayModal}>&times;</span>
            <div className='head-tag'>
                <h1>Oops! This feature is not available.</h1>
                <p>Be the first to know when it's available</p>
            </div>
            <form action="" id='form'>
                <div className='form-tag'>
                    {/* <label htmlFor="name">Name</label><br /> */}
                    <input type="text" placeholder='Name' id='name' />
                </div>
                <div className='form-tag'>
                    {/* <label htmlFor="email">Email</label><br /> */}
                    <input type="email" placeholder='Email' name="email" id="email" />
                </div>
                <input type="button" className='submit-button' value="Submit" />

            </form>
        </div>
    </div>
  )
}

export default Modal