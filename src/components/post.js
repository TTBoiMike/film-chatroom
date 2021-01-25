import React from 'react'
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
        }
    }

    buildPostHtml = () => {
        if(this.props.posts.length === 0) {
            return (<h3 className="text-muted">Sorry, no films to show :(</h3>)
        } else {
            return this.props.posts.map(post => {
            return (
                <article key={post.id} className="d-flex justify-content-between bg-secondary align-items-center text-light p-4 mb-4">
                    <section className="d-flex align-items-center">
                        <div className="d-flex align-items-center mr-4">
                            <img className="mr-2" src={this.postIcon(post.streaming_site)} />
                            <div>
                                <p>{post.name}</p>
                                <p className="small-font">{post.date}</p>
                            </div>
                        </div>
                        <div>
                            <h5 className="font-weight-bold">{post.filmTitle}</h5>
                            <div>
                                <p className="small-font">{post.genre} | Rating - {post.rating} stars </p>
                            </div>
                        </div>
                    </section>
                    <div id={post.id} onClick={(e) => this.props.reaction(e.target.id, e.currentTarget.id)}>
                        <div className="mb-2"> 
                            <img id="like" className="mr-2" src={ThumbUp} alt="thumb up - like"/> 
                            {post.likes}
                        </div>
                        <div> 
                            <img id="dislike" className="mr-2" src={ThumbDown} alt="thumb down - dislike" /> 
                            {post.dislikes}
                        </div>
                    </div>
                </article>
            )    
        })
        }
    }



    render() {
        return(
            <section className="timeline p-4">
                {this.buildPostHtml()}
            </section>
        )
    }
}

export default Post 