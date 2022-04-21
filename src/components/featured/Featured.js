import React from 'react';
import * as aiIcons from 'react-icons/ai'
import './featured.css';

function Featured({type}) {

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
            <img src='https://media-exp1.licdn.com/dms/image/C4E03AQHWzJBxnRD5RA/profile-displayphoto-shrink_800_800/0/1638644433707?e=1646870400&v=beta&t=ZU7gt65sAcRJLa-1Ax5tI1Afq1bzmOvhoQZdHTafT1Y'></img>
          </div>
          <div className='info'>
            <img src= 'https://o.remove.bg/downloads/b98292e7-41ef-456c-8dc2-e9439b29fdca/black-panther-marvel-studios-marvel-cinematic-universe-film-the-poster-title-removebg-preview.png'></img>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et nulla a nunc placerat laoreet. Donec vitae aliquet mi, 
              eu auctor magna. Nullam elementum, mi sit amet varius tristique, est metus bibendum justo, id tempus enim lorem quis dolor. 
            </span>
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
