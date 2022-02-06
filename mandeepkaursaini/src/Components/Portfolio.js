import React, { Component } from 'react';
import data from "../resumeData.json";

class Portfolio extends Component {
  render() {

    if(data){
      var projects = data.portfolio.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        var projectUrl = projects.url;
        var projectGit = projects.github; 

        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projectUrl} key={projects.id}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
            </a>
          </div>

          { projectGit ? <a href={projectGit} target="_blank" rel="noopener noreferrer" className="repo"><button type="button" className="deploy"><i class="fa fa-github"></i></button></a> : null }
          { projectUrl ? <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="deploy"><button type="button" className="repo"><i class="fa fa-link"></i></button></a> : null } 
        </div>
      })
    }

    return (
      <>
       <section id="portfolio">
 
       <div className="row">
 
          <div className="twelve columns collapsed">
 
             <h1>Projects</h1>
            
             <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                 {projects}
             </div>
            
 
             <div className="github text-center">View additional projects <a href="https://github.com/mandy2324">here</a></div>
           </div>
       </div>
 
      
    </section>
    </>
     );
   }
 }
 

export default Portfolio;
