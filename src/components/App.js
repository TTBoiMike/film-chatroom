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
      publishedPosts: []
    }
  }

  addNewPost = ( postObj ) => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
    let date = mm + "/" + dd + "/" + yyyy;
    let id = this.state.publishedPosts.length;
    let likes = 0
    let dislikes = 0;
    let newPost = {...postObj, likes, dislikes, date, id}
    let updatedPosts = [...this.state.publishedPosts, newPost]
    this.setState ({
      publishedPosts: updatedPosts
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar bg="primary">
          <Navbar.Brand className="text-light font-weight-bold">Film Chatroom</Navbar.Brand>
        </Navbar>
        <main className="container">
          <Create addpost={this.addNewPost}/>
          <Post posts={this.state.publishedPosts}/>
        </main>
      </div>
    )
  }
}

export default Chatroom;
