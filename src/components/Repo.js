import React from 'react'

const Repo = ({ repo }) => (
<div>
    
    <div className="repo-name"><span>{repo.name}</span></div>
    <div className="repo-description">{repo.description}</div>
    <div className="star-count">
    <img className="star-icon" src="../../img/star-icon.png"/>
        <span>
          {repo.stargazers_count}
        </span>
    </div>
   
</div>
)
export default Repo