import React, {Component} from "react"; 
import axios from "axios"; 
import {Row, Col } from "../components/Grid"; 
import SaveBtn from "../components/SaveBtn"; 

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

  handleInput = event =>{
    const { name, value} = event.target; 

    this.setState({
      [name]: value
    }); 
  }; 

  render() {
    return(
      <Container>
        <Row>

          <form>
            <Input
            value={this.state.title}
            onChange={this.state.handleInputChange}
            name="title"
            placeholder="Title (required)"
            />
            <Input
            value={this.state.author}
            onChange={this.state.handleInputChange}
            name="author"
            placeholder="Author (required"
            />
            <FormBtn
            disabled={!(this.state.author && title)}
            onClick={this.handleFormSubmit}
            >Submit search
            </FormBtn>
          </form>

        </Row>
        
      </Container>
      
    )
  }


}