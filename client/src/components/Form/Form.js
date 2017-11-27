import React, { Component } from "react";

class Form extends Component {
  state = {
    topic: "",
    start: "",
    end: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
  	return(
    <form>
      <div className="form-group">
        <label htmlfor="topic">Topic</label>
        <input
          type="string" 
          className="form-control"  
          name="topic"
          placeholder="Topic"
          onChange={this.handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlfor="start">Start Date</label>
        <input
          type="string"
          className="form-control"
          name="start"
          placeholder="Start Date"
          onChange={this.handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlfor="end">End Date</label>
        <input
          type="string"
          className="form-control"
          name="end"
          placeholder="End Date"
          onChange={this.handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-default">Submit</button>
    </form>
    )
  }
}

export default Form;