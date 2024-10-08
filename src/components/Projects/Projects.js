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
              description="Year 2177 Age of Android-- You were playing some games with your friends (as there is no work left on earth because everything is done by Robots and AI). Suddenly you got captured by an Unknown AI that is studying human emotions to further develop itself. Now your goal is to escape this hell loop before your sanity leaves you. Welcome to Project Omega"
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
              description="Unleash your inner warrior and join the battle against zombies in Global Outbreak! This adrenaline-fueled multiplayer game, developed by the brilliant technical team at SIESGST, is the ultimate test of survival. With a controller in hand, team up with a friend and conquer the zombie waves to secure the highest score. The stakes are high, as the top scorers will win exciting prizes. Enter as a solo player for just or bring a teammate for and double the fun. Don't miss this opportunity to showcase your skills and win big at Global Outbreak!"
              demoLink="https://youtu.be/Tsb8GgV5zhM"
              githubDisabled={true} // Disables the GitHub button
            />
          </Col>
        </Row>

        {/* AR Effects Section */}
        <h2 className="project-subheading" style={{ color: "white" }}>AR Effects</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          {/* Add more projects in this section if needed */}
        </Row>

      </Container>
    </Container>
  );
}

export default Projects;
