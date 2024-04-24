import React, { useContext } from 'react';
import { Context } from './FetchSeriesPop';
import { useList } from "./ListContext";

function ReceveurSeriesPop() {
  const { addToList } = useList()
  const donnees = useContext(Context);

  const cutOverview = (overview, maxLength) => {
    if (overview.length <= maxLength) {
      return overview;
    }
    return overview.substr(0, maxLength) + "...";
  };

  const  handleClick = (item) =>{
    addToList(item)
  }

  return (
    <div className='row'>
      {donnees && donnees.results.map(film => (
        <div key={film.id} className='card'>
          <div className='image'>
            <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt="" />
          </div>
          <div className="info">
          <p className='title'>{film.original_name}</p>
          <p className='date'>{film.first_air_date}</p>
          <p className='resume'>{cutOverview (film.overview, 300)}</p>
          <div className="buttons">
            <button className='watch'>Watch</button>
            <button className='add' onClick={() => handleClick(film)}>Add to List</button>
          </div>
          </div>
          
          </div>
      ))}
    </div>
  );
}

export default ReceveurSeriesPop;