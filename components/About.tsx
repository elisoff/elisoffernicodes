import PropTypes from 'prop-types';

export default function About() {
    return (
        <>
            <div className="about animate__animated animate__fadeIn">
                <h1>About</h1>
                <div>
                    <p>
                        I'm a Brazilian Software Engineer living in Vancouver,
                        Canada. I've been developing software for a living for
                        9 years.
                    </p>
                    <p>
                        I realized programming was going to be my job when I
                        wrote my first hello world in a class at my "Informatics
                        Technician" course. Since then, I learned a lot about
                        what being a Software Engineer is, and I'm on a mission
                        to continue learning every day.
                    </p>
                    <p>
                        I have experience working in agile environments, working
                        closely with product and design to develop features that
                        combine the right technical implementations (considering
                        time, cost and benefit) with the best user experience.
                        My primary stack and focus include Javascript (React and
                        Angular), NodeJS, HTML, CSS (SASS and LESS), testing
                        with Jest, Testing Library and Enzyme. A lot of my
                        experience also involves integrating with and developing
                        REST APIs, having worked in the back-end with languages
                        such as Python, Go, Scala and PHP.
                    </p>
                </div>
            </div>
        </>
    );
}

About.propTypes = {
    initAsExpanded: PropTypes.bool,
};
