import React from 'react'
import './list.css';
import * as grIcons from 'react-icons/gr'
import ListItems from '../listItems/ListItems';
import {useRef} from 'react'
import {useState} from 'react'

function List() {

    const listRef = useRef();
    
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const handleClick = (direction)=>{
        const pos = listRef.current.getBoundingClientRect().x - 50
        setIsMoved(true)
        if(direction === 'left' && slideNumber > 0){
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${265 + pos}px)`;
        }
        if(direction === 'right' && slideNumber < 5){
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-265 + pos}px)`;
        }
    }
    return (
        <div className='list'>
            <div className='listTitle'>Continue to Watch</div>
            <div className='Wrapper'>
                <grIcons.GrPrevious className='sliderArrow left' onClick={()=> handleClick('left')} style={{display: !isMoved && 'none' }}/>
                <div className='contain' ref={listRef}>
                    <ListItems index= {0}/>
                    <ListItems index= {1}/>
                    <ListItems index= {2}/>
                    <ListItems index= {3}/>
                    <ListItems index= {4}/>
                    <ListItems index= {5}/>
                    <ListItems index= {6}/>
                    <ListItems index= {7}/>
                    <ListItems index= {8}/>
                    <ListItems index= {9}/>
                </div>
                <grIcons.GrNext className='sliderArrow right' onClick={()=> handleClick('right')}/>
            </div>
        </div>
    )
}

export default List
