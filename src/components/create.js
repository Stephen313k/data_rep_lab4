
import React from 'react';

export class Create extends React.Component{

    constructor(){
       
        super();

        this.onsubmit = this.onsubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this)

        this.state = {        
            Title:'',
            Year:'',
            Poster:''
        }
    }
    onChangePoster(e){
        this.setState({
            Poster: e.target.value
        })
    }

    onChangeYear(e){
        this.setState({
            Year: e.target.value
        });
    }

    onChangeTitle(e){
        this.setState({
            Title: e.target.value
        });
    }

    onsubmit(e){
        e.preventDefault();
        alert("Movie: "+this.state.Title + " " + this.state.Year + " " + this.state.Poster);
    }

    render(){
        return(
            <div className='App'>
                <form onsubmit = {this.onsubmit}>
                    <div className="form-group">
                        <label>Add movie title: </label>
                        <input type='text' 
                            className='form-control'
                            value = {this.state.Title}
                            onChange = {this.onChangeTitle}>
                        </input>
            </div>
            <div className = "form-group">
                <label>Add movie year: </label>
                <input type = 'text'
                className = 'form-control'
                value = {this.state.year}
                onChange = {this.onChangeYear}></input>
            </div>

            <div className = 'form-group'>
                <label>Movie poster </label>
                <textarea type = 'text'
                className ='form-control'
                value={this.state.Poster}
                onChange={this.onChangePoster}>
                </textarea>
            </div>
            <div className="form-group">
                <input type ='submit'
                    value='Add Movie'
                    className = 'btn btn-primary'></input>
            </div>
                </form>
             </div>
        );
    }
}