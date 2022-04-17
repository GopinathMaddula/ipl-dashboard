import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {name, id, imgUrl} = eachTeam

  return (
    <Link to={`/team-matches/${id}`} className="link-container">
      <li className="list-container">
        <img src={imgUrl} alt={name} className="team-logo" />
        <h1 className="team-heading">{name}</h1>
      </li>
    </Link>
  )
}
export default TeamCard
