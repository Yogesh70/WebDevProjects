import React, { Component } from 'react';
import { getMovies } from './getMovies';

class Movies extends React.Component {

    constructor() {
        super();

        this.state = {
            movies: getMovies(),
            currSearchTxt: ''
        }
    }

    handleDelete = (id) => {
        let moviesArrCopy = this.state.movies.filter((moviesObj) => {
            return moviesObj._id !== id
        })

        this.setState({
            movies: moviesArrCopy
        })
    }

    handleChange = (e) => {
        let val = e.target.value;
        console.log(val);
        this.setState({
            currSearchTxt: val
        })
    }

    render() {
        // console.log('render');
        let { movies, currSearchTxt } = this.state; // ES6 Destructuring
        let filteredArr = [];

        if (currSearchTxt === '') {
            filteredArr = movies;
        }
        else {
            filteredArr = movies.filter(function (movieObj) {
                let title = movieObj.title.toLowerCase();
                console.log(title);
                return title.includes(currSearchTxt.toLowerCase());
            })
        }

        return (
            // JSX
            <React.Fragment>
                <div className='container'>
                    <div className='row'>
                        <div className='col-3'>
                            Hello
                        </div>
                        <div className='col-9'>
                            <input value={this.state.currSearchTxt} onChange={this.handleChange} type="search"></input>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Genre</th>
                                        <th scope="col">Stock</th>
                                        <th scope="col">Rating</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        filteredArr.map((movieObj) => {
                                            return (
                                                <tr scope="row" key={movieObj._id}>
                                                    <td></td>
                                                    <td>{movieObj.title}</td>
                                                    <td>{movieObj.genre.name}</td>
                                                    <td>{movieObj.numberInStock}</td>
                                                    <td>{movieObj.dailyRentalRate}</td>
                                                    <td><button onClick={function () { this.handleDelete(movieObj._id) }.bind(this)} type="button" className="btn btn-danger">Delete</button></td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Movies;