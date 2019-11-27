import React, {Component} from "react"; 
import {Link} from "react-router-dom"; 
import API from "../utils/API"; 
import {Row, Col} from "../components/Grid"; 
import {List} from "../components/List"; 
import DeleteBtn from "../components/DeleteBtn";

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
      <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>Saved Books</h1>
          </Jumbotron>
          {this.state.books.length ? (
            <List>
              {this.state.books.map(book => (
                <ListItem key={book._id}>
                  <strong>
                    {book.title} by {book.author}
                  </strong>
                  <DeleteBtn onClick={() => this.deleteBooks(book._id)} />
                </ListItem>
              ))}
            </List>
          ): (
            <h3>No books saved.</h3>
          )}
        </Col>
    ); 
  }
}

export default saved; 