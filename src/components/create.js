import React, { Component } from "react";

class Create extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      filmTitle: "",
      rating: 10,
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
      rating: 0,
      description: "",
      genre: ""
    })
  };

  render() {
    return (
      <div className="form-container p-4">
        <h2 className="mb-3">Tell us about a film...</h2>
        <form className="d-flex flex-column" onChange={(e) => this.handleChange(e)} onSubmit={(e) => this.handleSubmit(e)}>
          <input className="mb-3 rounded form-control" type="text" name="name" id="name" placeholder="Name" required></input>
          <input className="mb-3 rounded form-control" type="text" name="filmTitle" id="filmTitle" placeholder="Film title" required ></input>
          <select className="mb-3 form-control" name="genre" id="genre">
              <option value="">--Select Genre--</option>
              <option value="Adventure">Adventure</option>
              <option value="Action">Action</option>
              <option value="Childrens">Childrens</option>
              <option value="Comedy">Comedy</option>
              <option value="Crime">Crime</option>
              <option value="Drama">Drama</option>
              <option value="Horror">Horror</option>
              <option value="Romance">Romance</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Thriller">Thriller</option>
          </select>
          <label className="font-weight-bold" for="rating">Your rating - {this.state.rating} {this.state.rating > 1 ? "stars" : "star"}</label>
          <input className="mb-3 rounded form-control" type="range" id="rating" name="rating" min="1" max="10" step="1"/>
          <textarea className="mb-3 rounded form-control" rows="3" id="description" name="description" placeholder="About the film" maxLength="75" required ></textarea>
          <button className="btn btn-warning text-light font-weight-bold" type="submit">
            Post
          </button>
        </form>
      </div>
    );
  }
}
export default Create;
