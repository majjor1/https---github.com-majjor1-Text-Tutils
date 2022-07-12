import React from 'react'
import PropTypes from 'prop-types'

function header(props) {
  return (
    <>
    <nav className='nave '>
        <div>
            <a href="App.js" className='logo'><img src="./" alt="" />{props.logo}</a>
        </div>
        <div>
          <ul>
            <li><a href="">{props.home}</a></li>
            <li><a href="">{props.about}</a></li>
            <li><a href="">{props.user}</a></li>
            <li><a href="">{props.contact}</a></li>
            <li><a href="">{props.help}</a></li>
          </ul>
        </div>
    </nav>
    </>
  )
}

export default header
Headers.propTypes ={
  logo: PropTypes.string,
  home: PropTypes.string,
  about: PropTypes.string,
  user: PropTypes.string,
  contact: PropTypes.string,
  help: PropTypes.string
}

Headers.defaultProps = {
  logo: "Include Logo",
  home: "Text Include",
  about: "Text Include",
  about: "Text Include",
  user: "Text Include",
  contact: "Text Include",
  help: "Text Include",
}