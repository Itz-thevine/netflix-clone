import React from 'react'
import './listItems.css'
import * as faIcons from 'react-icons/fa'
import * as aiIcons from 'react-icons/ai'
import {useState} from 'react'

function ListItems({index, dImg, valueGet}) {
    // set the session for the new movie
    const newMovieDisplay = () => {
        const value = index + valueGet
        localStorage.setItem('view', JSON.stringify(value))
        window.location.reload(false);
        window.scrollTo(0, 0)
    }

    const [isHovered, setIsHovered] = useState(false)

    const vid = '<iframe width="1090" height="613" src="https://www.youtube.com/embed/UT5F9AXjwhg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    // console.log(index);
    return (
        <div className='listItems'  onClick={newMovieDisplay} style={{left: isHovered && index * 254 - 50 + index * 5 }}  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
            <img src={dImg.poster}></img>
            <div className='posterName'>{dImg.name}</div>
            {isHovered && (
            <>
            <div className='icons'>
                <faIcons.FaPlay className='ico'/>
                <aiIcons.AiOutlineAppstoreAdd className='ico'/>
                <aiIcons.AiOutlineLike className='ico'/>
                <aiIcons.AiOutlineDislike className='ico'/>
            </div>
            <div className='infoTop'>
                <span>{dImg.availableForOffline}</span>
                <span className='limit'>{dImg.contentRating}</span>
                <span>{dImg.releasedDate}</span>
            </div>
            <div className='description'>
                <span>
                {dImg.description}
                </span>
            </div>
            <div className='genre'>{dImg.genre}</div>
            </>
            )}
        </div>
    )
}

export default ListItems
