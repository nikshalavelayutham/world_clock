import React from 'react';
import './Clock.css';
import moment from 'moment-timezone';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = { date: moment().tz(this.props.timezone) };
    }

    render() {
      return (
        <div id ="time-container">
          <div id="date">{this.state.date.format('DD')}</div>
          <div id="month">{this.state.date.format('MMMM')}</div>
          <div id="year">{this.state.date.format('YYYY')}</div>
          <div id="hour">{this.state.date.format('HH')}</div>
          <div id="colon">:</div>
          <div id="min">{this.state.date.format('mm')}</div>
          <div id="colon">:</div>
          <div id="sec">{this.state.date.format('ss')}</div>
        </div>
      );
    }

    componentDidMount() {
      this.timer = setInterval(
        () => { this.tick();
         },
        1000
      );
    }

    componentWillUnount() {
      clearInterval(this.timer);
    }

    tick() {
      this.setState({ date: moment().tz(this.props.timezone) });
  }
}

export default Clock;
