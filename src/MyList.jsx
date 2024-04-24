import React from "react";
import { useList } from "./ListContext";


function MyList() {

  const { myList } = useList()

  const cutOverview = (overview, maxLength) => {
    if (overview.length <= maxLength) {
      return overview;
    }
    return overview.substr(0, maxLength) + "...";
  };
  
  return (
    <>
    <h1>My List</h1>
    <div className="row" id="myList">
        {myList.map((film, index) => (
        <div key={index} className="card">
          <div className='image'>
            <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt="" />
          </div>
          <div className="info">
            <p className='title'>{film.title || film.original_name}</p>
            <p className='date'>{film.release_date || film.first_air_date}</p>
            <p className='resume'>{cutOverview (film.overview, 300)}</p>
            <div className="buttons">
              <button className='watch'>Watch</button>
              {/* <button className='add' onClick={() => handleClick(film)}>Add to List</button> */}
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default MyList;