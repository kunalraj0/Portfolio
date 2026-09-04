import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pomega from "../../Assets/Projects/ProjectOmega.png";
import chatify from "../../Assets/Projects/chatify.png";
import globaloutbreak from "../../Assets/Projects/Screenshot (130).png";
import blogImg from "../../Assets/Projects/blog.png";
import placeholderImg from "../../Assets/Projects/project-placeholder.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p className="project-intro">
          Here are a few highlighted projects from my experience in app development, game design, and XR/AR innovation.
        </p>

        <h2 className="project-subheading">Projects</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholderImg}
              isBlog={false}
              title="Surveillance Drone"
              description="Associated with University of Mumbai. Designed the overall drone architecture including frame, propulsion, and power supply. Programmed the flight controller using Arduino and integrated GPS, camera, and telemetry for live mission feedback. Developed ground control station software for real-time monitoring and remote operation. Implemented autonomous waypoint navigation, object tracking, and live video streaming while collaborating with team members to optimize reliability and safety."
              githubDisabled={true}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="CareTrack"
              description="A health tracking and workflow management dashboard built to improve patient care coordination."
              ghLink="https://github.com/kunalraj0/CareTrack"
            />
          </Col>
        </Row>

        <h2 className="project-subheading">Game Projects</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pomega}
              isBlog={false}
              title="Project Omega"
              description="Designed and implemented engaging puzzle mechanics that challenged players to think creatively and strategically in VR."
              demoLink="https://youtu.be/pX6Z9RqO-FE"
              githubDisabled={true}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={globaloutbreak}
              isBlog={false}
              title="Global Outbreak"
              description="Led development of a zombie-themed multiplayer shooter in Unreal Engine focused on team-based survival gameplay."
              demoLink="https://youtu.be/Tsb8GgV5zhM"
              githubDisabled={true}
            />
          </Col>
        </Row>

        <h2 className="project-subheading">AR Effects</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholderImg}
              isBlog={false}
              title="Goblin Effect"
              description="Created an AR effect with immersive visuals and character interactions for live camera experiences."
              demoLink="https://youtube.com/effect/689b89f1-0000-21d9-8620-3c286d3434f6"
              githubDisabled={true}
            />
          </Col>
        </Row>

        <h2 className="project-subheading">Publications</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogImg}
              isBlog={false}
              title="Hydrophobia: An Intense Fear of Water"
              description="A chapter on VR exposure therapy for hydrophobia, exploring virtual reality exposure therapy (VRET) mechanisms, benefits, patient experience, and future research directions."
              demoLink="https://www.igi-global.com/gateway/chapter/339320"
              actionLabel="Publication"
              githubDisabled={true}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
