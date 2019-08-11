import React,{ Component } from 'react';
import { SearchForm } from './components/SearchForm';
import { Nav } from './components/Nav';
import { PhotoContainer } from './components/PhotoContainer';
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";
import { endPoint } from './components/config'
import './index.css';

class App extends Component {


  state = {
    photos: [],
    title: 'Loading...',
  }

  handleResponse = (response) => {
    return response.json()
      .then(json => {
        if (response.ok) {
          return json
        } else {
          return Promise.reject(json)
        }
      })
  }

  componentDidMount = () => {
    this.getImages()
  }

  getImages = (tags) => {

    this.setState({
      title:"Loading...."
    });

    let url;
    if(tags){
      url =  `${endPoint}&method=flickr.photos.search&tags=` + tags;
    } else {
      url = `${endPoint}&method=flickr.photos.getRecent`;
      tags = 'Recent'
    }

    fetch(url)
    .then(this.handleResponse)
    .then(data => {
      this.setState({
        photos: data.photos.photo,
        title:tags
      });
    })
    .catch(error => console.log('Error is', error));
  }

  render(){
    return (
      <Router>
        <div className="App">
            <SearchForm getImages={this.getImages} />
            <Nav getImages={this.getImages} />
            <Switch>
              <Route exact path="/" render={() =>
              <PhotoContainer photos={this.state.photos} title={this.state.title} />
                } />
              <Route path="/search/:tag" render={() => 
              <PhotoContainer photos={this.state.photos} title={this.state.title} />
              }/> 
            </Switch>
          </div>
      </Router>
    );
  }
  
}

export default App;
