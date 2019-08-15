import React, { Component } from 'react';

class Welcome extends Component {

  countDays(returning) {
    const dayInMillis = 24*60*60*1000;
    const now = new Date();
    const start = new Date(2019, 7, 14) ;
    const end = new Date(2019, 11, 20) ;
    const daysThere = Math.round(Math.abs((now.getTime() - start.getTime()) / (dayInMillis)));
    const daysLeft = Math.round(Math.abs((now.getTime() - end.getTime()) / (dayInMillis)));
    return returning ? daysLeft : daysThere;
  }

  render() {
    return(
      <section id="welcome">
        <p>Updates from</p>
        <h1>Blog</h1>
        <div className="infos">
          <p>Days in Adventure&emsp;<b>{this.countDays()}</b></p>
          <p>Days till return&emsp;<b>{this.countDays(true)}</b></p>
          <p>Current Country&emsp;<b>{this.props.country}</b></p>
        </div>
      </section>
    );
  }
}

export default Welcome;