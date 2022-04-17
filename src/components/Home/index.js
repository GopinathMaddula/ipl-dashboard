import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsFromApi()
  }

  getTeamsFromApi = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data

    const updatedTeamsList = teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      imgUrl: eachTeam.team_image_url,
    }))

    this.setState({teamsList: updatedTeamsList, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state
    console.log(isLoading)

    return (
      <Link to="/">
        <div className="app-container">
          <div className="ipl-dash-board-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="ipl-heading">IPL Dashboard</h1>
          </div>

          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <ul className="team-card-container">
              {teamsList.map(eachTeam => (
                <TeamCard key={eachTeam.id} eachTeam={eachTeam} />
              ))}
            </ul>
          )}
        </div>
      </Link>
    )
  }
}
export default Home
