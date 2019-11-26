import React, {Component} from "react"; 
import {Link} from "react-router-dom"; 
import API from "../utils/API"; 

class Books extends Component {

  state = {
    books: [], 
    title: "", 
    author: "", 
    synopsis: "", 
    link: "", 
    image: "", 
  }; 

  componentDidMount() {
    this.loadBooks(); 
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "", })
        )
        .catch(err => console.log(err));  

  }; 

  deleteBooks = id => {
      API.deleteBook(id)
        .then(res => this.loadBooks())
        .catch(err => console.log(err)); 
  }; 

  handleInputChange = event => {
    const {name, value} = event.target; 
    this.setState({
      [name]: value
    }); 
    
  }; 

  handleFormSubmit = event => {
    event.preventDefault(); 
    if (this.state.title && this.state.author){
      API.saveBook({
        title: this.state.title, 
        author: this.state.author, 
        synopsis: this.state.synopsis

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