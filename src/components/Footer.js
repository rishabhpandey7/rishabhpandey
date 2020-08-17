import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">Made with ❤️ by <a href="https://www.linkedin.com/in/rishabh-pandey-624755149/" target="_blank"> Rishabh Pandey</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
