import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";

function Projects() {
  return (
    <div className='project'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2022' iconStyle={{background: "#ffa500", color: "#fff"}} icon={<WorkIcon />}>
          <h3 className='vertical-timeline-element-title'>Team Allocation App</h3>
          <h4>
            <a href='https://timmy-turner-teamallocation.netlify.app/' target="_blank">Click to review</a>
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' date='2022' iconStyle={{background: "#ffa500", color: "#fff"}} icon={<WorkIcon />}>
          <h3 className='vertical-timeline-element-title'>TodoList App</h3>
          <h4>
            <a href='https://timmy-turner-todo-app.netlify.app/' target="_blank">Click to review</a>
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' date='2022' iconStyle={{background: "#ffa500", color: "#fff"}} icon={<WorkIcon />}>
          <h3 className='vertical-timeline-element-title'>Calculator</h3>
          <h4>
            <a href='https://timmy-turner-calculator.netlify.app/' target="_blank">Click to review</a>
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' date='2022' iconStyle={{background: "#ffa500", color: "#fff"}} icon={<WorkIcon />}>
          <h3 className='vertical-timeline-element-title'>Tribute Page</h3>
          <h4>
            <a href='https://timmy-turner-tribute-page.netlify.app/' target="_blank">Click to review</a>
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' date='2022' iconStyle={{background: "#ffa500", color: "#fff"}} icon={<WorkIcon />}>
          <h3 className='vertical-timeline-element-title'>Other Projects</h3>
          <h4>
            <a href='https://github.com/timmy-turner005?tab=repositories' target="_blank">Click to review</a>
          </h4>
          
        </VerticalTimelineElement>

      </VerticalTimeline>
      
    </div>
  )
}

export default Projects;