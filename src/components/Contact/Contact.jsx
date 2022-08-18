import React from "react";
import contact from "../../images/contact.png";
import "./contact.css";
const Contact = () => {
    return (
        <div className='g-container g-section-container' id='contact'>
            <h1 className='g-section-heading'>Contact Us</h1>
            <div className=' contact-container'>
                <div className='contact-img'>
                    <img src={contact} alt='' />
                </div>
                <div className='contact-form'>
                    <form>
                        <input
                            type='text'
                            name='user-name'
                            className='i-user'
                            placeholder='Name'
                        />
                        <input
                            type='email'
                            name='user-email'
                            className='i-user'
                            placeholder='Email'
                        />
                        <textarea
                            name='message'
                            className='i-user'
                            placeholder='Message'
                        />
                        <input
                            type='submit'
                            value='Send'
                            className='c-btn-send'
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
