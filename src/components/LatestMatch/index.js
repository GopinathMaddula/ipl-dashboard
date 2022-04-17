import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    ManOfTheMatch,
    umpires,
  } = latestMatchDetails

  return (
    <div className="latest-details-container">
      <div className="first-box">
        <h1 className="competing-team">{competingTeam}</h1>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="result">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={competingTeam}
        className="competing-team-logo"
      />
      <div className="third-box">
        <h1 className="heading">First Innings</h1>
        <p className="description">{firstInnings}</p>
        <h1 className="heading">Second Innings</h1>
        <p className="description">{secondInnings}</p>
        <h1 className="heading">Man of The Match</h1>
        <p className="description">{ManOfTheMatch}</p>
        <h1 className="heading">Umpires</h1>
        <p className="description">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
