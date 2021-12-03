import React, { Component } from 'react';
import PetNav from './components/pet-nav'
import PictureBox from './components/picture-box'
import './App.css';
import Aboutbox from './components/about-box'
import Post from './components/post.js'
const App = () => {
  const component = new React.Component()

  component.render = () => {
    return(
      <div className="App">
        <PetNav/>
        <div class="container">
          <div class="row">
          <PictureBox/>
          <Aboutbox/>
          </div>
          <div class="row">
           <Post/> 
          </div>
        </div>
      </div>
    )
  }

  return component
}

export default App;
