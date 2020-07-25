import Link from 'next/link';

export default function Menu() {
    return (
        <>
            <nav className="menu">
                <ul>
                    <Link href="/">
                        <li>
                            <a>
                                <span>About</span>
                            </a>
                        </li>
                    </Link>
                    <Link href="/resume">
                        <li>
                            <a>
                                <span>Resume</span>
                            </a>
                        </li>
                    </Link>
                    <Link href="/projects">
                        <li>
                            <a>
                                <span>Projects</span>
                            </a>
                        </li>
                    </Link>
                </ul>
            </nav>
            <style jsx>
                {`
                    .menu {
                        font-family: 'Sofia', cursive;
                        font-size: 16px;
                        margin: 0 auto;
                        font-weight: 200;
                    }

                    .menu ul {
                        padding: 0;
                        list-style-type: none;
                    }

                    .menu li {
                        display: inline-block;
                        margin: 6px;
                        background-color: var(--color4-l);
                        padding: 6px 10px;
                    }

                    .menu li a {
                        color: var(--color4-d);
                    }

                    .menu li:hover {
                        cursor: pointer;
                        transform: scale(1.2, 1.2);
                        animation: pulse 0.5s;
                    }

                    @keyframes pulse {
                        0% {
                            transform: none;
                        }
                    }
                `}
            </style>
        </>
    );
}
