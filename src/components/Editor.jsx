import React, { Component } from 'react';
// import './Editor.css'; // Comment out this line

class Editor extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div>
        <div>
          <h3>Input</h3>
          <textarea
            onChange={this.handleChange}
            value={this.state.value}
          />
        </div>
        <div>
          <h3>Pro Note</h3>
          <div>{this.state.value}</div>
        </div>
      </div>
    );
  }
}

export default Editor;
