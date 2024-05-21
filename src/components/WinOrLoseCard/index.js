import './index.css'

const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imageUrl = isWon ? WON_IMAGE : LOSE_IMAGE
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="result-container">
      <img src={imageUrl} className="won-loss-img" alt="win or loss" />
      <div className="result-card">
        <h1>{gameStatus}</h1>
        <p>{scoreLabel}</p>
        <p className="score-wl-style">{score}/12</p>
        <button type="button" className="play-btn" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
    </div>
  )
}
export default WinOrLoseCard
