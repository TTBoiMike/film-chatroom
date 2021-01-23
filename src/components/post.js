import React from 'react'
import '../App.css';
import ThumbUp from '../assets/thumbs-up-solid.svg'
import ThumbDown from '../assets/thumbs-down-solid.svg'


class Post extends React.Component {

    buildPostHtml = () => {
        return this.props.posts.map(post => {
            return (
                <article key={post.id} className="rounded bg-primary p-4">
                    <div className="d-flex justify-content-between font-weight-bold text-light">
                        <p>{post.name}</p>
                        <p>{post.date}</p>
                    </div>
                    <div className="post-body my-2">
                        <div className="bg-light p-3 rounded">
                            <h4 className="font-weight-bold">{post.filmTitle}</h4>
                            <p>{post.description}</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div id={post.id} onClick={(e) => this.props.reaction(e.target.id, e.currentTarget.id)}>
                            <img id="like" className="mr-3" src={ThumbUp} alt="thumb up" />
                            <img id="dislike" src={ThumbDown} alt="thumb down" />
                        </div>
                        <p className="text-light font-weight-bold">{post.likes} likes vs {post.dislikes} dislikes</p>
                    </div>
                </article>
            )    
        })
    }



    render() {
        return(
            <div className="timeline">
                {this.buildPostHtml()}
            </div>
        )
    }
}

export default Post 