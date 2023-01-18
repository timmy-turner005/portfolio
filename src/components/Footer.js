import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <LinkedInIcon onClick={() => window.open("https://www.linkedin.com/in/timilehin-ajiboye-ba631a233/", "_blank")} />
            <TwitterIcon onClick={() => window.open("https://twitter.com/talented005", "_blank")} />
            <GitHubIcon onClick={() => window.open("https://github.com/timmy-turner005", "_blank")} />
            <InstagramIcon onClick={() => window.open("https://www.instagram.com/talented_005/", "_blank")} />
        </div>
        <p>&copy; 2023 timmycodes</p>
    </div>
    
  )
}

export default Footer;