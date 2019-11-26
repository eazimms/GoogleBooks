import React, {Component} from "react"; 
import axios from "axios"; 
import {Row, Col } from "../components/"

class Search extends Component{
  state = {
    searchRes: [], 
    query: " ", 
    gBooks: []
  }; 

  displaySearch = data =>{
    this.setState({ gBooks: data.items}); 
  }; 
// Search books
  searchBooks = () => {
    let url = `https://googleapis.com/books/v1/volumes?q=${
      this.state.query
    }`; 
    axios
      .get(url)
      .then(res => {
        console.log(res); 

      })
      .catch(err => console.log(err)); 
  }; 


}