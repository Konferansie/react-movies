import React, {Component} from 'react';
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends Component {
    state = {
        movies: [],
        isLoading: true
    }

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, isLoading: false}))
            .catch((err) => {
                console.error(err)
                this.setState({isLoading: false})
            })
    }

    searchMovies = (str, type = 'all') => {
        this.setState({isLoading: true})

        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, isLoading: false}))
            .catch((err) => {
                console.error(err)
                this.setState({isLoading: false})
            })
    }

    render() {
        const {movies, isLoading} = this.state

        return (
            <main className='container content'>
                <Search searchMovies={this.searchMovies}/>


                {
                    isLoading ? (
                        <Preloader/>
                    ) : (
                        <Movies movies={movies}/>
                    )
                }

            </main>
        )
    }
}

export default Main;