import axios from "axios";
const BASEURL = "http://api.nytimes.com/svc/search/v2/artilesearch.json?&sort=newest";
const APIKEY = "&apikey=c3cde688433943d2833192aeb0574e2a";

export default {
  
  searchArticles: function(query) {
    const topic = `&q=${query.topic}`;
    const start = `&begin_date=${query.start}`;
    const end = `&end_date=${query.end}`;
    const query = `${topic}${start}${end}`;
    return axios.get(`${BASEURL}${query}${APIKEY}`);    
  },
  // Gets all saved articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the book with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the book with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a book to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
