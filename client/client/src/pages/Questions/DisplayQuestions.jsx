import React from 'react'
import LeftSidebar from '../../component/LeftSidebar/LeftSidebar'
import RightSidebar from '../../component/RightSidebar/RightSidebar'
import QuestionDetails from './QuestionDetails'


const DisplayQuestions = () => {

  return (
    <div className="home-container-1">
            <LeftSidebar />
            <div className="home-container-2">
                <QuestionDetails />
                <RightSidebar />
            </div>

        </div>
  )
}

export default DisplayQuestions
