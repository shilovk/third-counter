import React, { Component, Fragment } from "react";

class EventListener extends Component {
  constructor(props) {
    super(props);
    
    this.state = {eventType: "Unknown"};
    this.update = this.update.bind(this);
  }
  
  update(e) {
    this.setState({
      eventType: e.type
    });
  }
  
  render() {
    return (
      <Fragment>
        <h1>{this.state.eventType}</h1>
        <textarea
          style={{ border: "1px solid #000" }}
          onFocus={this.update}
          onBlur={this.update}
          onChange={this.update}
          onPaste={this.update}
          onCopy={this.update}
          onCut={this.update}
          onTouchStart={this.update}
          onTouchMove={this.update}
          onTouchEnd={this.update}
        />
      </Fragment>
    );
  }
};

export default EventListener;
