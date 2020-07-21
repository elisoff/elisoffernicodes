import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { getResumeFilePdfLink } from '../components/resume-api';

import Link from 'next/link';

export default function Resume() {
    useEffect(() => {
        document.querySelector('.resume-page').scrollIntoView();
    }, []);

    const handleDownloadClick = () => {
        getResumeFilePdfLink().then((pdfLink) => window.open(pdfLink));
    };

    return (
        <div className="resume-page">
            <Link href="/">
                <a className="resume-button">
                    <FontAwesomeIcon
                        icon={faAngleDown}
                        className="animate__animated animate__rotateInDownLeft"
                    />

                    <span className="animate__animated animate__flipInX">
                        My resume
                    </span>
                </a>
            </Link>
            <div className="resume animate__animated animate__fadeIn">
                <div className="resume__container">
                    <div className="resume__iframe">
                        <iframe
                            title="Elis Offerni's Resume"
                            width="800px"
                            height="100%"
                            src="https://docs.google.com/document/d/e/2PACX-1vQzPPN8K9j6TvigrHb0-UBqeyBJ6R1fZnobXIVZ0M-LMTiFRCkF6hg7WSsvHoS7pR8YDhnC082RDpnt/pub?embedded=true"
                        ></iframe>
                    </div>
                </div>
                <button
                    className="resume__download-button"
                    type="button"
                    onClick={handleDownloadClick}
                >
                    <span>
                        <FontAwesomeIcon icon={faDownload} />
                    </span>
                    <span>Download</span>
                </button>
            </div>
            <style jsx>
                {`
                    .resume__container {
                        height: 100%;
                    }
                    .resume__container--hidden {
                        display: none;
                    }

                    .resume__iframe {
                        height: 100%;
                        display: flex;
                        justify-content: space-around;
                    }

                    iframe {
                        height: 900px;
                        margin: 10px;
                        border: none;
                        box-shadow: 0px 2px 4px var(--color4);
                    }

                    .resume__download-button {
                        background-color: var(--color1);
                        border: none;
                        border-radius: 4px;
                        color: #fff;
                        padding: 10px;
                        display: flex;
                        align-items: center;
                        margin: 10px auto;
                        text-shadow: 0px 1px 3px var(--color1-d);
                        font-family: 'Open Sans', sans-serif;
                        font-size: 10pt;
                    }

                    .resume__download-button span {
                        margin: 4px;
                    }

                    .resume__download-button:hover {
                        cursor: pointer;
                        background-color: var(--color1-d);
                    }
                `}
            </style>
        </div>
    );
}
