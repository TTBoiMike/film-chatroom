import React from 'react'

class Post extends React.Component {


    buildPostHtml = () => {
        return this.props.posts.map(post => {
            return (
                <article key={post.id}>
                    <div>
                        <p>{post.name}</p>
                        <p>{post.date}</p>
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