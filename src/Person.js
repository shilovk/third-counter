import React, { Component } from "react";

class Person extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      firstName: "Unknown",
      lastName: "Unknown"
    }
  }
  
  setField(name, e){
    this.setState({
      [name]: e.target.value
    });
  }
  
  render() {
    return (
      <div>
        <ul>
          <li>Firstname: {this.state.firstName}</li>
          <li>Lastname: {this.state.lastName}</li>
        </ul>
        <label>Firstname</label>
        <input
          onChange={(e) => this.setField("firstName", e)}
          value={this.state.firstName}
        />
        <label>Lastname</label>
        <input
          onChange={(e) => this.setField("lastName", e)}
          value={this.state.lastName}
        />
      </div>
    );
  }
}

export default Person;
