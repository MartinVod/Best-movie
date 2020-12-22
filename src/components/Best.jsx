import React from 'react'
import {Link} from 'react-router-dom';
import './../components/styles/Best.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Best(props) {

    const numToStars = (rate)=>{
        let starArray=[];
        for(let i=1;i <= 5; i++) {
            if (rate-1 >= 0){
                starArray.push(<FontAwesomeIcon icon={faStar} color="gold" />);
            }
            else{
                starArray.push(<FontAwesomeIcon icon={faStar} color="white" />);
            }
            rate--;
        }
        return starArray;
    }



    const showMovie =(movie)=>{//return movie object presented in a Div
            
            let rateArr = numToStars(avrRate(movie.rates));
            return(<div className='col-md-4 bestRatedMovie' key={movie.id}>
                        <div className="topMovie-grid">
                            <div className="topMovie-image">
                                <Link to='/' className='links' onClick={()=>{props.setChosenMovie(movie)}}>
                                    <img className="pic-1" src={movie.img} />
                                </Link>
                                    <ul className="topMovie-links">
                                        <li className="links-list"><a className="topMovie-link" data-tip="Add to Wishlist" ><button className="topMovie-link" onClick={()=>{props.addFavoriteMovie(props.user,movie)}}> &#10084; </button> </a></li>
                                        <Link to='/' className='links' onClick={()=>{props.setChosenMovie(movie); props.goMain(); }}>
                                        <li className="links-list"><button className="topMovie-link" data-tip="More Info"> &#161; </button></li>
                                        </Link>
                                        <li className="links-list">
                                        
                                        <a className='topMovie-link' href={'https://www.youtube.com/watch?v='+movie.trailer} data-tip="Watch trailer" target="blank"><button className="topMovie-link"> &#9654; </button>  </a></li>
                                    </ul>
                                
                            </div>
                            <div className="topMovie-content">
                                <ul className="starRate">
                                    {rateArr.map((star)=><span className='stars'>{star}</span>)}
                                </ul>
                                <h3 className="topMovie-name">{movie.name}</h3>
                                <div className="topMovie-year">{movie.year}</div>
                            </div>
                        </div>
                    </div>)
    }

    const avrRate = (ratings)=>{

        let sum=0;
        for(let i=0; i<ratings.length;i++){
            sum+=ratings[i];
        }

        return sum/ratings.length;
    }

    return (

        <div className='container-fluid bestCon'>
        <div className='row'>
        <h1>Best rated of all times</h1></div>
        <div className='row bestRated'>
            {props.bests.map(showMovie)}
        </div>
        </div>
    )
}
