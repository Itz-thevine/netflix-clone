import React from 'react'
import * as aiIcons from 'react-icons/ai'
import './watch.css'

function Watch() {
    return (
        <div className='watch'>
            <div className='back'>
                <aiIcons.AiFillHome/>
                <span>Home</span>
            </div>
            <video className='video' autoPlay muted progress controls src='https://ak.picdn.net/shutterstock/videos/1054727690/preview/stock-footage-beautiful-summer-morning-in-the-forest-sun-rays-break-through-the-foliage-of-magnificent-green.mp4'/>
        </div>
    )
}

export default Watch
