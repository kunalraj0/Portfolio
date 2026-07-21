import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pomega from  "../../Assets/Projects/ProjectOmega.png";
import chatify from "../../Assets/Projects/chatify.png";
import globaloutbreak from "../../Assets/Projects/Screenshot (130).png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        {/* Projects Section */}
        <h2 className="project-subheading" style={{ color: "white" }}>Projects</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="CareTrack"
              description="Will Update Soon.."
              ghLink="https://github.com/kunalraj0/CareTrack"
            />
          </Col>
          {/* Add more projects in this section if needed */}
        </Row>

        {/* Game Projects Section */}
        <h2 className="project-subheading" style={{ color: "white" }}>Game Projects</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px"}}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pomega}
              isBlog={false}
              title="Project Omega"
              description=" Designed and implemented engaging puzzle mechanics that challenged players to think creatively and strategically in VR."
              demoLink="https://youtu.be/pX6Z9RqO-FE"
              githubDisabled={true} // Disables the GitHub button
            />
          </Col>
          {/* Add more projects in this section if needed */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={globaloutbreak}
              isBlog={false}
              title="Global Outbreak"
              description="As the lead game designer on this project, I spearheaded the development of a thrilling zombie-themed multiplayer shooter game built using Unreal Engine. The game pits players against hordes of relentless undead in a fight for survival, where teamwork and strategic thinking are essential to emerging victorious."
              demoLink="https://youtu.be/Tsb8GgV5zhM"
              githubDisabled={true} // Disables the GitHub button
            />
          </Col>
        </Row>

        {/* AR Effects Section */}
        <h2 className="project-subheading" style={{ color: "white" }}>AR Effects</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={null} // No thumbnail for now
              isBlog={false}
              title="Goblin Effect"
              demoLink="https://youtube.com/effect/689b89f1-0000-21d9-8620-3c286d3434f6"
              githubDisabled={true}
            />
          </Col>
          {/* Add more projects in this section if needed */}
        </Row>

      </Container>
    </Container>
  );
}

export default Projects;
