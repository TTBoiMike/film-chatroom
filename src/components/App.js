import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import Create from './create'
import Post from './post'
import Nav from './navbar'
import db from '../firebase'

class Chatroom extends Component {
  constructor() {
    super();
    this.state = {
      allPosts: [],
      publishedPosts: []
    }
  }

  componentDidMount() {
    // db.collection('posts')
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
    let streamingSite = event.currentTarget.streaming_site.value
    let filteredPosts = []
    console.log(genre, streamingSite)
    if(genre === "All"  && streamingSite === "All") {
      this.setState((state) => ({
        publishedPosts: state.allPosts
      }))
    } else if (genre === "All" && streamingSite !== "All") {
      filteredPosts = this.state.allPosts.filter(post => post.streaming_site === streamingSite)
      this.setState({
        publishedPosts: filteredPosts
      })
    } else if(genre !== "All" && streamingSite === "All") {
      filteredPosts = this.state.allPosts.filter(post => post.genre === genre)
      this.setState({
        publishedPosts: filteredPosts
      })
    } else {
      filteredPosts = this.state.allPosts.filter(post => {
        return post.genre == genre && post.streaming_site == streamingSite
      })
      this.setState({
        publishedPosts: filteredPosts
      })
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Nav filterposts={this.filterPosts}/>
        <main>
          <Create addpost={this.addNewPost}/>
          <Post posts={this.state.publishedPosts} reaction={this.handleReactions}/>
        </main>
      </div>
    )
  }
}

export default Chatroom;
