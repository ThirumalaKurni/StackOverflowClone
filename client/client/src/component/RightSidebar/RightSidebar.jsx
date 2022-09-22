import React from 'react'
import './RightSidebar.css'
import Widget from './Widget'
import WidgetTag from './WidgetTag'

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <Widget />
      <WidgetTag />
    </div>
  )
}

export default RightSidebar