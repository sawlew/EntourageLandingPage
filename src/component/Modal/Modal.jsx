import React from 'react'
import "./modal.css"
import { useForm, ValidationError } from '@formspree/react';

const Modal = ({displayModal}) => {

    const [state, handleSubmit] = useForm("xdoqpvjo");
    if (state.succeeded) {
        return (
            <div>
              <p>Thanks for joining!</p>
            </div>
          );
    }

  return (
    <div className='light-bg'>
        <div data-aos="fade-right" className='main-bg'>
        <span class="close" onClick={displayModal}>&times;</span>
            <div className='head-tag'>
                <h1>Coming soon!!!</h1>
                <p>Be the first to know when it's available</p>
            </div>
            <form method="POST" onSubmit={handleSubmit} id='form'>
                <div className='form-tag'>
                    {/* <label htmlFor="name">Name</label><br /> */}
                    <input type="text" placeholder='Name' name='name' id='name' />
                    <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                    />
                </div>
                <div className='form-tag'>
                    {/* <label htmlFor="email">Email</label><br /> */}
                    <input type="email" placeholder='Email' name="email" id="email" />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                </div>

                <ValidationError errors={state.errors} />
                <input type="submit" className='submit-button' disabled={state.submitting} value="Submit" />
                {/* <button type="submit" ></button> */}

            </form>
        </div>
    </div>
  )
}

export default Modal