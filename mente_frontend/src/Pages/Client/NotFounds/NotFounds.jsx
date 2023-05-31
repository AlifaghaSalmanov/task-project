import React from 'react'

import { Link } from "react-router-dom";
import './NotFounds.scss'
const NotFounds = () => {
  return (
    <div className="error-404">
        <p className="error-title" title='404'>404</p>
        <span className="icon-404"></span>
   


        <Link to="/" className="btn error-btn">Əsas Səhifə</Link>
    </div>

  )
}

export default NotFounds