import React from 'react';

const Projects = () => {
    const projectData = [
        {
            title: 'Project One',
            description: 'This is a brief description of Project One. It showcases the main features and technologies used.',
            image: 'path/to/image1.jpg'
        },
        {
            title: 'Project Two',
            description: 'This is a brief description of Project Two. It highlights the unique aspects and functionalities.',
            image: 'path/to/image2.jpg'
        },
        {
            title: 'Project Three',
            description: 'This is a brief description of Project Three. It demonstrates the skills and tools applied in the project.',
            image: 'path/to/image3.jpg'
        }
    ];

    return (
        <div className="projects">
            <h2>My Projects</h2>
            <div className="project-list">
                {projectData.map((project, index) => (
                    <div key={index} className="project-item">
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;