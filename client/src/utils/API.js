import axios from "axios"; 
// GEt books
export default {
  getBooks: function(){
    return axios.get("/api/books"); 
  }, 
// Get book by ID
  getBook: function(id) {
    return axios.get("/api/books" + id); 
  }, 
// Delete book 
  deleteBook: function(id) {
    return axios.delete("/api/books" + id); 
  }, 
}; 