import React from 'react'
import comment from '../../assets/comment-alt-solid.svg'
import pen from '../../assets/pen-solid.svg'
import blacklogo from '../../assets/blacklogo.svg'

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow blog</h4>
        <div className="right-sidebar-div-1">
          <div className="right-sidebar-div-2">
            <img src={pen} alt="pen" width="18px" />
            <p>Observability is key to the future of software</p>
          </div>
          <div className="right-sidebar-div-2">
            <img src={pen} alt="pen" width="18px" />
            <p>Podcast 374: How valuable is your screen name?</p>
          </div>
        </div>
        <h4>Featured on Meta</h4>
        <div className="right-sidebar-div-1">
          <div className="right-sidebar-div-2">
            <img src={comment} alt="comment" width="18px" />
            <p>Review queue workflows-Final release../</p>
          </div>
          <div className="right-sidebar-div-2">
            <img src={comment} alt="comment" width="18px" />
            <p>Podcast 374: How valuable is your screen name?</p>
          </div>
          <div className="right-sidebar-div-2">
            <img src={blacklogo} alt="logo" width="18px" />
            <p>Outdated Answers: accepted answer is now unpinned on Stack Overflow </p>
          </div>
        </div>
        <h4>Hot Meta posts</h4>
        <div className="right-sidebar-div-1">
          <div className="right-sidebar-div-2">
            <p>38</p>
            <p>Why was this span flag declined. Yet the question marked as spam</p>
          </div>
          <div className="right-sidebar-div-2">
            <p>20</p>
            <p>What is the best course of the action ...</p>
          </div>
          <div className="right-sidebar-div-2">
            <p>14</p>
            <p>Outdated Answers: accepted answer is now unpinned on Stack Overflow </p>
          </div>
        </div>
    </div>
  )
}

export default Widget