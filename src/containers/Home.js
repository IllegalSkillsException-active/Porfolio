import React, { Component } from 'react';

import { CenteredHeader } from './App.js'

class Home extends Component {
  render() {
    return (
      <div>
        <CenteredHeader>Hi! I'm Taylor. I'm a full stack web developer based in Salt Lake City.</CenteredHeader>
        <p>
          I'm comfortable throughout the stack, and I love pushing my boundaries and solving complex issues. 
        </p>
        <p>
          ​Outside of code, I like to push myself in other ways, whether that involves trying a new experience or going further than I have before on a long hike, I'm always pushing myself to improve upon the person I was yesterday.
        </p>
        <p>
           Previously, I've undergone an apprenticeship at Thinkful, studied computer engineering at Cascadia College, and done volunteer work for The Northwest Harvest.
        </p>
      </div>
    );
  }
}

export default Home;
