import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    bannerUrl: '',
    latestMatchDetails: {},
    recentMatchesList: [],
  }

  componentDidMount() {
    this.getTeamMatchesList()
  }

  getTeamMatchesList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const bannerUrl = data.team_banner_url

    const newObject = data[1]
    const newRecentList = data[2]

    const latestMatchDetails = {
      umpires: newObject.umpires,
      result: newObject.result,
      manOfTheMatch: newObject.man_of_the_match,
      id: newObject.id,
      date: newObject.date,
      venue: newObject.venue,
      competingTeam: newObject.competing_team,
      competingTeamLogo: newObject.competing_team_logo,
      firstInnings: newObject.first_innings,
      secondInnings: newObject.second_innings,
      matchStatus: newObject.match_status,
    }

    const recentMatchDetails = newRecentList.map(eachTeam => ({
      umpires: eachTeam.umpires,
      result: eachTeam.result,
      manOfTheMatch: eachTeam.man_of_the_match,
      id: eachTeam.id,
      date: eachTeam.date,
      venue: eachTeam.venue,
      competingTeam: eachTeam.competing_team,
      competingTeamLogo: eachTeam.competing_team_logo,
      firstInnings: eachTeam.first_innings,
      secondInnings: eachTeam.second_innings,
      matchStatus: eachTeam.match_status,
    }))
    this.setState({
      bannerUrl,
      latestMatchDetails,
      recentMatchesList: recentMatchDetails,
    })
  }

  render() {
    const {bannerUrl, latestMatchDetails, recentMatchesList} = this.state

    return (
      <div className="team-match-container">
        <img src={bannerUrl} alt="team banner" />
        <p className="latest-heading">Latest Matches</p>
        <LatestMatch
          latestMatchDetails={latestMatchDetails}
          key={latestMatchDetails.id}
        />
        <ul className="match-card-container">
          {recentMatchesList.map(eachTeam => (
            <MatchCard eachTeam={eachTeam} key={eachTeam.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default TeamMatches
