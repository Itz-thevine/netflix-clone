import React from 'react'
import './homeOther.css';
import PropTypes from 'prop-types';


export default function HomeOther({ children }) {
  return(
    <div className="homeOther">
      {children}
    </div>
  )
}

// HomeOther.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.element), 
//     PropTypes.element.isRequired
//   ]),
//   title: PropTypes.string.isRequired,
// }
