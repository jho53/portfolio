import React, { Component } from 'react'

export default class Sidebar extends Component {

  getYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{ backgroundImage: 'url(images/headshot.png)' }} />
              <h1 id="colorlib-logo"><a href="index.html">Jimmy Ho</a></h1>
              <span className="email">Jim.eho97@gmail.com</span>
              <br></br>
              <br></br>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About Me</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/jho53/" target="_blank" rel="noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/jho53" target="_blank" rel="noreferrer"><i className="icon-github"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                Inspired by <a href="https://colorlib.com" target="_blank" rel="noreferrer">Colorlib</a>
              </small></p>
              <small>
                Copyright © {this.getYear()}, All Rights Reserved
              </small>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
