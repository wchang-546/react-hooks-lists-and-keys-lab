import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectList = projects.map((projects) => {
    return <ProjectItem key={projects.id} name={projects.name} about={projects.about} technologies={projects.technologies}/>
  }) 


  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projectList}
      </div>
    </div>
  );
}

export default ProjectList;
