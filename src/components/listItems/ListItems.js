import React from 'react'
import './listItems.css'
import * as faIcons from 'react-icons/fa'
import * as aiIcons from 'react-icons/ai'
import {useState} from 'react'

function ListItems({index}) {
    const [isHovered, setIsHovered] = useState(false)

    const vid = '<iframe width="1090" height="613" src="https://www.youtube.com/embed/UT5F9AXjwhg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    // console.log(index);
    return (
        <div className='listItems' style={{left: isHovered && index * 254 - 50 + index * 5 }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
            <img src='https://media-exp1.licdn.com/dms/image/C4E03AQHWzJBxnRD5RA/profile-displayphoto-shrink_800_800/0/1638644433707?e=1646870400&v=beta&t=ZU7gt65sAcRJLa-1Ax5tI1Afq1bzmOvhoQZdHTafT1Y'></img>
            {isHovered && (
            <>
            <video className='video' autoPlay muted progress controls src='https://ak.picdn.net/shutterstock/videos/1054727690/preview/stock-footage-beautiful-summer-morning-in-the-forest-sun-rays-break-through-the-foliage-of-magnificent-green.mp4'/>
            <div className='icons'>
                <faIcons.FaPlay className='ico'/>
                <aiIcons.AiOutlineAppstoreAdd className='ico'/>
                <aiIcons.AiOutlineLike className='ico'/>
                <aiIcons.AiOutlineDislike className='ico'/>
            </div>
            <div className='infoTop'>
                <span>1 hour 14 mins</span>
                <span className='limit'>+16</span>
                <span>1999</span>
            </div>
            <div className='description'>
                <span>
                Quisque id congue velit. Curabitur sed risus non purus suscipit pellentesque et a nulla. 
                Morbi in lacinia neque, vitae pellentesque libero.
                </span>
            </div>
            <div className='genre'>Action</div>
            </>
            )}
        </div>
    )
}

export default ListItems
