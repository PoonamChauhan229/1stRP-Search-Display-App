import React, { Component } from 'react'
import './App.css';
import Header from './components/Header'
import ProductDispplay from './components/ProductDispplay'
import JSON from './components/db.json'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      productData:JSON
    }
  }

  render() {
    return (
      <div className='App'>
        <Header/>
        <ProductDispplay proddata={this.state.productData}/>
      </div>
    )
  }
}
