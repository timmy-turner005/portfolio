import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import React from 'react';
import "../styles/Home.css";

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Timmy</h2>
        <div className='prompt'>
          <p>A Software Developer with a passion for learning and creating</p>
          <LinkedInIcon onClick={() => window.open("https://www.linkedin.com/in/timilehin-ajiboye-ba631a233/", "_blank")} />
          <EmailIcon onClick={() => window.open("#")} />
          <GitHubIcon onClick={() => window.open("https://github.com/timmy-turner005", "_blank")} />
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='items'>
            <h2>Front-End</h2>
              <span>
                ReactJS, Javascript, Git, HTML, CSS3, Bootstrap, TailwindCSS, NPM, MaterialUI, Jquery, SASS
              </span>
          </li>
          <li className='items'>
            <h2>Languages</h2>
              <span>
                Javascript
              </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home;