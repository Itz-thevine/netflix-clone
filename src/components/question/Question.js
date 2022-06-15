import React, { useState } from 'react'
import * as AiIcons from 'react-icons/ai'
import './question.css'

const Question = ({question, answer}) => {
    const [ques, setQues] = useState(false);

    const close =() =>{
        setQues(false)
    }
    const open =() =>{
        setQues(true)
    }
    

  return (
    <>
    <div className='ques'>
        <p className='s20'>{question}</p>  
        {
            ques === true ? (
                <div onClick={close} style={{fontSize :'30px'}}>
                    <AiIcons.AiOutlineClose/>
                </div>
            ):(
                <div onClick={open} style={{fontSize :'30px'}}>
                    <AiIcons.AiOutlinePlus/>
                </div>
            )
        }
    </div>
    {
        ques && (
            <div className='ques' style={{marginTop: '2px'}}>
                {answer}
            </div>
        )
    }
    </>
  )
}

export default Question