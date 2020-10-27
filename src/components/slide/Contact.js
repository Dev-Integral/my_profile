import React, { Component } from 'react';
import FieldSet from '../common/FieldSet';


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
class Contact extends Component {
    render() {
        return (
            <div className="slide" id="5">
                <div className="content fifth-content">
                    <div className="container-fluid">
                        <div className="col-md-6">
                            <div id="map">
                                <h2>ContactMe</h2>
                                <img src="/img/first_big_item.jpg" alt="contact me" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <form id="contact" action="https://formspree.io/f/mknprdjq" name="contractor" method="POST">
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
                                        <button type="submit" id="form-submit" className="btn">Send Now</button>
                                    </fieldset>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;