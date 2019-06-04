
import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor () {
    super();
    this.state = {
      dummyData: [],
      searchText: ''
    };
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
  }


  componentDidMount() {
    localStorage.setItem('dummyDataSaved', JSON.stringify(dummyData));
    let savedData = localStorage.getItem('dummyDataSaved');
    try {
      savedData = JSON.parse(savedData);
      this.setState({ dummyData: savedData});
    } catch (err) {
      console.log('error');
    }
  }
  handleSearchTextChange(searchText) {   
    this.setState({
      searchText: searchText
    });
  }


  render () {
    //const {dummyData} = this.state;
  return (
    
    <section className="App">
      <nav>
      <SearchBar
      searchText={this.state.searchText}
          onSearchTextChange={this.handleSearchTextChange}
       />
        </nav>
        <main>
      <PostContainer
        dummyData={this.state.dummyData} 
        searchText={this.state.searchText}
      />
        </main>
      
      </section>
    
  );}
}

export default App;
