import React from 'react'
// import { useState , useEffect } from 'react'
import { useLocation , useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'
import './HomeMainbar.css'
import QuestionList from './QuestionList'

const HomeMainbar = () => {

  const user = 1;
  const navigate = useNavigate();

  const location = useLocation();

  const questionsList = useSelector(state => state.questionReducer)


  // const [details,setDetails] = useState(null);
  // const getUserGeoLocation = () => {
  //   fetch("https://geolocation-db.com/json/50ad4a90-fd5e-11ec-b463-1717be8c9ff1")
  //   .then(response => response.json())
  //   .then(data => setDetails(data))
  // }


  // useEffect(() => { 
  //     getUserGeoLocation();
    
  // } ,[])

  // var questionsList = [{ 
  //       _id: 1,
  //       upVotes: 3,
  //       downVotes: 2,
  //       noOfAnswers: 2,
  //       questionTitle: "What is a function?",
  //       questionBody: "It meant to be",
  //       questionTags: ["java", "node js", "react js", "mongo db", "express js"],
  //       userPosted: "mano",
  //       userId: 1,
  //       askedOn: "jan 1",
  //       answer: [{
  //           answerBody: "Answer",
  //           userAnswered: 'kumar',
  //           answeredOn: "jan 2",
  //           userId: 2,
  //       }]
  //   },{ 
  //       _id: 2,
  //       upVotes: 3,
  //       downVotes: 2,
  //       noOfAnswers: 0,
  //       questionTitle: "What is a function?",
  //       questionBody: "It meant to be",
  //       questionTags: ["javascript", "R", "python"],
  //       userPosted: "mano",
  //       askedOn: "jan 1",
  //       userId: 1,
  //       answer: [{
  //           answerBody: "Answer",
  //           userAnswered: 'kumar',
  //           answeredOn: "jan 2",
  //           userId: 2,
  //       }]
  //   },{ 
  //       _id: 3,
  //       upVotes: 3,
  //       downVotes: 2,
  //       noOfAnswers: 0,
  //       questionTitle: "What is a function?",
  //       questionBody: "It meant to be",
  //       questionTags: ["javascript", "R", "python"],
  //       userPosted: "mano",
  //       askedOn: "jan 1",
  //       userId: 1,
  //       answer: [{
  //           answerBody: "Answer",
  //           userAnswered: 'kumar',
  //           answeredOn: "jan 2",
  //           userId: 2,
  //       }]
  // }]

  const ask = () => {
    if(user === null){
      alert('Login or Signup to ask a question')
      navigate('/Auth')
    }
    else{
      navigate('/AskQuestion')
    }
  }
  

  return (
    <div className="main-bar">
      <div className='main-bar-header'>

        {
          location.pathname === '/' ? <h1>Top Questions </h1> : <h1>All Questions</h1>

        }
        <button onClick={ask} className='ask-btn'> Ask Question</button>


      </div>

      <div>
        {
          questionsList.data === null ?
          <h1> Loading ...</h1> : 
          <>
              <p>{ questionsList.data.length } questions</p>
              
              <QuestionList questionsList={questionsList.data} />

          </>
        }
      </div>

      {/* <div className = "div-location">
        
      {
      details && (
        `${details.city} , ${details.country_name}`

      )
      }
      

      </div> */}
      
       
    </div>
  )
}

export default HomeMainbar