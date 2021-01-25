import React from 'react'
import {Navbar} from 'react-bootstrap'

const Nav = (props) => {

    return (
        <>
        <Navbar className="d-flex justify-content-between bg-primary fixed-top">
          <Navbar.Brand className="text-light font-weight-bold">Film Chatroom</Navbar.Brand>
            <form class="d-flex align-items-center" onChange={(e) => props.filterposts(e)}>
            <select className="form-control mr-4" name="streaming_site" id="streaming_site">
                <option value="All">All Sites</option>
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
              <select className="form-control" name="genre" id="genre">
                  <option value="All">All Genres</option>
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
            </form>
        </Navbar>
        </>
    )
}
export default Nav