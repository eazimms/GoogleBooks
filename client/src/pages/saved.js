import React, {Component} from "react"; 
import {Link} from "react-router-dom"; 
import API from "../utils/API"; 

class Books extends Component {

  state = {
    books: [], 
    title: "", 
    author: "", 
    description: "", 
    link: "", 
    image: "", 
  }; 

  componentDidMount() {
    this.loadBooks(); 
  }
// Loading books. 
  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", description: "", })
        )
        .catch(err => console.log(err));  

  }; 
// Delete button to remove from DB. 
  deleteBooks = id => {
      API.deleteBook(id)
        .then(res => this.loadBooks())
        .catch(err => console.log(err)); 
  }; 
// Handling input changes
  handleInputChange = event => {
    const {name, value} = event.target; 
    this.setState({
      [name]: value
    }); 
    
  }; 
// Function to handle submit of form
  handleFormSubmit = event => {
    event.preventDefault(); 
    if (this.state.title && this.state.author){
      API.saveBook({
        title: this.state.title, 
        author: this.state.author, 
        description: this.state.description

      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err)); 
    }
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
            ></FormBtn>
          </form>

        </Row>
      </Container>
    )
  }
}