import React, {useContext} from 'react';
import { MovieContext } from './MovieContext';

const Nav = () => {

const [movies, setMovies] = useContext(MovieContext);

    return(
        <div className='nav'>
            <h3>Jimmy</h3>
            <p>The List of movies: {movies.length}</p>
        </div>
    );
    }
    
    export default Nav;