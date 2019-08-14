import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export class Nav extends Component {

    state= {
       animals: [
       'Cape Buffalo',
       'Cone Snail',
       'Golden Poison Dart Frog',
       'Box Jellyfish',
       'Pufferfish',
       'Black Mamba',
       'Saltwater Crocodile',
       'lions',
       'monkeys',
       'birds'],
       /***********************/
       places: [
       'Preikestolen',
       'Northern Lights',
       'Waitomo Glowworm Caves',
       'Banff National Park',
       'Perito Moreno Glacier',
       'Salar de Uyuni',
       'Yosemite National Park',
       'Angel Falls',
       'Torres Del Paine',
       'The Everglades',
       'Jeita Grotto',
       'Sơn Đoòng Cave',
       'Great Barrier Reef',
       'Mount Everest',
       'Jiuzhaigou National Park',
       'Horseshoe Bend'],
       /***********************/
       musicians:[
       'Lady Gaga',
       'Beyoncé',
       'Bono',
       'Dr Dre',
       'Celine Dion',
       'Sean Combs',
       'Herb Alpert',
       'Jay-Z',
       'Paul McCartney',
       'Andrew Lloyd Webber']
    }

    randomSuggestion = (arr) => {
        const randomNum = Math.floor(Math.random() * arr.length);
        return arr[randomNum];
    }
    
    render(){
        let animals = this.randomSuggestion(this.state.animals)
        let places = this.randomSuggestion(this.state.places)
        let musicians = this.randomSuggestion(this.state.musicians)
        
        return(
            <nav className="main-nav">
                <ul>
                <li><Link to={`/search/${animals.toLowerCase()}`}
                onClick={() => this.props.getImages(animals)}>{animals}</Link></li>
                <li><Link to={`/search/${places.toLowerCase()}`} 
                onClick={() => this.props.getImages(places)}>{places}</Link></li>
                <li><Link to={`/search/${musicians.toLowerCase()}`} 
                onClick={() => this.props.getImages(musicians)}>{musicians}</Link></li>
                </ul>
            </nav>
        );
    }
}
