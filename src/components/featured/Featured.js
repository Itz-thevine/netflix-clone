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
            <img src='https://thurrott.s3.amazonaws.com/wp-content/uploads/sites/2/2022/01/14172326/netflix-1536x864.jpg'></img>
          </div>
          <div className='info'>
            <img src= 'https://th.bing.com/th/id/R.1303a29a7b7bd0edf23b6ae40dd91973?rik=gnYs40mIlctQSw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2favengers-logo-png-avengers1-png-2943.png&ehk=%2bpt54xyYZcgRjIhuMEyOP4JqukDQx%2fDt5%2fq8k20Dej8%3d&risl=1&pid=ImgRaw&r=0'></img>
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
