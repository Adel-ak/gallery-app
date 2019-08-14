import React from 'react';
import { Link } from 'react-router-dom'

export const Error = (props) => {
    let fullUrl = window.location.href
    console.log()
    return(
        <div>
            <h2>Page Not Found</h2>
            <p>Sorry but <strong>{fullUrl}</strong> does not lead to anywhere</p>
            <Link id="home-link" to="/">Back to Home</Link>
        </div>);
}