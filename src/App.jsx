import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';
import NavBar from './NavBar';
import Fournisseur from './Fournisseur';
import Receveur from './Receveur'; 
import FournMovies from './FournMovies'; 
import RecevMovies from './RecevMovies'; 
import LogIn from './LogIn';
import Register from './Register';
import FetchSeriesPop from './FetchSeriesPop';
import ReceveurSeriesPop from './ReceveurSeriesPop';
import FetchSeriesTop from './FetchSeriesTop';
import RecevSeriesTop from './RecevSeriesTop';
import MyList from './MyList';
import { ListProvider } from './ListContext';
import DeadEnd from './DeadEnd'


function App() {
  
  const [myList, setMyList] = useState([])
  
  const addToList = (item) => {
    setMyList([...myList, item])
    console.log(myList)
  }
  
  return (
    <Router>
      <ListProvider>
        <NavBar />
        <hr />  
        <Routes>
          <Route path="/" element={
          <><Fournisseur>
            <h1 className='category'>New & Popular</h1>
            <Receveur addToList={addToList} />
            </Fournisseur>
          <FournMovies>
            <h1 className='category'>Watch Again</h1>
            <RecevMovies/>
          </FournMovies> </>} />
           <Route path="/movies" element={
          <><Fournisseur>
            <h1 className='category'>New & Popular</h1>
            <Receveur />
            </Fournisseur>
          <FournMovies>
            <h1 className='category'>Watch Again</h1>
            <RecevMovies/>
          </FournMovies> </>} />
          <Route path='/series' element={
            <>
            <FetchSeriesPop>
              <h1 className='category'>Popular</h1>
              <ReceveurSeriesPop/>
            </FetchSeriesPop>
            <h1 className='category'>Top rated</h1>
            <FetchSeriesTop>
              <RecevSeriesTop/>
            </FetchSeriesTop>
            </>
          } />
          <Route path='/deadEnd' element= {<DeadEnd/>}/>
          <Route path='/mylist' element= {<MyList myList={myList}/>}/>
          <Route path="/logIn" element={<LogIn />} />
          < Route path='/register' element= {<Register/>}/>
        </Routes>
      </ListProvider>
    </Router>
  );
}

export default App;



