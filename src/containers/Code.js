import React, { Component } from "react";
import styled from "styled-components";

import { CenteredHeader } from "./App.js";
import { ColorScheme } from "../theme/styleConstants";

const PortRow = styled.div`
  margin: 0;
  padding-top: 50px;
  padding-bottom: 50px;
  display: block;
`;

const CodeThumbnail = styled.img`
  width: 100%;
  display: block;
  margin: 0 auto;
`;

const PortAllText = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const PortTitleContainer = styled.div`
  position: relative;
  margin: 0 auto;
  align-items: baseline;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-end;
  align-content: stretch;

  @media (max-width: 600px) {
    display: inline;
  }
`;

const PortTitle = styled.h2`
  flex: 1;
  font-family: Gotham, Helvetica, Arial, sans-serif;
  text-transform: uppercase;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const PortButton = styled.a`
  padding: 10px 15px;
  background: 0 0;
  border: 2px solid ${ColorScheme.secondary};
  border-radius: 3px;
  margin: 0 5px;
  color: ${ColorScheme.secondary};
  font-family: Gotham, Helvetica, Arial, sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  transition: all 0.3s ease;
  &:hover {
    background: ${ColorScheme.primary};
    color: #fff;
    border-color: ${ColorScheme.primary};
  }

  @media (max-width: 600px) {
    padding: 5px 7px;
  }
`;

const PortButtonContainer = styled.div`
  width: 30%;
  margin: 0 auto;

  @media (max-width: 600px) {
    margin-top: 15px;
    width: 50%;
  }
`;

const PortDescription = styled.p`
  display: block;
  margin: 15px 0;
`;

const UsedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
`;

const UsedItem = styled.ul`
  display: inline-block;
  padding: 7px 7px 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  color: #fff;
  background: ${ColorScheme.secondary};
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

class Code extends Component {
  render() {
    return (
      <div>
        <div>
          <CenteredHeader>Skills:</CenteredHeader>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Front-end:</h5>
              <ul>
                <li>JavaScript (ES6)</li>
                <li>React</li>
                <li>Redux</li>
                <li>HTML5</li>
                <li>CSS3/Sass</li>
                <li>jQuery</li>
                <li>AJAX</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Back-end:</h5>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL/Knex</li>
                <li>MongoDB/Mongoose</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Other:</h5>
              <ul>
                <li>Git</li>
                <li>Webpack</li>
                <li>JSON</li>
                <li>Mocha/Chai</li>
                <li>Agile development</li>
                <li>Heroku</li>
                <li>Socket.io</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <CenteredHeader>Recent work:</CenteredHeader>
          <PortRow>
            <a href="https://down-the-block.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <CodeThumbnail src={require("../assets/onboarding.png")} />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>DownTheBlock</PortTitle>
                <PortButtonContainer>
                  <PortButton href="https://down-the-block.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/thinkful-ei26/Down-The-Block-Client"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
                My capstone project from the immersive full stack web development program at Thinkful.
                DownTheBlock connects you with your neighborhood and provides a convenient way of staying informed. Whether you lost your pet, are throwing an event, or want 
                to be aware of the latest criminal activity around you, DownTheBlock 
                is here to help. Users can post, upload pictures, comment, filter, and search the forums in real-time.
                Users can also search for and directly message their neighbors within a 1 mile radius for a more private experience.
            </PortDescription>
              <PortDescription>
                I worked with two incredibly smart teammates to create DownTheBlock in
              three weeks.
            </PortDescription>
              <UsedList>
                <UsedItem>React.js</UsedItem>
                <UsedItem>Redux</UsedItem>
                <UsedItem>Socket.io</UsedItem>
                <UsedItem>HTML5</UsedItem>
                <UsedItem>Javascript</UsedItem>
                <UsedItem>Node</UsedItem>
                <UsedItem>Express</UsedItem>
                <UsedItem>MongoDB</UsedItem>
                <UsedItem>Google Maps api</UsedItem>
                <UsedItem>Sass</UsedItem>
                <UsedItem>JWT</UsedItem>
                <UsedItem>Passport</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
          <hr />
          <PortRow>
            <a href="https://alternis-vicibus.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <CodeThumbnail
                src={require("../assets/spacedRepetition.png")}
              />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>ALTERNIS VICIBUS</PortTitle>
                <PortButtonContainer>
                  <PortButton
                    href="https://alternis-vicibus.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/thinkful-ei26/spaced-rep-jordan-client"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
              Using our space-repetition algorithm designed to increase learnability, we've designed these 
              professional medical flash cards to recurr based on your answers.
              Using one flash card at a time, you will be prompted to submit an english translation. 
              Get it right, you may not see the card for a while. 
              Get it wrong, you might be seeing it sooner than you think.
            </PortDescription>
              <PortDescription>
                ALTERNIS VICIBUS is responsive and works on devices of all sizes.
            </PortDescription>
              <UsedList>
                <UsedItem>React.js</UsedItem>
                <UsedItem>Redux</UsedItem>
                <UsedItem>MongoDB</UsedItem>
                <UsedItem>CSS</UsedItem>
                <UsedItem>Node.JS</UsedItem>
                <UsedItem>Express</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
          <hr />
          <PortRow>
            <a href="https://github.com/IllegalSkillsException-active/solo-project-client" target="_blank" rel="noopener noreferrer">
              <CodeThumbnail
                 src={require('../assets/nettle&sage.png')}
              />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Nettle & Sage</PortTitle>
                <PortButtonContainer>
                  <PortButton
                    href="https://github.com/IllegalSkillsException-active/solo-project-client"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
              This project was made for my sister who is a massage therapist. The main goal was for
              a user to be able to book an appointment with her through this website. The website 
              itself contains Home, Appointments, About, and Offerings(massage options/pricing) pages.
            </PortDescription>
              <UsedList>
                <UsedItem>React.js</UsedItem>
                <UsedItem>Redux</UsedItem>
                <UsedItem>DateFns</UsedItem>
                <UsedItem>MongoDB</UsedItem>
                <UsedItem>CSS</UsedItem>
                <UsedItem>Node.JS</UsedItem>
                <UsedItem>Express</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
        </div>
      </div>
    );
  }
}

export default Code;
