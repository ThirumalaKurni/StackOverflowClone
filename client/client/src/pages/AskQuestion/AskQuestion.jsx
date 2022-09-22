import React from 'react'
import { useState } from 'react'
import {useDispatch , useSelector } from 'react-redux'
import {useNavigate } from 'react-router-dom'

import './AskQuestion.css'
import {askQuestion } from '../../actions/question.js'

const AskQuestion = () => {

    const [questionTitle , setQuestionTitle] = useState('')
    const [questionBody , setQuestionBody] = useState('')
    const [questionTags , setQuestionTags] = useState('')

    const dispatch = useDispatch();
    const User = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate();

    const handleLetter = (e) =>{
        if(e.key === 'Enter'){
            setQuestionBody(questionBody + "\n")
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(User === null){
            alert('Please Signup or Login to ask a question ')
            navigate('/Auth')
        }

        dispatch(askQuestion({questionTitle , questionBody , questionTags , userPosted:User.result.name, userId : User?.result?._id} , navigate))
        
    }
    

    return (
        <div className='ask-question'>
            <div className="ask-ques-container">
                <h1>Ask a Public Question</h1>
                <form onSubmit = {handleSubmit}>
                    <div className="ask-form-container">
                        <label htmlFor="ask-ques-title">
                            <h4>Title</h4>
                            <p>Be specific and imagine you're asking a question to another person</p>
                            <input type="text" placeholder='e.g: Is learning react better' id='ask-ques-title' onChange = {(e) => {setQuestionTitle(e.target.value)}} />
                        </label>
                        <label htmlFor="ask-ques-body">
                            <h4>Body</h4>
                            <p>Include all the information someone would need to answer your question</p>
                            <textarea name="" id="ask-ques-body" cols="30" rows="10" onChange = {(e) => {setQuestionBody(e.target.value)}}  onKeyPress = { handleLetter }></textarea>
                        </label>
                        <label htmlFor="ask-ques-tags">
                            <h4>Tags</h4>
                            <p>Add upto 5 tags to describe what your question about</p>
                            <input type="text" placeholder='e.g: (XML React Typescript)' id='ask-ques-title' onChange = {(e) => {setQuestionTags(e.target.value)}} />
                        </label>
                    </div>
                    <input type="submit" value="Review your question"  className='review-btn'/>
                </form>
            </div>
        </div>
    )
}

export default AskQuestion
