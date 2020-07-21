import Link from 'next/link';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import ReactGA from 'react-ga';

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        document.querySelector('.resume-button').scrollIntoView();

        ReactGA.pageview(router.asPath);
    }, []);

    return (
        <>
            <Link href="/resume">
                <a className="resume-button">
                    <FontAwesomeIcon
                        icon={faAngleRight}
                        className="animate__animated animate__rotateInDownLeft"
                    />
                    <span>My resume</span>
                </a>
            </Link>
        </>
    );
}
