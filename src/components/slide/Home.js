import React, { Component } from 'react';
import ContactTest from '../common/ContactTest';
import DownloadFile from '../common/DownloadFile';
import author from '../images/integral.jpg'
class Home extends Component {
    render() {
        return (
            <div className="slide" id="1">
                <div className="content first-content">
                    <div className="container-fluid">
                        <div className="col-md-3">
                            <div className="author-image"><img src={author} alt="Author" /></div>
                        </div>
                        <div className="col-md-9">
                            <h2>AYOOLA TAIWO MORUFF</h2>
                            <p>
                                A fullstack javascript developer with keen interest in web designs and development. 
                            </p>                            
                            <DownloadFile />
                            <ContactTest/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;
