import React, {Component} from 'react'
import axios from 'axios'
import Profile from './Profile'
import Repo from './Repo'

class Search extends Component {

    constructor(){
        super()
        this.state = {
          user: [],
          repos:[]
        }
        this.handleChange = this.handleChange.bind(this);
      }
    
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    
      getUser = (event) => {
        
        const user = this.state.value
        event.preventDefault()
        
        
        axios.get(`https://api.github.com/users/${user}`)
        .then(({ data })=> {
            this.setState({user: data})
        })

        axios.get(`https://api.github.com/users/${user}/repos`)
        .then(({ data })=> {
            this.setState({repos: data})
        })
      }

      renderProfile = () => {
        const { user, repos } = this.state
        return(

            <div className="row">
              <div className="col-6 col-md-4"> <Profile user={ user }/></div>
               <div className="col-12 col-sm-6 col-md-8"> {repos.map(repo => <Repo key={repo.name} repo={repo}/>) }</div>
            </div>
        )

      }
    render(){
        return (
        <div>
            <form className="input-text" onSubmit={this.getUser}>
            <input id="user" onChange={this.handleChange} type="text" className="Search-Input" />
            <button className="searchButton"  type="submit">
                <img src="../../img/search-icon.png" className="Search-Icon"/>
            </button>
           </form>
           {this.state.user.length !== 0 ? this.renderProfile() : null}  
        </div>
        )
         
    }
}

export default Search