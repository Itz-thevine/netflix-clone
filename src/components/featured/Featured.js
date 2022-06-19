import React from 'react';
import * as aiIcons from 'react-icons/ai'
import './featured.css';

function Featured({type, mainImg, name, des, release, contentRating, nos, genre, creators, actors }) {

    return (
        <div className='featured'>
          
          {type && (
            <div className='category'>
              <span>{type === 'Movie'? 'Movie' : 'Series'}</span>  
              <select>
                <option>Genre</option>
                <option value= 'adventure'>Adventure</option>
                <option value='comedy'>Comedy</option>
                <option value='crime'>Crime</option>
                <option value='fantasy'>Fantasy</option>
                <option value='historical'>Historical</option>
                <option value='horror'>Horror</option>
                <option value='romance'>Romance</option>
                <option value='sciFi'>Sci-fi</option>
                <option value='thriller'>thriller</option>
                <option value='western'>western</option>
                <option value='animation'>animation</option>
              </select>
            </div>
          )}

          <div className='featuredImage'>
            <img src={mainImg} ></img>
            <div className='bgDark'></div>
          </div>
          <div className='info'>
            <div className='mainT'>{name}</div>
            <span>
              {des} 
            </span>
            <div className='featuredInfo'>
              <p>{release} </p><p>|</p>
              <p className='featuredInfoBox'>{contentRating} </p><p>|</p>
              <p> {genre} </p>
            </div>
            <div className='button'>
              <div className='play'>
                <aiIcons.AiFillPlayCircle/>
                <span>play</span>
              </div>
              <div className='more'>
                <aiIcons.AiOutlineInfoCircle/>
                <span>Info</span>
              </div>
            </div>
          </div>
        </div>
    )
}



export default Featured
