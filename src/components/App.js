import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import Create from './create'
import Post from './post'
import Nav from './navbar'
import ApiClient from '../apiClient'

class Chatroom extends Component {
  constructor() {
    super();
    this.state = {
      allPosts: [],
      publishedPosts: []
    }
    this.apiClient = new ApiClient()
  }

  fetchAllFilms = async () => {
    let films = await this.apiClient.getFilms();
    this.setState({allPosts: films.data, publishedPosts: films.data})
  }

  // componentDidMount fetch events
  componentDidMount() {
    this.fetchAllFilms()
  }

  addNewPost = async ( postObj ) => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
    let date = dd + "/" + mm + "/" + yyyy;
    let newFilm = {...postObj, likes: 0, dislikes: 0, date}
    await this.apiClient.addFilm(newFilm)
    this.fetchAllFilms()
  }

  handleReactions = async (reaction, id) => {
    let filmToUpdate = this.state.allPosts.find(post => post._id === id)
    if(reaction === "like") {
      filmToUpdate.likes += 1
    } else {
      filmToUpdate.dislikes += 1
    }
    await this.apiClient.updateFilmReactions(id, filmToUpdate);
    this.fetchAllFilms()
  }

  filterPosts = (event) => {
    event.preventDefault()
    let genre = event.currentTarget.genre.value;
    let streamingSite = event.currentTarget.streaming_site.value
    let filteredPosts = []
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
        return post.genre === genre && post.streaming_site === streamingSite
      })
      this.setState({
        publishedPosts: filteredPosts
      })
    }
  }

  render() {
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