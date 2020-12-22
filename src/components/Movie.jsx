import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import './../components/styles/Movie.css';

export default function Movie(props) {

    const [rateText,setRateText] = useState('');

    const starSelect = (e)=>{
            switch(e.target.id.charAt(0)){
                case '1':
                    setRateText('poor');
                    break;
                case '2':
                    setRateText('fair');
                    break;
                case '3':
                    setRateText('good');
                    break;
                case '4':
                    setRateText('Very Good');
                    break;
                case '5':
                    setRateText('Excellent!');
            }
            for(let i=1;i<=5;i++){
                if(parseInt(e.target.id.charAt(0)) >= i){
                    document.getElementById(i+'Star').style.color = 'gold';
                }
                else{
                    document.getElementById(i+'Star').style.color = 'white';
                }
            }
    }

    const starNull = (e)=>{
        for(let i=1;i<=5;i++){
                document.getElementById(i+'Star').style.color = 'white';
        }
    }

    return (
        <div className='mainDiv'>
                <h3>{props.movie.name}</h3>
                <img src={props.movie.img} style={{height: '200px', width: '200px'}} />
                <p>{props.movie.desc}</p>
                
                <span className='align-self-end'>Avarage rate: {props.avrRate(props.movie.rates)}</span> 
                
                <br />
                <p className='form-inline'>
                
                    <Link to='/' className='links'><button onMouseOut={starNull} onMouseMove={starSelect} id='1Star' name='1rate' className='form-control-plaintext starUtf' onClick={(e)=>{props.addRate(parseInt(e.target.id.charAt(0)), props.movie.id, props.movies)}}> &#9733; </button></Link>
                    <Link to='/' className='links'><button onMouseOut={starNull} onMouseMove={starSelect} id='2Star' name='2rate' className='form-control-plaintext starUtf' onClick={(e)=>{props.addRate(parseInt(e.target.id.charAt(0)), props.movie.id, props.movies)}}> &#9733; </button></Link>
                    <Link to='/' className='links'><button onMouseOut={starNull} onMouseMove={starSelect} id='3Star' name='3rate' className='form-control-plaintext starUtf' onClick={(e)=>{props.addRate(parseInt(e.target.id.charAt(0)), props.movie.id, props.movies)}}> &#9733; </button></Link>
                    <Link to='/' className='links'><button onMouseOut={starNull} onMouseMove={starSelect} id='4Star' name='4rate' className='form-control-plaintext starUtf' onClick={(e)=>{props.addRate(parseInt(e.target.id.charAt(0)), props.movie.id, props.movies)}}> &#9733; </button></Link>
                    <Link to='/' className='links'><button onMouseOut={starNull} onMouseMove={starSelect} id='5Star' name='5rate' className='form-control-plaintext starUtf' onClick={(e)=>{props.addRate(parseInt(e.target.id.charAt(0)), props.movie.id, props.movies)}}> &#9733; </button></Link>
                    
                </p>
                <p>{rateText}</p>
        </div>
    )
}
