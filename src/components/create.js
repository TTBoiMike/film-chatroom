import React, { Component } from "react";

class Create extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      filmTitle: "",
      description: "",
    };
  }

  handleChange = (event) => {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addpost(this.state)
    this.setState({
        name: "",
        filmTitle: "",
        description: "",
    })
  };

  render() {
    return (
      <form
        className="d-flex flex-column"
        onChange={(e) => this.handleChange(e)} onSubmit={(e) => this.handleSubmit(e)}>
        <input type="text" name="name" id="name" placeholder="Name"></input>
        <input
          type="text"
          name="filmTitle"
          id="filmTitle"
          placeholder="Film title"
        ></input>
        <textarea
          id="description"
          name="description"
          placeholder="About the film"
          maxlength="150"
        ></textarea>
        <button className="btn btn-primary" type="submit">
          Post
        </button>
      </form>
    );
  }
}
export default Create;
