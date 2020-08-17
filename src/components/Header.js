import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img src="https://i.imgur.com/8wEJCaSb.jpg?1" style={{"width": "100%",
        "height": "auto",
        "borderRadius": "100%"
}}></img>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Rishabh Pandey</h1>
        <p>
          Computer Science major at UMass Amherst. Passionate about Space Technology, World Geography and Open Source.
          <br />
          I grab every chance I get to travel, learn and create.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
           About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work 
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Resume
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
