import React,{ Component } from 'react';
import { PhotoList } from './PhotoList';
import { NoResults } from './NoResults'

 class PhotoContainer extends Component {
    
    showResults = () => {
        if(this.props.photos.length === 0){
            return <NoResults title={this.props.title}/>
        }else{
            return this.props.photos.map(imgs => (
                <PhotoList key={imgs.id} data={imgs} />
            ));
        }

    }

    render(){
        return(
        <div className="photo-container">
            <h2>{this.props.title}</h2>
            <ul>
                {this.showResults()}
            </ul>
        </div>);
    } 
}

export default PhotoContainer;