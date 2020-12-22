import './App.css';
import React,{useState} from 'react'
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter as Router,Switch , Route} from 'react-router-dom';
import Best from './components/Best';
import Movie from './components/Movie';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import UserPanel from './components/UserPanel';
import Signup from './components/Signup';
import Footer from './components/Footer';
import TitanicImg from './img/Titanic.jpg';
import TheFarewell from './img/The-Farewell.jpg';
import Casablanca from './img/Casablanca.jpg';
import HonestThief from './img/HonestThief.jpg';
import Call from './img/Call.jpg';
import TitanicIcon from './img/titanicmovieicon.png';
import CallIcon from './img/thecallmovieicon.png';
import FareWellIcon from './img/farewellicon.png';
import HonestThiefIcon from './img/honestthiefmovieicon.png';
import CasablancaIcon from './img/casablanca movie icon.png';

function App() {

  const [movies,setMovies] = useState(
    [
      {
        id: 1,
        name: 'Titanic',
        year: '1997',
     desc:"Star-crossed lovers Jack and Rose develop feelings for each other while on board an ill-fated ship, the R.M.S. Titanic.The winner of 11 Academy Awards is a little over three hours long, but with a story as compelling as this one,it will seem like no time at all.",
     img: TitanicImg,
     icon: TitanicIcon,
     trailer: 'kVrqfYjkTdQ',
     rates: [1]}
    ,

     
       {
        id: 2, 
        name: 'The Farewell',
        year: '2019',
      desc:"In her Golden Globe-winning role, Awkwafina plays Billi, a woman on a trip to China for a 'family wedding' that's actually a final goodbye to her grandmother.While there, Billi struggles to find a deeper connection to the country and tries to understand her family's decision to keep her grandmother's sickness a secret from her.",
      img: TheFarewell,
      icon: FareWellIcon,
      tailer: 'RofpAjqwMa8',
      rates: [2]}
    ,

      
        {
          id: 3,
          name: 'Casablanca',
          year: '1942',
       desc:"Set in the early years of World War II in Casablanca,Rick Blaine's (Humphrey Bogart) nightclub is an oasis for refugees despite the warnings he gets from local authorities. But things get rocky when an ex-lover and her boyfriend show up, bringing with them a challenge that Rick has to face. One of the most famous old Hollywood films of all time, Casablanca is a love story you won't forget.",
       img: Casablanca,
       icon: CasablancaIcon,
       trailer: 'BkL9l7qovsE',
       rates: [3]}
       ,

       {
         id: 4,
         name: 'Honest Thief',
         year: '2020',
         desc: 'Wanting to lead an honest life, a notorious bank robber turns himself in, only to be double-crossed by two ruthless FBI agents.',
         img: HonestThief,
         icon: HonestThiefIcon,
         trailer: 'ZUIEOMOxIDo',
         rates: [4,5,4,3,2]
       }
       ,

       {
         id: 5,
         name: 'Call',
         year: '2020',
         desc: 'Two people live in different times. Seo-Yeon lives in the present and Young-Sook lives in the past. One phone call connects the two, and their lives are changed irrevocably.',
         img: Call,
         icon: CallIcon,
         trailer: 'hxkKeniT-0Q',
         rates: [2,2,2,1]
       }
      ]);
      
      const [users, setUsers] = useState([{
        id: 1,
        username: 'dan',
        password: '1234',
        isLoggedIn: false,
        admin: true,
        favoriteMovies: [],
      }]);
      
      const [user,setUser] = useState(()=>users.find(user=>user.isLoggedIn)); //--- function that sets the logged in user
     //----------------------initalisation functions 
     
     const login = (username, password) =>{ //---user log in check
       let checkUser = users.find(user=>user.username === username && user.password === password)
       if (checkUser !== undefined){
         let updatedUsers = users;
         let ind = updatedUsers[updatedUsers.indexOf(checkUser)];
         checkUser.isLoggedIn = true;
         updatedUsers.splice(ind,1,checkUser);
         setUsers(updatedUsers);
         setUser(checkUser);
         alert('logged in succesfuly')
       }else{
         alert('one or more of the inputs are invalid');
       }
     }

     const logout = (userIn) => { //--- logging out the user
       if(userIn !== undefined){
       let updatedUsers = users;
       let ind = updatedUsers[updatedUsers.indexOf(user)];
       userIn.isLoggedIn = false;
       updatedUsers.splice(ind,1,userIn);
       setUsers(updatedUsers);
       setUser(undefined);
       }
     }

     const addUser = (credentials) => {
       credentials.isLoggedIn = true;
       credentials.favoriteMovies = [];
       let updatedUsers = users;
       updatedUsers.sort((a,b)=>a.id - b.id);
       credentials.id = updatedUsers[0].id+1;
       updatedUsers.push(credentials);
       setUsers(updatedUsers);
       setUser(credentials);
       alert('Welcome to Best Movie site!');
     }

     const addFavoriteMovie = (currentUser,movie) =>{
        if(currentUser !== undefined){
          if(currentUser.favoriteMovies.find((existingMovie)=>movie === existingMovie) !== undefined){
            alert('this movie is already in the favorites');
          }else{
            let updatedFavoriteMovies = currentUser.favoriteMovies;
            updatedFavoriteMovies.push(movie);
            setUser((prevValue)=>{return({...prevValue, favoriteMovies: updatedFavoriteMovies,})})
            alert('movie added succesfuly to your favorites');
          }
        }else{
          alert("please log in in order to add a movie to your favorites")
        }
     }
     
     const goMain = () => {
      document.getElementById("main").scrollIntoView();
     }

      const avrRate = (ratings)=>{//--------------------returns the avarage rate of movie object
        let sum=0;
        for(let i=0; i<ratings.length;i++){
            sum+=ratings[i];
        }

        return sum/ratings.length;
      }

      const highestRate = (moviesArr)=>{ // ------return the best rated movie of movie obj array
        if(moviesArr.length > 0){
          let best = moviesArr[0];
          for(let i=0;i<moviesArr.length;i++){
            if(avrRate(moviesArr[i].rates) >avrRate(best.rates)){
              best = moviesArr[i];
            }
          }
          return (best);
        }
      }

      const findTopThree = (avrRatesArr, moviesArr) =>{//---- returns array with the 3 best movies
        var topThreeArr = [];
        for(let i=0; i<3; i++) {
            topThreeArr.push({arrIndex: i, avrRate: avrRatesArr[i]});
        }
        for(let i=3; i<avrRatesArr.length; i++) {
            for(let j=0; j<3; j++) {
              if(avrRatesArr[i] > topThreeArr[j].avrRate){
                topThreeArr[j] = {arrIndex: i, avrRate: avrRatesArr[i]}
                break;
              }
            }
        }

        let bestMovies = [];
        let indexInMoviesArr;

        for(let i=0; i<topThreeArr.length; i++){
          indexInMoviesArr = topThreeArr[i].arrIndex;
          bestMovies.push(moviesArr[indexInMoviesArr]);
        }
        return bestMovies;
                
    }
    const topThree = (moviesA)=>{//preparing avarage rates array and set the top 3 movies state
      
                let avrRatesArr = [];
                let avrRate=0;
                moviesA.forEach((movie)=>{ // getting array with avr rates
                    avrRate=0;
                    movie.rates.forEach((rate,i,arr)=>{
                        avrRate = avrRate + rate;
                        if(i === arr.length-1){
                            avrRate = avrRate/arr.length;
                        }
                    })
                avrRatesArr.push(avrRate);
                });
                return findTopThree(avrRatesArr,moviesA);
                
            }

            const addRate=(rate,movieId,moviesArr)=>{ //---- adding a rate to a movie
              let theMovie = moviesArr.find((movie)=>movie.id === movieId)
              theMovie.rates.push(rate);
              setMovies(()=>{moviesArr.splice(moviesArr.indexOf(theMovie),1,chosenMovie);
                setBests(topThree(movies));
              return(moviesArr)
              })
          }

      //------------------------------------------ more states
      let topRated = highestRate(movies);
      const [chosenMovie, setChosenMovie] = useState(topRated);
      
      const [bests, setBests] = useState(topThree(movies));





  return (
    <div className="App">
      <Router>
        <Navbar user={user} logout={logout} login={login} goMain={goMain}/>
        <Header />
        <div className="container">
        <Best movies={movies} bests={bests}  setChosenMovie={setChosenMovie} addFavoriteMovie={addFavoriteMovie} user={user} goMain={goMain}/>
          <div className="row">
            <div className="col-md-9" id='main'>
              <Switch>
              <Route exact path='/' component={()=><Movie movie={chosenMovie} avrRate={avrRate} addRate={addRate} movies={movies} /> } />
              <Route exact path='/userPanel' component={()=><UserPanel user={user} />} />
              <Route exact path='/register' component={()=><Signup addUser={addUser} />} />
              </Switch>
            </div>
            <div className="col-md-3">
              <Movies movies={movies} setChosenMovie={setChosenMovie} goMain={goMain}/>
            </div>
           </div>
          </div>
           <Footer />
      </Router>
    </div>
  );
}

export default App;
