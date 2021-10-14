import React from 'react';
import axios from 'axios'

class Movies extends React.Component {

    constructor() {
        super();

        this.state = {
            movies: [],
            currSearchTxt: '',
            currPage: 1,
            limit: 4
        }
    }

    async componentDidMount() {
        console.log("Component did mount");
        let res = await axios.get('https://backend-react-movie.herokuapp.com/movies');
        // console.log(res.data.movies);
        this.setState({
            movies: res.data.movies
        })
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

    handlePageChange = (pageNumber) => {
        this.setState({
            currPage: pageNumber
        })
    }

    handleLimit = (e) => {
        let val = e.target.value;
        this.setState({
            limit: Number(val)
        })
    }

    render() {
        console.log('render');
        console.log(this.state);
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
        let noOfPage = Math.ceil(filteredArr.length / limit);
        let pageNumberArr = [];
        for (let i = 0; i < noOfPage; i++) {
            pageNumberArr.push(i + 1);
        }


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
                            <input value={this.state.currSearchTxt} onChange={this.handleChange} type="search" placeholder="Search"></input>
                            <input value={this.state.limit < filteredArr.length ? this.state.limit : filteredArr.length} onChange={this.handleLimit} min='1' max={movies.length} type="number" style={{ marginLeft: '1.5rem' }}></input>
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
                                            console.log(filteredArr);

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
                                    {
                                        pageNumberArr.map((pageNumber) => {
                                            let classStyleName = pageNumber === currPage ? "page-item active" : "page-item";
                                            return (
                                                <li onClick={() => this.handlePageChange(pageNumber)} key={pageNumber} className={classStyleName} style={{ cursor: 'pointer' }}><span className='page-link'>{pageNumber}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

// <li className="page-item"><a className="page-link" href="#">1</a></li>
// <li className="page-item active" aria-current="page">
//     <a className="page-link" href="#">2</a>
// </li>
// <li className="page-item"><a className="page-link" href="#">3</a></li>

export default Movies;