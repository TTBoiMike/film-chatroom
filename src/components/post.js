import React from 'react'
import {Table} from 'react-bootstrap';
import '../App.css';
import ThumbUp from '../assets/thumbs-up-solid.svg'
import ThumbDown from '../assets/thumbs-down-solid.svg'
import appletv from '../assets/logos/appletv.png'
import bbc from '../assets/logos/bbc.png'
import channel4 from '../assets/logos/channel4.png'
import disney from '../assets/logos/disney.png'
import hbo from '../assets/logos/hbo.png'
import itv from '../assets/logos/itv.png'
import netflix from '../assets/logos/netflix.png'
import nowtv from '../assets/logos/nowtv.png'
import prime from '../assets/logos/prime.png'
import sky from '../assets/logos/sky.png'
import youtube from '../assets/logos/youtube.png'



class Post extends React.Component {

    postIcon = (channel) => {
        switch(channel) {
            case "Apple TV":
                return appletv
            case "BBC":
                return bbc
            case "Channel 4":
                return channel4
            case "Disney+":
                return disney
            case "HBO":
                return hbo
            case "ITV":
                return itv
            case "Netflix":
                return netflix
            case "Now TV":
                return nowtv
            case "Prime Video":
                return prime
            case "Sky":
                return sky
            case "Youtube":
                return youtube
            default:
                return undefined
        }
    }

    buildPostHtml = () => {
        if(this.props.posts.length === 0 && this.props.allPosts.length === 0) {
            return (<h3 className="text-muted">...loading chatroom</h3>)
        } else if (this.props.posts.length === 0) {
            return (<h3 className="text-muted">Sorry, no film or shows to see here :(</h3>)
        } else {
            return this.props.posts.map(post => {
            return (
              <tr key={post._id} className="p-3">
                  <td>
                      <img src={this.postIcon(post.streamingOn)} alt={`${post.streamingOn} logo`}/>
                      <p className="small-font">Posted by<br/><strong>{post.name}</strong></p>
                  </td>
                  <td>
                        <h3>{post.title}</h3>
                        <div>
                            <p>Genre: {post.genre} | Rating from {post.name} is <strong>{post.rating} {post.rating !== 1 ? "stars" : "star"}</strong></p>
                        </div>
                  </td>
                  <td className="reaction" id={post._id} onClick={(e) => this.props.reaction(e.target.id, e.currentTarget.id)}>
                      <p className="mb-2 text-muted"><strong>Do you like this?</strong></p>
                      <div className="mb-2 d-flex">
                          <img id="like" className="mr-2" src={ThumbUp} alt="thumb up - like"/> 
                          <p>{post.likes} {post.likes === 1 ? "like" : "likes"}</p>
                      </div>
                      <div className="d-flex"> 
                          <img id="dislike" className="mr-2" src={ThumbDown} alt="thumb down - dislike" /> 
                          <p>{post.dislikes} {post.dislikes === 1 ? "dislike" : "dislikes"}</p>
                      </div>
                  </td>
              </tr>
            )    
        })
        }
    }



    render() {
        return(
            <section className="timeline p-4">
                <Table striped responsive>
                    <tbody>
                    {this.buildPostHtml()}
                    </tbody>
                </Table>
            </section>
        )
    }
}

export default Post 