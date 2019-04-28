import React from 'react';
import ReactDOM from 'react-dom';
import './Clock.css';
import Clock from './Clock';
import moment from 'moment-timezone';
 

class ClockDropdown extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectValue: moment.tz.guess()
       };
       this.handleChange = this.handleChange.bind(this);
    }

    render() { 
      var timezoneArray = moment.tz.names();
      var options = [];
      timezoneArray.forEach(zone => {
        options.push(<option value={zone}>{zone.replace("_", " ").replace("/", " / ")}</option>);
      });
      return (<select value={this.state.selectValue} onChange={this.handleChange}>
                {options}
            </select>);
    }

    componentDidMount() {
      ReactDOM.render(<Clock name = {this.state.selectValue} timezone = {this.state.selectValue} />,
      document.getElementById('Clock'));
    }

    handleChange(event) {
      this.setState( { selectValue: event.target.value } );
      ReactDOM.render(<Clock name = {event.target.value} timezone = {event.target.value} />,
      document.getElementById('Clock'));
    }
}

export default ClockDropdown;

