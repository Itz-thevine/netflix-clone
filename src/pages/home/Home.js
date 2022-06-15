import React from 'react'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import Navbar from '../../components/navBar/Navbar'
import './home.css'
import db from '../../db/db'

export const Home = () => {
    console.log(db)
    return (
        <div className='home'>
            <Navbar/>
            <Featured type='Series'/>
            <List/>
            <List/>
            <List/>
        </div>
    )
} 
