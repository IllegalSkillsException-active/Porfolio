import React, { Component } from 'react';
import styled from 'styled-components';

import { CenteredHeader } from './App.js'

const LifeThumbnail = styled.img`
  width: 70%;
  display: block;
  margin: 0 auto;
`;

const LifeHeader = styled.h4`
  font-size: 1.25em;
  text-align: center;
`;

const LifeProjectBlurb = styled.div`
  padding: 4% 0;
  width: 75%;
  margin: auto;
`

const LifeRow = styled.div`
  margin: 20px -15px;
`

class Life extends Component {
  render() {
    return (
      <div>
        <div>
          <CenteredHeader>Some Memorable Moments in life that shaped me into the person I am today:</CenteredHeader>
        </div>
        {/*Row 1*/}
        <LifeRow className="row">
          <div className="col-md-6 col-sm-12">
              <LifeThumbnail src={require("../assets/alaskaLake.jpg")}/>
              <LifeHeader>After an 11 mile hike up to Alaska Lake</LifeHeader>
          </div>
          <div className="col-md-6 col-sm-12">
              <LifeThumbnail src={require("../assets/seattleScienceCenter.jpg")}/>
              <LifeHeader>After Exploring the Seattle Science Center With some amazing Friends</LifeHeader>
            <LifeProjectBlurb>Best photo booth in seattle...</LifeProjectBlurb>
          </div>

        {/*Row 2*/}
        <div className="row">
          <div className="col-md-6 col-sm-12">
              <LifeThumbnail src={require("../assets/hiking.jpg")}/>
              <LifeHeader>Preparing to explore lands unknown</LifeHeader>
        </div>
      </div>
      </LifeRow>
      </div>
    )
  };
}


export default Life;
