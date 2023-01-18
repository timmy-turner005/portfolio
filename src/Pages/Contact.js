import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";

function Contact() {
  return (
    <div className='contact'>
        <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element--education' iconStyle={{background: "#3e497a", color: "#fff"}} icon={<PhoneIcon />}>
          <h3 className='vertical-timeline-element-title'>Phone Number</h3>
          <p>07025380728</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' iconStyle={{background: "#3e497a", color: "#fff"}} icon={<WhatsAppIcon />}>
          <h3 className='vertical-timeline-element-title'>Phone Number</h3>
          <p>09036587538</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' iconStyle={{background: "#3e497a", color: "#fff"}} icon={<EmailIcon />}>
          <h3 className='vertical-timeline-element-title'>Email</h3>
          <p>Timitalented005@gmail.com</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' iconStyle={{background: "#3e497a", color: "#fff"}} icon={<PlaceIcon />}>
          <h3 className='vertical-timeline-element-title'>Location</h3>
          <p>Lagos, Nigeria</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Contact;