import React, { Component } from 'react'
import {Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import Create from './create'
import Post from './post'

class Chatroom extends Component {
  constructor() {
    super();
    this.state = {
      allPosts: [],
      publishedPosts: []
    }
  }

  addNewPost = ( postObj ) => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
    let date = dd + "/" + mm + "/" + yyyy;
    let id = this.state.publishedPosts.length;
    let likes = 0
    let dislikes = 0;
    let newPost = {...postObj, likes, dislikes, date, id}
    let updatedPosts = [...this.state.publishedPosts, newPost]
    this.setState ({
      allPosts: updatedPosts,
      publishedPosts: updatedPosts
    })
  }

  handleReactions = (reaction, id) => {
    let posts = this.state.publishedPosts
    if(reaction === "like") {
      posts[id].likes ++
    } else {
      posts[id].dislikes ++ 
    }
    this.setState({
      publishedPosts: posts
    })
  }

  filterPosts = (event) => {
    event.preventDefault()
    let genre = event.currentTarget.genre.value;
    if(genre === "All") {
      this.setState((state) => ({
        publishedPosts: state.allPosts
      }))
    } else {
      let filteredPosts = this.state.allPosts.filter(post => post.genre === genre)
      this.setState({
        publishedPosts: filteredPosts
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar className="d-flex justify-content-between bg-primary fixed-top">
          <Navbar.Brand className="text-light font-weight-bold">Film Chatroom</Navbar.Brand>
            <form class="d-flex align-items-center" onSubmit={(e) => this.filterPosts(e)}>
              <select className="form-control mr-4" name="genre" id="genre">
                  <option value="All">All Films</option>
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
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </Navbar>
        <main>
          <Create addpost={this.addNewPost}/>
          <Post posts={this.state.publishedPosts} reaction={this.handleReactions}/>
        </main>
      </div>
    )
  }
}

export default Chatroom;
