import React from 'react'
import './RightSidebar.css'

const WidgetTag = () => {

  const tags=['C', 'C++', 'Java', 'python', 'Ruby', 'HTML', 'CSS', 'Javascript', 'React', 'Angular' ]
  return (
    <div className='widget-tags'>
      <h4>Watched Tags</h4>
      <div className="widget-tags-div">
        {
          tags.map((tag) => (
            <p key={tag}> {tag}</p>
          ))
        }
      </div>

    </div>
  )
}

export default WidgetTag