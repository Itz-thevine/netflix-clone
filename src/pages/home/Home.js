import React from 'react'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import Navbar from '../../components/navBar/Navbar'
import './home.css'

export const Home = () => {
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
