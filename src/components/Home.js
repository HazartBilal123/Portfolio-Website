import React from 'react';

const Home = () => {
    return (
        <div className="home">
            <header className="home-header">
                <h1>Welcome to My Portfolio</h1>
                <p>Hi, I'm [Your Name], a passionate [Your Profession].</p>
            </header>
            <section className="home-introduction">
                <h2>About Me</h2>
                <p>
                    I am a [Your Profession] with experience in [Your Skills/Technologies]. 
                    I love creating beautiful and functional web applications.
                </p>
            </section>
            <section className="home-projects">
                <h2>Featured Projects</h2>
                <div className="project">
                    <h3>Project Title 1</h3>
                    <p>Description of Project 1. This project showcases my skills in [Technologies Used].</p>
                </div>
                <div className="project">
                    <h3>Project Title 2</h3>
                    <p>Description of Project 2. This project demonstrates my ability to [Skills/Technologies].</p>
                </div>
                <div className="project">
                    <h3>Project Title 3</h3>
                    <p>Description of Project 3. This project highlights my work in [Skills/Technologies].</p>
                </div>
            </section>
        </div>
    );
};

export default Home;