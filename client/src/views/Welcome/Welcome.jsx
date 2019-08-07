import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return(
      <section id="welcome">
        <p>Updates from</p>
        <h1>Donia & Jonas</h1>
        <div className="infos">
          <p>Days in Adventure&emsp;<b>80</b></p>
          <p>Days till return&emsp;<b>40</b></p>
          <p>Current Country&emsp;<b>Mexico</b></p>
        </div>
      </section>
    );
  }
}

export default Welcome;