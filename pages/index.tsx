import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ReactGA from 'react-ga';
import About from '../components/About';

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        ReactGA.pageview(router.asPath);
    }, []);

    return (
        <>
            <About />
        </>
    );
}
