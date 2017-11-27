import React, {Component} from "react";
//import SavedArticle from "../..Utils/api.js"
import API from "../..utils/API.js"

const Article  = props =>
  <div className="well well-lg">
   <h4> {props.title} </h4>
   <p>{props.date}</p>   
   <a href={props.url} target="_blank"><button className="btn btn-default pull-right">ViewArticle</button></a>
   <button className="btn btn-primary pull-right" onclick={()=>API.SaveArticle(props)}>Save</button>
   
  </div>;

export default Article;