
import React from 'react';
import Card from 'react-bootstrap/Card';

export class MovieItem extends React.Component{
    render(){
        return(
            <div>
    

        <Card>
  <Card.Header>{this.props.movie.Title}</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">

      <footer className="blockquote-footer">
      <img src = {this.props.movie.Poster} height = "200" width = "300" ></img>
      <p>{this.props.movie.Year}</p>

      </footer>
    </blockquote>
  </Card.Body>
</Card>
             </div>
        );
    }
} 