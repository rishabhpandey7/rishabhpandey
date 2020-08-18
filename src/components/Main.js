import PropTypes from 'prop-types'
import React from 'react'


class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src="https://i.imgur.com/Bz2aFIB.jpg" alt="" />
          </span>
          <p>
            Thank you for stopping by! My name is Rishabh Pandey. I'm currently a junior Computer Science major at the College of Information and Computer Sciences, UMass Amherst.

I am a keen learner and a motivated student that is excited by new technologies. My interests include multi-platform Mobile and Web App development, Algorithms & Data Structures, and UI/UX Design. I also like graphic designing and video-editing and 
I'm proficient in the entire Adobe suite and other tools such as Sketch and Sony Vegas Pro. My hobbies include watching and playing soccer, reading science-fiction, and playing video-games.
          </p>
          <p>
            I encourage you to check out my projects and/or resume. And if you like me or my work, or would like to collaborate on anything, please feel free to ping me at any of my contact links, I'd really appreciate it!
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          Work Experience
          <ul>
          <li>Software Engineering Intern at <a href="https://ethicalidentity.com/" target="_blank">Ethical Identity</a></li>
          <li>Co-Founder, Front-End Developer at Lendvie</li>
          <li>Communications Assistant at <a href="https://www.umass.edu/graduate/" target="_blank">UMass Graduate School</a></li>
          <li>Intern at STICHIO</li>
          </ul>
          Some personal projects I have worked on can be found here:
          <ul>
          <li><a href="https://github.com/rishabhpandey7/TMG-The-Movie-Guide" target="_blank">TMG-The Movie Guide</a></li>
          <li><a href="https://github.com/rishabhpandey7/label-tester" target="_blank">Label Tester</a></li>
          <li><a href="https://github.com/rishabhpandey7/Image-Recognizer" target="_blank">Image-Recognizer</a></li>
          <li><a href="https://github.com/rishabhpandey7/beatTheCrowd" target="_blank">Beat The Crowds @ UMass</a></li>
          </ul>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Resume</h2>
          <p>
            I am always open to collaborations with impactful work. Feel free to reach out if you want to work together :)
          </p>
          <div style={{"display":"flex", "justifyContent":"space-around"}}>
              <a href="https://drive.google.com/file/d/1ts4knWl5AMhxO7r04EzDEEsY7KGAHyJG/view?usp=sharing" target="_blank">Resume</a>
            </div>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="mailto:rishabhpande@umass.edu" type="text/plain">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/rishabh-pandey-624755149/"
                target="_blank"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/rishabh.pandey63" target="_blank" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/rishabh.pandey7/" target="_blank" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/rishabhpandey7"
                target="_blank"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
