import Head from 'next/head';
import { dom } from '@fortawesome/fontawesome-svg-core';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import About from '../components/About';

import 'animate.css';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Sofia&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div className="app animated fadeIn">
                <div className="app__bg"></div>

                <Sidebar />
                <div className="app__content">
                    <About />
                    <Component {...pageProps} />
                </div>
                <Footer />
            </div>

            <style global jsx>{`
                ${dom.css()}
                :root {
                    --color1: #413c58ff;
                    --color1-d: #2f2a46;
                    --color2: #a3c4bcff;
                    --color3: #bfd7b5ff;
                    --color3-d: #73856d;
                    --color3-l: #eefde2;
                    --color4: #e7efc5ff;
                    --color4-l: #f4f9d2;
                    --color4-d: #969982;
                    --color5: #f2dda4ff;
                }
                body {
                    font-family: 'Roboto Slab', serif;
                    font-size: 13px;
                    color: var(--color1);
                    background: #fff;
                }

                h1,
                h2,
                h3 {
                    font-family: 'Sofia', cursive;
                }

                a,
                a:visited,
                a:active {
                    color: var(--color3);
                    text-decoration: none;
                    text-shadow: 0px 1px 2px var(--color3-l);
                }

                a:hover {
                    color: var(--color3-d);
                }

                .app {
                    display: flex;
                    justify-content: flex-start;
                    flex-direction: column;
                    align-content: center;
                    height: calc(100vh - 20px);
                }

                .app__bg {
                    background-image: url('./images/bg1.png');
                    background-size: 300px;
                    opacity: 0.15;
                    width: 100%;
                    height: 300px;
                    animation-name: pulse;
                    animation-duration: 3s;
                    animation-delay: 0s;
                    position: fixed;
                    z-index: -1;
                }

                .app__content {
                    min-width: 360px;
                    max-width: 900px;
                    width: 50%;
                    margin: 6px;
                    align-self: center;
                }

                a.resume-button {
                    display: block;
                    margin: 20px auto;
                    padding: 6px 10px;
                    font-family: 'Sofia', cursive;

                    background-color: var(--color4-l);
                    padding: 10px;
                    font-size: 16px;
                    margin: 0;
                    font-weight: 200;
                    color: var(--color4-d);
                }

                a.resume-button:hover {
                    cursor: pointer;
                }

                .resume-button span {
                    margin: 0 6px 0 6px;
                }

                .footer {
                    font-size: 11px;
                    align-self: flex-end;
                    width: 100%;
                    flex: 1 1 auto;
                    display: flex;
                    align-items: flex-end;
                    justify-content: center;
                    margin: 10px;
                }

                @media only screen and (min-width: 768px) {
                    .app__content {
                        min-width: 750px;
                    }
                }
            `}</style>
        </>
    );
}
