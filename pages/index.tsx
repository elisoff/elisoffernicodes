import Link from 'next/link';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
    useEffect(() => {
        document.querySelector('.resume-button').scrollIntoView();
    }, []);

    return (
        <>
            <Link href="/resume">
                <a className="resume-button">
                    <FontAwesomeIcon
                        icon={faAngleRight}
                        className="animate__animated animate__rotateInDownLeft"
                    />
                    <span>
                        My resume
                    </span>
                </a>
            </Link>
        </>
    );
}
