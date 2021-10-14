import React from 'react';
import { getMovies } from './getMovies';

class Movies extends React.Component {

    constructor() {
        super();

        this.state = {
            movies: getMovies(),
            currSearchTxt: '',
            currPage: 1,
            limit: 5
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

    sortByRatings = (e) => {
        let className = e.target.className;

        let sortedMovieArr = [];
        if (className === 'fas fa-sort-up') {
            // ascending order
            sortedMovieArr = this.state.movies.sort(function (movieObjA, movieObjB) {
                return movieObjA.dailyRentalRate - movieObjB.dailyRentalRate;
            })
        }
        else {
            // descending order
            sortedMovieArr = this.state.movies.sort(function (movieObjA, movieObjB) {
                return movieObjB.dailyRentalRate - movieObjA.dailyRentalRate;
            })
        }

        this.setState({
            movies: sortedMovieArr
        })
    }

    sortByStock = (e) => {
        let className = e.target.className;

        let sortedMovieArr = [];
        if (className === 'fas fa-sort-up') {
            // ascending order  
            sortedMovieArr = this.state.movies.sort(function (movieObjA, movieObjB) {
                return movieObjA.numberInStock - movieObjB.numberInStock;
            })
        }
        else {
            // descending order
            sortedMovieArr = this.state.movies.sort(function (movieObjA, movieObjB) {
                return movieObjB.numberInStock - movieObjA.numberInStock;
            })
        }

        this.setState({
            movies: sortedMovieArr
        })
    }

    render() {
        // console.log('render');
        let { movies, currSearchTxt, currPage, limit } = this.state; // ES6 Destructuring
        let filteredArr = [];

        if (currSearchTxt === '') {
            filteredArr = movies;
        }
        else {
            filteredArr = movies.filter(function (movieObj) {
                let title = movieObj.title.toLowerCase();
                // console.log(title);
                return title.includes(currSearchTxt.toLowerCase());
            })
        }

        // Pagination
        let si = (currPage - 1) * limit;
        let ei = si + limit - 1;

        filteredArr = filteredArr.slice(si, ei + 1);

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
                                        <th scope="col">
                                            <i onClick={this.sortByStock} style={{ cursor: 'pointer' }} className="fas fa-sort-up"></i>
                                            Stock
                                            <i onClick={this.sortByStock} style={{ cursor: 'pointer' }} className="fas fa-sort-down"></i>
                                        </th>
                                        <th scope="col">
                                            <i onClick={this.sortByRatings} style={{ cursor: 'pointer' }} className="fas fa-sort-up"></i>
                                            Rating
                                            <i onClick={this.sortByRatings} style={{ cursor: 'pointer' }} className="fas fa-sort-down"></i>
                                        </th>
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
                            <nav aria-label="...">
                                <ul className="pagination">
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item active" aria-current="page">
                                        <a className="page-link" href="#">2</a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default Movies;