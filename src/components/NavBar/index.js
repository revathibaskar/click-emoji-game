import './index.css'

const NavBar = props => {
  const {isGameProgress, currentScore, topScore} = props
  return (
    <nav className="nav-bg">
      <div className="left-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="emoji-heading">Emoji Game</h1>
      </div>
      {isGameProgress && (
        <div className="right-card">
          <p className="score-style">Score: {currentScore}</p>
          <p className="score-style">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
