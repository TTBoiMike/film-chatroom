import React, { Component } from "react";

class Create extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      filmTitle: "",
      rating: 10,
      description: "",
      streaming_site: ""
    };
  }

  handleChange = (event) => {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.currentTarget)
    this.props.addpost(this.state)
    this.setState({
      name: "",
      filmTitle: "",
      rating: 10,
      where_to_watch: "",
      genre: ""
    })
    event.currentTarget.name.value = ""
    event.currentTarget.filmTitle.value = ""
    event.currentTarget.genre.value = ""
    event.currentTarget.streaming_site.value = ""
  };

  render() {
    return (
      <div className="form-container p-4">
        <h2 className="mb-3 text-muted">Tell us about a film...</h2>
        <form id="create-form" className="d-flex flex-column" onChange={(e) => this.handleChange(e)} onSubmit={(e) => this.handleSubmit(e)}>
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
          <select className="mb-3 form-control" name="streaming_site" id="streaming_site">
              <option value="">--Where to watch--</option>
              <option value="Apple TV">Apple TV</option>
              <option value="BBC">BBC</option>
              <option value="Channel 4">Channel 4</option>
              <option value="Disney+">Disney+</option>
              <option value="HBO">HBO</option>
              <option value="Itv">Itv</option>
              <option value="Netflix">Netflix</option>
              <option value="Now TV">Now TV</option>
              <option value="Prime Video">Prime Video</option>
              <option value="Sky">Sky</option>
              <option value="Youtube">Youtube</option>
          </select>
          <label className="font-weight-bold text-muted" for="rating">Your rating - {this.state.rating} {this.state.rating == 1 ? "star" : "stars"}</label>
          <input className="mb-3" type="range" id="rating" name="rating" min="0" max="10"/>
          <button className="btn btn-warning text-light font-weight-bold" type="submit">
            Post
          </button>
        </form>
      </div>
    );
  }
}
export default Create;
