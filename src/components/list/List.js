import React from 'react'
import './list.css';
import * as grIcons from 'react-icons/gr'
import ListItems from '../listItems/ListItems';
import {useRef} from 'react'
import {useState} from 'react'

function List({genreTitle, secCont, valueId}) {

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
            <div className='listTitle'>{genreTitle}</div>
            <div className='Wrapper'>
                <grIcons.GrPrevious className='sliderArrow left' onClick={()=> handleClick('left')} style={{display: !isMoved && 'none' }}/>
                <div className='contain' ref={listRef}>
                   
                    <ListItems index= {0} dImg={secCont[0]} valueGet={valueId}/>
                    <ListItems index= {1} dImg={secCont[1]} valueGet={valueId}/>
                    <ListItems index= {2} dImg={secCont[2]} valueGet={valueId}/>
                    <ListItems index= {3} dImg={secCont[3]} valueGet={valueId}/>
                    <ListItems index= {4} dImg={secCont[4]} valueGet={valueId}/>
                    <ListItems index= {5} dImg={secCont[5]} valueGet={valueId}/>
                    <ListItems index= {6} dImg={secCont[6]} valueGet={valueId}/>
                    <ListItems index= {7} dImg={secCont[7]} valueGet={valueId}/>
                    <ListItems index= {8} dImg={secCont[8]} valueGet={valueId}/>
                    <ListItems index= {9} dImg={secCont[9]} valueGet={valueId}/>
                    <ListItems index= {10} dImg={secCont[10]} valueGet={valueId}/>
                    <ListItems index= {11} dImg={secCont[11]} valueGet={valueId}/>
                    <ListItems index= {12} dImg={secCont[12]} valueGet={valueId}/>
                    <ListItems index= {13} dImg={secCont[13]} valueGet={valueId}/>
                </div>
                <grIcons.GrNext className='sliderArrow right' onClick={()=> handleClick('right')}/>
            </div>
        </div>
    )
}

export default List
