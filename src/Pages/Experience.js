import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2015 - 2019' iconStyle={{background: "#3e497a", color: "#fff"}} icon={<SchoolIcon />}>
          <h3 className='vertical-timeline-element-title'>Olabisi Onabanjo University, Ago-Iwoye, Ogun State</h3>
          <p>Bachelor Of Arts, major in English</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' date='2022' iconStyle={{background: "#3e497a", color: "#fff"}} icon={<SchoolIcon />}>
          <h3 className='vertical-timeline-element-title'>Diploma Academind - Udemy</h3>
          <p>React, The complete guide course</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' date='2022' iconStyle={{background: "#3e497a", color: "#fff"}} icon={<SchoolIcon />}>
          <h3 className='vertical-timeline-element-title'>Free Code Camp</h3>
          <p>Complete Front-End Web Development Courses</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' date='2022' iconStyle={{background: "#3e497a", color: "#fff"}} icon={<SchoolIcon />}>
          <h3 className='vertical-timeline-element-title'>Sololearn</h3>
          <p>Javascript, The complete guide course</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' date='2022' iconStyle={{background: "#3e497a", color: "#fff"}} icon={<SchoolIcon />}>
          <h3 className='vertical-timeline-element-title'>Mimo App</h3>
          <p>HTML, CSS, Responsive Web Design</p>
          <h4>The complete guide course</h4>
        </VerticalTimelineElement>

      </VerticalTimeline>
      
    </div>
  )
}

export default Experience;