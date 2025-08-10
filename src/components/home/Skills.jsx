import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const Skills = React.forwardRef(({ 
  heading, 

  programmingLanguages, 
  web, 
  web3, 
  mobile, 
  databases,
  devTools, 
  modeling, 
  gameDev 
}, ref) => {



  const skillsTabRef = React.useRef(null);
  const [isScrolled, setIsScrolled] = React.useState(false);
  //const navbarDimensions = useResizeObserver(navbarMenuRef);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );
  return (
    <Jumbotron ref={skillsTabRef} fluid className="bg-white m-0" id="skills">
      <Container className="p-5 ">
        <h2 ref={skillsTabRef} className="display-4 pb-5 text-center">
          {heading}
        </h2>
        <Tabs
          className="skills-tabs"
          defaultActiveKey="programming-languages"
          id="skills-tabs"
          fill
        >
          <Tab
            tabClassName="skills-tab lead"
            eventKey="programming-languages"
            title="Programming Languages"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={programmingLanguages} isScrolled={isScrolled} />
            </Row>
          </Tab>
          <Tab
            tabClassName="skills-tab lead"
            eventKey="web-development"
            title="Web Development"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={web} isScrolled={isScrolled} />
            </Row>
          </Tab>

          <Tab
            tabClassName="skills-tab lead"
            eventKey="web3-development"
            title="Web 3.0 Development"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={web3} isScrolled={isScrolled} />
            </Row>
          </Tab>

          <Tab
            tabClassName="skills-tab lead"
            eventKey="mobile-development"
            title="Mobile Development"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={mobile} isScrolled={isScrolled} />
            </Row>
          </Tab>

          <Tab
            tabClassName="skills-tab lead"
            eventKey="databases"
            title="Databases"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={databases} isScrolled={isScrolled} />
            </Row>
          </Tab>


          <Tab
            tabClassName="skills-tab lead"
            eventKey="development-tools"
            title="Development Tools"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={devTools} isScrolled={isScrolled} />
            </Row>
          </Tab>

          <Tab
            tabClassName="skills-tab lead"
            eventKey="3d-modeling"
            title="3D Modeling"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={modeling} isScrolled={isScrolled} />
            </Row>
          </Tab>


          <Tab
            tabClassName="skills-tab lead"
            eventKey="game-development"
            title="Game Development"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={gameDev} isScrolled={isScrolled} />
            </Row>
          </Tab>


        </Tabs>
      </Container>
    </Jumbotron>
  );
});

export default Skills;
