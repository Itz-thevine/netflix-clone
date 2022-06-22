import React, { useEffect } from 'react'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import Navbar from '../../components/navBar/Navbar'
import './home.css'
import db from '../../db/db'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate();
    const token = Cookies.get('nettietoken') || ''

    const valuer = JSON.parse(localStorage.getItem('view'));
    const mos = JSON.parse(localStorage.getItem('mos'))
     

    // redirect if token is not found
    useEffect(()=>{
        if (token === '') {
            navigate('/login')
        }
    }, [])

    
    // generate random number for the display on login 
    const getRndInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min) ) + min;
    }
    let variable 

    valuer != null ? variable = valuer : variable = getRndInteger(0, 148)

    const uniqueNames = ['Section One', 'Section Two', 'Section Three', 'Section Four', 'Section Five', 'Section Six', 'Section Seven', 'Section Eight', 'Section Nine', 'Section Ten']
   

    const section0 = []
    const section10 = []
    const section20 = []
    const section30 = []
    const section40 = []
    const section50 = []
    const section60 = []
    const section70 = []
    const section80 = []
    const section90 = []
    for (let index = 0; index <= 13; index++) {
        section0.push(db[index])
    }
    for (let index = 14; index <= 27; index++) {
        section10.push(db[index])
    }
    for (let index = 28; index <= 41; index++) {
        section20.push(db[index])
    }
    for (let index = 42; index <= 55; index++) {
        section30.push(db[index])
    }
    for (let index = 56; index <= 69; index++) {
        section40.push(db[index])
    }
    for (let index = 70; index <= 83; index++) {
        section50.push(db[index])
    }
    for (let index = 84; index <= 97; index++) {
        section60.push(db[index])
    }
    for (let index = 98; index <= 111; index++) {
        section70.push(db[index])
    }
    for (let index = 112; index <= 125; index++) {
        section80.push(db[index])
    }
    for (let index = 126; index <= 139; index++) {
        section90.push(db[index])
    }

    
    return (
        <>
        {
           token === '' ? (
            <div></div>
           ):(
            <div className='home'>
                <div id='navie'></div>
                <Navbar />
                <Featured 
                    mainImg={db[variable].poster} 
                    name={db[variable].name} 
                    des={db[variable].description} 
                    nos={db[variable].numberOfSeasons} 
                    contentRating={db[variable].contentRating}
                    creators = {db[variable].creator}
                    actors= {db[variable].actors}
                    genre= {db[variable].genre}
                    type={mos}
                    textImg={db[variable].textImg}
                    release= {db[variable].releasedDate}
                />
                {
                    <>
                        <List valueId ={0} genreTitle= {uniqueNames[0]} secCont={section0}/>
                        <List valueId ={14} genreTitle= {uniqueNames[1]} secCont={section10}/>
                        <List valueId ={28} genreTitle= {uniqueNames[2]} secCont={section20}/>
                        <List valueId ={42} genreTitle= {uniqueNames[3]} secCont={section30}/>
                        <List valueId ={56} genreTitle= {uniqueNames[4]} secCont={section40}/>
                        <List valueId ={70} genreTitle= {uniqueNames[5]} secCont={section50}/>
                        {/* <List valueId ={84} genreTitle= {uniqueNames[6]} secCont={section60}/>
                        <List valueId ={98} genreTitle= {uniqueNames[7]} secCont={section70}/>
                        <List valueId ={112} genreTitle= {uniqueNames[8]} secCont={section80}/>
                        <List valueId ={126} genreTitle= {uniqueNames[9]} secCont={section90}/> */}
                    </>
                }
                
            </div>  
           )
        }
       
    </>
    )
} 
