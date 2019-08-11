import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export class Nav extends Component{
    render(){
        return(
            <nav className="main-nav">
                <ul>
                <li><Link to="/search/cats" onClick={() => this.props.getImages('cats')}>Cats</Link></li>
                <li><Link to="/search/dogs" onClick={() => this.props.getImages('dogs')}>Dogs</Link></li>
                <li><Link to="/search/computers" onClick={() => this.props.getImages('computers')}>Computers</Link></li>
                </ul>
            </nav>
        );
    }
}