import React from 'react'
import PropTypes from 'prop-types'


export default function Header(props) {
    return (
        
    
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
       <div className="container-fluid">
    
        <a class="navbar-brand" href="#">{props.title}</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              </ul>
              </div>
          
            
            
  </div>
</nav>  
        
    )
}
Header.defaultProps = {
  title: "Your Title Here"
}
Header.propTypes = {
  title: PropTypes.string
}