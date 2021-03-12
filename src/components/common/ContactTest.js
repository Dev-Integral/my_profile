import React, { useState } from 'react';

const ContactTest = () => {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneError, setPhoneError] = useState(false);
    const [subject, setSubject] = useState('');
    const [subjectError, setSubjectError] = useState(false);
    const [message, setMessage] = useState('');
    const [messageError, setMessageError] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [status, setStatus] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if ((name !== '' && !nameError) &&
            (email !== '' && !emailError) &&
            (subject !== '' && !subjectError) &&
            (message !== '' && !messageError)) {
            setStatus('SUBMITTING');
            setHidden(true);
            const form = event.target;
            const data = new FormData(form);
            const xhr = new XMLHttpRequest();
            console.log(form.action);
            xhr.open(form.method, form.action);
            xhr.setRequestHeader("Accept", "application/json");
            xhr.onreadystatechange = () => {
                if (xhr.readyState !== XMLHttpRequest.DONE) return;
                if (xhr.status === 200) {
                    form.reset();
                    setStatus('SUCCESS');
                    setName('');
                    setMessage('');
                    setPhoneNumber('');
                    setSubject('');
                    setEmail('');
                    setHidden(false);

                } else {
                    setStatus('FAIL');
                    setHidden(false)
                }
            };
            xhr.send(data);
        } else {
            setStatus('EMPTY');
        }
    }
    const validateInput = (data) => {
        let nameFormat = /^([A-Za-z]+?)\s([A-Za-z]+?)$/                 // for single name /^[A-Za-z]+$/;
        let emailFormat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
        let phoneFormat = /^\d+$/;
        switch (data.type) {
            case 'name':
                setStatus('');
                const firstname = data.value.split(' ')[0];
                const lastname = data.value.split(' ')[1];
                
                if (firstname?.length > 1 && lastname?.length > 1) {
                    data.value.match(nameFormat) ? setNameError(false) : setNameError(true);
                } else { setNameError(true) }
                break;
            case 'email':
                setStatus('');
                data.value.match(emailFormat) ? setEmailError(false) : setEmailError(true);
                break;
            case 'phone':
                setStatus('');
                data.value.match(phoneFormat) ? setPhoneError(false) : setPhoneError(true);
                break;
            case 'subject':
                setStatus('');
                data.value.trim().length >= 5 ? setSubjectError(false) : setSubjectError(true);
                break;
            case 'message':
                setStatus('');
                data.value.trim().length >= 10 ? setMessageError(false) : setMessageError(true);
                break;
            default:
                return null;

        }
    }

    return (
        <div className="content">
            <div className="contactInfo">
                <div className="contact-title-info">
                    <h3>Contact Info</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit dolores ad molestiae
                    rem repudiandae modi, quisquam illum hic euorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Iusto sit accusamus
                </p>
                </div>
                <div className="contactInfoBx">
                    <div className="box">
                        <div className="text">
                            <i className="fa fa-phone"></i>
                            <span className="addressLink"><a href="tel: +2345561187453">464-523-2354</a></span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="text">
                            <i className="fa fa-envelope-o"></i>
                            <span className="addressLink">
                                <a href="email: macbrill13@gmail.com">temporary@mail.net</a>
                            </span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="text">
                            <i className="fa fa-map-o"></i>
                            <span className="addressLink">464523 super doper, Lekki Nigeria.</span>
                        </div>
                    </div>


                    
            </div>
            <div className="formBx">
                <form method='POST' action="https://formspree.io/f/mbjpvwqd" onSubmit={handleSubmit}>
                    {nameError === true ? <p className="error-message">Required: 'First Name' 'Last Name'</p> : null}
                    <input type="text" name='name' value={name} onChange={(e) => { setName(e.target.value); validateInput({ value: e.target.value, type: 'name' }); }} placeholder="Full Name (Required)" />

                    {emailError === true ? <p className="error-message">Required: Fill appropriate email address.</p> : null}
                    <input type="email" name='email' value={email} onChange={(e) => { setEmail(e.target.value); validateInput({ value: e.target.value, type: 'email' }) }} placeholder="Email (Required)" />

               
                    {subjectError === true ? <p className="error-message">Subject should be at least five characters!</p> : null}
                    <input type="subject" name='_subject' value={subject} onChange={(e) => { setSubject(e.target.value); validateInput({ value: e.target.value, type: 'subject' }) }} placeholder="Subject (Required)" />

                    {messageError === true ? <p className="error-message">Message should contain at least ten characters!</p> : null}
                    <textarea name='message' value={message} onChange={(e) => { setMessage(e.target.value); validateInput({ value: e.target.value, type: 'message' }) }} placeholder="Your Message (Required)"></textarea>

                    {!hidden ?
                        status === 'SUCCESS' ?
                            null
                            : <button type="submit">Submit</button>
                        : null}
                    {status === 'SUBMITTING' ? <p className="submitting-message">Submitting...</p> : null}
                    {status === 'FAIL' ? <p className="fail-message">Error: Please check your connection and try again.</p> : null}
                    {status === 'SUCCESS' ? <p className="success-message">Form successfully submitted. To submit another form, please type in the form field.</p> : null}
                    {status === 'EMPTY' ? <p className="empty-form-error">Fill all form fields appropiately!</p> : null}
                </form>
            </div>
        </div>
        </div>
    )
}
export default ContactTest;