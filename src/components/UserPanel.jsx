import React from 'react'
import './../components/styles/UserPanel.css';

export default function UserPanel(props) {
    const showFavoriteMovies = (favoriteMovie) =>{
        return(
        <div className="col-md-3">
            <img className="favMovieImg" src={favoriteMovie.img} />
        </div>
        )
    }

    return (
        <div>
            <h2>My favorites movies</h2>
            <div className="row">
                {props.user.favoriteMovies.map(showFavoriteMovies)}
            </div>
        </div>
    )
}
