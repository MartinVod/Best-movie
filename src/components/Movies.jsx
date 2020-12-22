import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import './../components/styles/Movies.css';

export default function Movies(props) {
    const [randomThree, setRandomThree] = useState([0,1,2]);

    setTimeout(()=>{
        let moviesNumber = props.movies.length;
        let likeArray = [];
        let updatedMovies = 0;
        while(updatedMovies < 3){
            let movieIndex = Math.floor(Math.random()*Math.floor(moviesNumber));
            if(likeArray.find((movieNum)=>movieNum === movieIndex) === undefined){
                likeArray.push(movieIndex);
                updatedMovies++;
            }
        }
        setRandomThree(likeArray);
    }, 60000)




    const showMovies = (movieInd)=>{
        let movie = props.movies[movieInd];
        return(<Link to='/' onClick={()=>{props.setChosenMovie(movie); props.goMain();}} className='links' key={movie.id}>
                    <div className='offeredMovies'>
                        <div className='container'>
                            <span style={{color: 'white', fontSize: '100%', textShadow: '1px 0px 4px black'}}>{movie.name+' ('+movie.year+')'}</span>
                        </div>
                        <img src={movie.icon} />
                    </div>
            </Link>)
    }



    return (
        <div>
            <h4>You might like</h4>
            {randomThree.map(showMovies)}
        </div>
    )
}
