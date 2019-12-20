import React,{ Component } from 'react';
import SearchForm from './components/SearchForm';
import Container from './components/Container';
import { Nav } from './components/Nav';
import { Error } from './components/404';
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";
import './index.css';

const apiKey = '485d4dc0b0bda15539f537770b92b13a';
const endPoint = `https://www.flickr.com/services/rest/?api_key=${apiKey}&format=json&nojsoncallback=1&per_page=24`;


class App extends Component {

  state = {
    photos: [],
    isLoading: false,
    title: '',
    search: '',
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

  getImages = (tag) => {

    this.setState({
      isLoaded: false
    });
  
    const searchTag = tag;
    let title;
  
    let url;
    if(searchTag !== undefined){
      url =  `${endPoint}&method=flickr.photos.search&tags=` + searchTag;
      title = searchTag;
    } else {
      url = `${endPoint}&method=flickr.photos.getRecent`;
      title = 'Recent'
    }

    fetch(url)
    .then(this.handleResponse)
    .then(data => {
      this.setState({
        photos: data.photos.photo,
        title: title,
        isLoaded: true
      });
    })
    .catch(error => console.log('Error is', error));
  }

  render(){
    return (
      <Router>
        <SearchForm getImages={this.getImages} />
            <Nav getImages={this.getImages} />
          <Switch>
          <Route exact path="/" render={()=> (
            <Container
            getImages={this.getImages}
            isLoaded={this.state.isLoaded}
            photos={this.state.photos} 
            title={this.state.title} 
            />
          )} />
          <Route exact path="/search/:tag" render={()=> (
            <Container
            getImages={this.getImages}
            isLoaded={this.state.isLoaded}
            photos={this.state.photos} 
            title={this.state.title} 
            />
          )} />
          <Route component={Error}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
