import React, { Component } from 'react';
import data from "../resumeData.json";

class Resume extends Component {
  render() {

    if (data) {
      var skillmessage1 = data.resume.skillmessage1;
      var skillmessage2 = data.resume.skillmessage2;
      var skillmessage3 = data.resume.skillmessage3;

      var education = data.resume.education.map(function (education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p></div>
      })
      var work = data.resume.work.map(function (work) {
        return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description}</p>
        </div>
      })


      return (
        <>
        <section id="resume">

          <div className="row education">
            <div className="three columns header-col">
              <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  {education}
                </div>
              </div>
            </div>
          </div>


          <div className="row work">

            <div className="three columns header-col">
              <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {work}
            </div>
          </div>



          <div className="row skill">

            <div className="three columns header-col">
              <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

              <h1 className="text-center">{skillmessage1}</h1>
              <div className="skills-section">
                <div className="frontEnd-Icons">
                  <img src="https://img.icons8.com/color/70/000000/javascript.png" alt="javascript-icon" />
                  <img src="https://img.icons8.com/color/70/000000/html-5.png" alt="html-icon" />
                  <img src="https://img.icons8.com/color/70/000000/css3.png" alt="css-icon" />
                  <img src="https://img.icons8.com/color/70/000000/json--v1.png" alt="json-icon" />
                  <img src="https://img.icons8.com/color/70/000000/react-native.png" alt="react-icon" />
                  <img src="https://img.icons8.com/color/70/000000/bootstrap.png" alt="bootstrap-icon" />
                  <img src="https://img.icons8.com/color/70/000000/api.png" alt="api-icon" />
                  <img src="https://img.icons8.com/ios-filled/70/000000/jquery.png" alt="jquery" />
                </div>
              </div>


              <h1 className="text-center">{skillmessage2}</h1>
              <div className="skills-section">
                <div className="backEnd-Icons">
                  <img src="https://img.icons8.com/color/70/000000/nodejs.png" alt="node-icon" />
                  <img src="https://img.icons8.com/color/70/000000/mongodb.png" alt="mongodb" />
                  <img src="https://img.icons8.com/color/70/000000/sql.png" alt="sql-icon" />
                  <img src="https://img.icons8.com/color/70/000000/npm.png" alt="npm-icon" />
                  <img src="https://img.icons8.com/color/70/000000/graphql.png" alt="graphql" />
                </div>
              </div>


              <h1 className="text-center">{skillmessage3}</h1>
              <div className="skills-section">
                <div className="devops-Icons">
                  <img src="https://img.icons8.com/color/70/000000/git.png" alt="git-icon" />
                  <img src="https://img.icons8.com/color/70/000000/visual-studio-code-2019.png" alt="vs-icon" />
                  <img src="https://img.icons8.com/color/70/000000/github--v1.png" alt="github" />
                  <img src="https://img.icons8.com/color/70/000000/heroku.png" alt="heroku" />
                </div>
              </div>



            </div>

          </div>
        </section>
   </>
      );
    }
  }
};

  export default Resume;
