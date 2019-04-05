import React, { Component } from 'react';
import Calendar from 'react-calendar';
 
export default class Calendrier extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div>
        <Calendar 
          onChange={this.onChange}
          value={this.state.date}
          width={400}
          height={300}
          margin={{
            top: 10, right: 10, left: 0, bottom: 0,
          }}
        />
      </div>
    );
  }
}