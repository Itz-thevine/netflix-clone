import React, { useState } from 'react';
import * as aiIcons from 'react-icons/ai'
import './featured.css';
import db from '../../db/db';

function Featured({type, mainImg, name, des, release, contentRating, nos, genre, creators, actors }) {
  const [mosValue, setMosValue] = useState(false)

  const showMos = () => {
    if (mosValue === true) {
      setMosValue(false)
    }else{
      setMosValue(true)
    }
    setIsHovered(false)
  }

  // get series or Movie
  const onloadType = type === '' ? false : type

  const  toUniqueArray = (a)=>{
    var newArr = [];
    for (var i = 0; i < a.length; i++) {
        if (newArr.indexOf(a[i]) === -1) {
            newArr.push(a[i]);
        }
    }
  return newArr;
}

  const seriesArray = []
  const moviesArray = []
  
  

  db.forEach(d =>{
    d.contentType === 'TVSeries'? seriesArray.push(d.genre): moviesArray.push(d.genre)
    d.contentType === 'TVSeries'? seriesArray.push(d.genre): moviesArray.push(d.genre)
  })

  const seriesGenre = toUniqueArray(seriesArray)
  const moviesGenre = toUniqueArray(moviesArray)

  // console.log(moviesGenre)

  // const [moviee, setMoviee] = useState(false)

  // const showMovie = () => {
  //     if (mosValue === true && type === 'Movie' ) {
  //       setMoviee(true)
  //     }else{
  //       setMoviee(false)
  //     }
  // }

  // showMovie()

  const showMovie = mosValue === true && type ==='Movie' ? true : false
  const showSeries = mosValue === true && type ==='Series' ? true : false

  // console.log(moviesArray)
  
  const [isHovered, setIsHovered] = useState(false)

  // console.log(isHovered)

  const [unique, setUnique]= useState([])
  const [topVal, setTopVal] = useState(0)
  const [red , setRed] = useState('')
  // for the side shows

  const setter = (a , i) =>{
    setIsHovered(true)
    setRed(i)

    
    const unqueGenre = []
    db.forEach(d => {
      if (d.genre === a) {
        unqueGenre.push(d.name)
      }
    })

    console.log('you click setter')


    setUnique(unqueGenre)
    if(i === 0){
      setTopVal(10)
    }else if (i === 1){
      setTopVal(60)
    }else if (i === 2){
      setTopVal(90)
    }else if (i === 3){
      setTopVal(125)
    }else if (i === 4){
      setTopVal(177)
    }else if (i === 5){
      setTopVal(200)
    }else if (i === 6){
      setTopVal(230)
    }else if (i === 7){
      setTopVal(255)
    }else if (i === 8){
      setTopVal(285)
    }else if (i === 9){
      setTopVal(300)
    }else if (i === 10){
      setTopVal(325)
    }else if (i === 11){
      setTopVal(370)
    }else if (i === 12){
      setTopVal(370)
    }else if (i === 13){
      setTopVal(370)
    }else if (i === 14){
      setTopVal(430)
    }else if (i === 15){
      setTopVal(450)
    }else if (i === 16){
      setTopVal(475)
    }else if (i === 17){
      setTopVal(530)
    }else if (i === 18){
      setTopVal(555)
    }else if (i === 19){
      setTopVal(580)
    }
  }
  
  
  
 

  const [clickee, setClickee] = useState('')
  const getUnique = (u) =>{
      db.map((d, i)=> {
         d.name === u && setClickee(i)
      })

      // console.log(clickee)
      // return false
      // if(clickee !== ''){
      //   localStorage.setItem('view', JSON.stringify(clickee))
      //   window.location.reload(false);
      //   window.scrollTo(0, 0)
      // }
      
    }

    if(clickee !== ''){
      localStorage.setItem('view', JSON.stringify(clickee))
      window.location.reload(false);
      window.scrollTo(0, 0)
    }
  

  return (
    <div className='featured'>
      
      {onloadType && (
        <div className='category'>
          <span>{type === 'Movie'? 'Movie' : 'Series'}</span>  
          {/* <select>
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
          </select> */}
          <div className='mosContainer'>
            <div>
              <div className='mos' onClick={showMos}>
                <p>Genre</p>
                <div><aiIcons.AiFillCaretDown/></div>
              </div>
              <div className='eachMovieContainer'>
                {
                  showMovie && (
                    <>{
                      moviesGenre.map((eachMovie, i) => (
                          <div key={i} ver={i}  className={red === i ? 'eachView': undefined} onClick={() => setter(eachMovie, i)} onBlur={() => setIsHovered(false)}>{eachMovie}</div>
                      ))
                    }
                    
                    </>
                  )
                }
                {
                showSeries && (
                  seriesGenre.map((eachSeries, i) => (
                      <div key={i} ver={i} className={red === i ? 'eachView': undefined} onClick={() => setter(eachSeries, i)} onBlur={() => setIsHovered(false)}>{eachSeries}</div>
                      
                  ))
                )
              }
              </div>
            </div>
            <div className={type === 'Movie'? 'unique leftMovie' : 'unique leftSeries'} style={{top: topVal}} >
                {
                  isHovered && (
                    unique.map((ui, i) => (
                      <div  key={i} onClick={()=>getUnique(ui)}>{ui}</div>
                    ))
                    
                    )
                }
            </div>
            <div className='eachSeriesContainer'>
             
            </div>
            {/* <div className='unique' style={{top: topVal}} >
                {
                  isHovered && (
                    unique.map((ui, i) => (
                      <div  key={i} >{ui}</div>
                    ))
                    
                    )
                }
            </div> */}
          </div>

          
        </div>
      )}

      <div className='featuredImage'>
        <img src={mainImg} ></img>
        <div className='bgDark' onClick={() => setIsHovered(false)}></div>
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
