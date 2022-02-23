import React, { useState } from 'react';

const DownloadFile = () => {
    const [btnText, setBtnText] = useState(false);

    const DownloadMyData = () => {
        setBtnText(true);
        fetch('https://res.cloudinary.com/iinintinteintegintegrintegral/image/upload/v1645546968/Taiwo_Ayoola_nev8qy.pdf')
            .then(response => {
                response.arrayBuffer().then((buffer) => {

                    let url = window.URL.createObjectURL(new Blob([buffer
                    ]));
                    let link = document.createElement('a');
                    link.href = url;

                    link.setAttribute("download", "Ayoola Taiwo.pdf");  //or any other extension
                    document.body.appendChild(link);
                    link.click();
                    setBtnText(false);
                })
            })
            .catch(err => {
                alert("Oops! Check your connection.");
            })
    }

    return (
        <div>
            <div className="download-btn">
                <button className="downloader"
                    onClick={DownloadMyData}>
                    {btnText ? 'Please Wait. . . ' : 'Click to download resume'} 
                    &nbsp;<i className="fa fa-download" />
                </button>
            </div>
        </div>
    )
}

export default DownloadFile;