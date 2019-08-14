import React,{ Component } from 'react';
import PhotoContainer from './PhotoContainer';
import { withRouter } from "react-router";

class Container extends Component {

  componentDidMount = () => {
    this.props.getImages(this.props.match.params.tag);
  }

  render(){
    return (
        <div className="container">
         {(!this.props.isLoaded)
             ? <h2>Loading....</h2>
             : <PhotoContainer 
            photos={this.props.photos} 
            title={this.props.title} />
        }
        </div>
    );
  }
}

export default withRouter(Container);
