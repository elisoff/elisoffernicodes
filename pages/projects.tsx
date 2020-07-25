import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { animateCSS } from '../utils';

import { useRouter } from 'next/router';
import ReactGA from 'react-ga';

function ProjectCard({ name, description, imageUrl, links }) {
    return (
        <article className="project">
            <h3>{name}</h3>
            <hr />
            <div className="image">
                {imageUrl && <img src={imageUrl} alt={name} />}
            </div>
            <div className="description">{description}</div>
            <div className="links">
                <ul>
                    {links.map(({ url, text }, idx: number) => {
                        return (
                            <li key={idx}>
                                <a href={url}>{text}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <style jsx>
                {`
                    .project {
                        flex: 1 1 auto;
                        min-width: 50%;
                        max-width: 50%;
                        margin: 10px;
                        box-shadow: 0 1px 6px 0 var(--color1);
                        border-radius: 4px;
                    }

                    h3 {
                        border-radius: 4px 4px 0 0;
                        margin: 0;
                        padding: 12px;
                        background-color: var(--color1);
                        color: var(--color5);
                        font-family: 'Roboto Slab', serif;
                    }

                    hr {
                        margin: 0;
                        border: 1px solid var(--color5);
                    }

                    .image {
                        margin: 10px;
                        text-align: center;
                    }

                    .image img {
                        width: 50%;
                    }

                    .description {
                        padding: 6px;
                    }

                    .links {
                        padding: 6px;
                        background-color: var(--color5);
                    }

                    .links ul {
                        display: flex;
                    }

                    .links li {
                        flex-grow: 1;
                    }

                    .links a {
                        color: var(--color1);
                        text-shadow: none;
                        padding: 4px;
                    }

                    .links a:hover {
                        text-decoration: underline;
                    }
                `}
            </style>
        </article>
    );
}

ProjectCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.node.isRequired,
    links: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string,
            text: PropTypes.string,
        })
    ).isRequired,
    imageUrl: PropTypes.string,
};

export default function Projects() {
    const router = useRouter();

    useEffect(() => {
        animateCSS('.projects-page', 'fadeIn');

        ReactGA.pageview(router.asPath);
    }, []);

    return (
        <div className="projects-page">
            <h1>Projects</h1>
            <section className="projects">
                <ProjectCard
                    name="Random Episodes"
                    description={
                        <p>
                            Search for a TV Show and let the app decide which
                            episode you'll watch. Built with{' '}
                            <strong>React</strong> and <strong>Node</strong>.
                        </p>
                    }
                    imageUrl="/images/projects/random-episodes.jpg"
                    links={[
                        {
                            url: 'https://github.com/elisoff/random-episodes',
                            text: 'Github',
                        },
                        {
                            url: 'https://randomepisodes.site',
                            text: 'See it in action',
                        },
                    ]}
                />
            </section>
            <style jsx>{`
                .projects {
                    display: flex;
                    flex-wrap: wrap;
                }
            `}</style>
        </div>
    );
}
