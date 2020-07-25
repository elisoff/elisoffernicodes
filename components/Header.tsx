import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { animateCSS } from '../utils';
import Link from 'next/link';
import Menu from './Menu';

export default function Header() {
    useEffect(() => {
        animateCSS('.header__avatar-wrapper img', 'bounce');
    }, []);

    const handleAvatarOnClick = () => {
        animateCSS('.header__avatar-wrapper img', 'bounce');

        ReactGA.event({
            category: 'EasterEgg',
            action: 'avatar-clicked',
        });
    };

    const handleCatsOnClick = () => {
        animateCSS('.i-love-cats', 'jackInTheBox');
        animateCSS('.heart', 'fadeIn');

        ReactGA.event({
            category: 'EasterEgg',
            action: 'cats-clicked',
        });
    };

    return (
        <>
            <header className="header">
                <div className="header__avatar-wrapper">
                    <img
                        src="/images/me.jpg"
                        alt="Elis Offerni"
                        onClick={handleAvatarOnClick}
                    />
                </div>

                <div className="header__text">
                    Hi! I'm
                    <h1 className="header__text-highlight">Elis Offerni</h1>
                    <div>
                        I love{' '}
                        <span className="cats" onClick={handleCatsOnClick}>
                            cats
                        </span>{' '}
                        and coding!
                        <span className="heart">💕</span>
                    </div>
                    <div className="i-love-cats animate__delay-1s">MEOW 🐈</div>
                    <p>
                        Here you'll find some information about me and my resume
                        for viewing and downloading. I'm also on{' '}
                        <a
                            href="https://linkedin.com/in/elisofferni"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>{' '}
                        and{' '}
                        <a
                            href="https://github.com/elisoff"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                        .
                    </p>
                </div>
            </header>

            <Menu />
            <style jsx>
                {`
                    .header {
                        margin: 20px 20px;
                        max-width: 300px;
                        align-self: center;
                        display: flex;
                        flex-wrap: wrap;
                        z-index: 1;
                    }

                    .header__avatar-wrapper {
                        background: url('./images/bg2.png') no-repeat center;
                        background-size: contain;
                        margin: 10px;
                        width: 200px;
                        padding: 6px;
                    }

                    .header__avatar-wrapper img {
                        border: 10px solid var(--color5);
                        border-radius: 50%;
                        width: 120px;
                        display: block;
                        margin: 0 auto;
                    }

                    .header__text {
                        max-width: none;
                    }

                    .header__text-highlight {
                        margin: 0;
                        color: var(--color2);
                        font-size: 32pt;
                        word-spacing: -6px;
                    }

                    .cats {
                        cursor: pointer;
                        opacity: 0.7;
                    }

                    .heart {
                        padding: 8px;
                        opacity: 0;
                    }

                    .i-love-cats {
                        opacity: 0;
                        color: var(--color2);
                    }

                    @media only screen and (min-width: 768px) {
                        .header {
                            max-width: none;
                        }

                        .header__avatar-wrapper {
                            width: 220px;
                        }

                        .header__avatar-wrapper img {
                            width: 140px;
                        }

                        .header__text {
                            float: right;
                            max-width: 300px;
                        }
                    }
                `}
            </style>
        </>
    );
}
