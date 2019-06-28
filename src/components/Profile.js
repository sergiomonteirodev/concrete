import React from 'react'

const Profile = ({ user }) => (

<div className="sidebar box">
    <div className='user-avatar'><img className='user-avatar' src={user.avatar_url}/></div>
    <div className='user-name'>{user.name}</div>
    <div className='user-login'>{user.login}</div>
    <div className="organization-name">
        <img className="organization-icon" src="../../img/organization-icon.png" />
        <span>{user.company}</span>
    </div>
    <div  className="location-name">
        <img className="location-icon" src="../../img/location-icon.png" />
        <span>{user.location}</span>
    </div>
    <div className="star-count">
        <img className="star-icon" src="../../img/star-icon.png" />
        <span>{user.stargazers_count}</span>
    </div>
    <div className="repositories-count">
        <img className="repositories-icon" src="../../img/repositorie-icon.png"/>
        <span>{user.public_repos}</span>

    </div>
    <div className="followers-count">
        <img className="followers-icon" src="../../img/followers-icon.png"/>
        <span>{user.followers}</span>

    </div>

</div>

)
export default Profile