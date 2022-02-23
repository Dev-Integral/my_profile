import React from 'react';
import FieldSet from '../common/FieldSet';
import { useForm} from '@formspree/react';
import firstBig from '../images/first_big_item.jpg';
const fields = {
    sections: [
        [
            { name: 'name', type: 'text', placeholder: 'Your name', elementName: 'input' },
            { name: 'email', type: 'email', placeholder: 'Your email', elementName: 'input' },
            { name: 'subject', type: 'text', placeholder: 'Subject', elementName: 'input' }
        ],
        [
            { name: 'message', rows: '6', placeholder: 'Your message...', elementName: 'textarea' }
        ]
    ]
}
const Contact = () => {
    const [state, handleSubmit] = useForm("meqngdvv");
    if (state.succeeded) {
        return (
            <div className='slide'>
                <div className="content first-content">
                    <div className="container-fluid">
                        <div className="col-md-6">
                            <div id="map">
                                <h2>Thank You!</h2>
                                <img src={firstBig} alt="contact me" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className='row'>
                                <div className="col-md-12 text-align-center">
                                    <div><p>We'll respond as soon as possible.</p></div>
                                    <fieldset>
                                        <div className='download-btn'>
                                            <button className='downloader' onClick={() => handleSubmit({ ...state, succeeded: false })}>Back To Form</button>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    }
    return (
        <div className="slide" id="5">
            <div className="content fifth-content">
                <div className="container-fluid">
                    <div className="col-md-6">
                        <div id="map">
                            <h2>Contact Me</h2>
                            <img src={firstBig} alt="contact me" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <form id="contact" onSubmit={handleSubmit}>
                            <div className="row">
                                {
                                    fields.sections.map((section, sectionIndex) => {
                                        return (
                                            <div className="col-md-12" key={sectionIndex}>
                                                {section.map((field, fieldIndex) => {
                                                    return (< FieldSet
                                                        key={fieldIndex}
                                                        {...field}
                                                    />)
                                                })}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="col-md-12">
                                <fieldset>
                                    <button id="form-submit" type="submit" disabled={state.submitting} className="btn">Send Now</button>
                                </fieldset>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Contact;