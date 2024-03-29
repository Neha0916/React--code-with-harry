import './App.css';
import LoadingBar from 'react-top-loading-bar'

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
   BrowserRouter as Router,
   Routes, 
   Route 
  } from 'react-router-dom';
export default class App extends Component {
 
// apiKey=process.env.REACT_APP_NEWS_API
apiKey='067b6b09407344599f58f8a0d85fd9a3'
state={
  progress:0
}

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <Router> {/* Use Router instead of Router */}
      <NavBar />
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
      />
      <Routes> {/* Use Routes instead of Routes */}
        <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={5} country="in" category="general" />} />
        <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={5} country="in" category="general" />} />
        <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={5} country="in" category="sports" />} />
        <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={5} country="in" category="science" />} />
        <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={5} country="in" category="entertainment" />} />
        <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={5} country="in" category="business" />} />
        <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={5} country="in" category="technology" />} />
        <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={5} country="in" category="health" />} />
      </Routes> {/* Use Routes instead of Routes */}
    </Router> 
    )
  }
}
