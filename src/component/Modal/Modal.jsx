import React, { useState } from 'react';
import "./modal.css";
import { useForm, ValidationError } from '@formspree/react';

const Modal = ({ displayModal }) => {
    const [submitted, setSubmitted] = useState(false);
    const [state, handleSubmit] = useForm("xdoqpvjo");

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        await handleSubmit(event);
        if (state.succeeded) {
            setSubmitted(true);
        }
    };

    return (
        <div className='light-bg'>
            <div data-aos="fade-right" className='main-bg'>
                <span className="close" onClick={displayModal}>&times;</span>
                {submitted ? (
                    <div className='success-message'>
                        <p>Thanks for joining!</p>
                    </div>
                ) : (
                    <div>
                        <div className='head-tag'>
                            <h1>Coming soon!!!</h1>
                            <p>Be the first to know when it's available</p>
                        </div>
                        <form onSubmit={handleFormSubmit} id='form'>
                            <div className='form-tag'>
                                <input type="text" placeholder='Name' name='name' id='name' required />
                                <ValidationError
                                    prefix="Name"
                                    field="name"
                                    errors={state.errors}
                                />
                            </div>
                            <div className='form-tag'>
                                <input type="email" placeholder='Email' name="email" id="email" required />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>

                            <ValidationError className='error-message' errors={state.errors} />
                            <input type="submit" className='submit-button' disabled={state.submitting} value="Submit" />
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Modal;
