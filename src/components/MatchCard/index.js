import './index.css'

const MatchCard = props => {
  const {eachTeam} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = eachTeam

  return (
    <li className="match-card-list">
      <img
        src={competingTeamLogo}
        alt={competingTeam}
        className="competing-team-logo"
      />
      <h1 className="competing-team-heading">{competingTeam}</h1>
      <p className="result">{result}</p>
      <p className="won-lost">{matchStatus}</p>
    </li>
  )
}

export default MatchCard
