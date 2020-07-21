import React, { useEffect } from 'react';
import { animateCSS } from './utils';

export default function Header() {
    useEffect(() => {
        animateCSS('.sidebar__avatar-wrapper img', 'bounce');
    }, []);

    const handleAvatarOnClick = () =>
        animateCSS('.sidebar__avatar-wrapper img', 'bounce');

    const handleCatsOnClick = () => {
        animateCSS('.i-love-cats', 'jackInTheBox');
        animateCSS('.heart', 'fadeIn');
    };

    return (
        <>
            <div className="sidebar">
                <div className="sidebar__avatar-wrapper">
                    <img
                        src="/images/me.jpg"
                        alt="Elis Offerni"
                        onClick={handleAvatarOnClick}
                    />
                </div>

                <div className="sidebar__text">
                    Hi! I'm
                    <h1 className="sidebar__text-highlight">Elis Offerni</h1>
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
            </div>
            <style jsx>
                {`
                    .sidebar {
                        margin: 20px 20px;
                        max-width: 300px;
                        align-self: center;
                        display: flex;
                        flex-wrap: wrap;
                        z-index: 1;
                    }

                    .sidebar__avatar-wrapper {
                        background: url('./images/bg2.png') no-repeat center;
                        background-size: contain;
                        margin: 10px;
                        width: 200px;
                        padding: 6px;
                    }

                    .sidebar__avatar-wrapper img {
                        border: 10px solid var(--color5);
                        border-radius: 50%;
                        width: 120px;
                        display: block;
                        margin: 0 auto;
                    }

                    .sidebar__text {
                        max-width: none;
                    }

                    .sidebar__text-highlight {
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
                        .sidebar {
                            max-width: none;
                        }

                        .sidebar__avatar-wrapper {
                            width: 220px;
                        }

                        .sidebar__avatar-wrapper img {
                            width: 140px;
                        }

                        .sidebar__text {
                            float: right;
                            max-width: 300px;
                        }
                    }
                `}
            </style>
        </>
    );
}
