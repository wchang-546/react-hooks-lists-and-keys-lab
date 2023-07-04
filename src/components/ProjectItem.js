import React from "react";

function ProjectItem({ name, about, technologies }) {
  const techSpan = technologies.map((techs, key) => {
    return (
      <span key={key}> {techs} </span>
    )
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techSpan}
      </div>
    </div>
  );
}

export default ProjectItem;
