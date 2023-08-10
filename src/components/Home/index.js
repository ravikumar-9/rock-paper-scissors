import {Component} from 'react'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import GameCard from '../GameCard'

import ResultView from '../ResultView'

import {
  BgContainer,
  TopSection,
  OptionsContainer,
  OptionText,
  ScoreContainer,
  ScoreText,
  Score,
  GameCardContainer,
  RulesImage,
} from './styledComponents'

import './index.css'

class Home extends Component {
  state = {
    score: 0,
    showGameResult: false,
    yourChoiceImage: '',
    opponentChoiceImage: '',
    result: '',
  }

  onChangeGame = () => {
    this.setState({
      showGameResult: false,
      yourChoiceImage: '',
      opponentChoiceImage: '',
      result: '',
    })
  }

  onClickOption = (imageId, url) => {
    const {choicesList} = this.props

    const randomIndex = Math.floor(Math.random() * choicesList.length)

    const randomChoiceId = choicesList[randomIndex].id
    const randomChoiceImageUrl = choicesList[randomIndex].imageUrl

    if (imageId === randomChoiceId) {
      this.setState({
        result: 'IT IS DRAW',
        yourChoiceImage: url,
        opponentChoiceImage: randomChoiceImageUrl,
        showGameResult: true,
      })
      this.setState(prevState => ({score: prevState.score}))
    } else if (imageId === 'PAPER' && randomChoiceId === 'ROCK') {
      this.setState({
        result: 'YOU WON',
        yourChoiceImage: url,
        opponentChoiceImage: randomChoiceImageUrl,
        showGameResult: true,
      })
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (imageId === 'SCISSORS' && randomChoiceId === 'ROCK') {
      this.setState({
        result: 'YOU lOSE',
        yourChoiceImage: url,
        opponentChoiceImage: randomChoiceImageUrl,
        showGameResult: true,
      })
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (imageId === 'ROCK' && randomChoiceId === 'PAPER') {
      this.setState({
        result: 'YOU lOSE',
        yourChoiceImage: url,
        opponentChoiceImage: randomChoiceImageUrl,
        showGameResult: true,
      })
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (imageId === 'SCISSORS' && randomChoiceId === 'PAPER') {
      this.setState({
        result: 'YOU WON',
        yourChoiceImage: url,
        opponentChoiceImage: randomChoiceImageUrl,
        showGameResult: true,
      })
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (imageId === 'ROCK' && randomChoiceId === 'SCISSORS') {
      this.setState({
        result: 'YOU WON',
        yourChoiceImage: url,
        opponentChoiceImage: randomChoiceImageUrl,
        showGameResult: true,
      })
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (imageId === 'PAPER' && randomChoiceId === 'SCISSORS') {
      this.setState({
        result: 'YOU lOSE',
        yourChoiceImage: url,
        opponentChoiceImage: randomChoiceImageUrl,
        showGameResult: true,
      })
      this.setState(prevState => ({score: prevState.score - 1}))
    }
  }

  render() {
    const {choicesList} = this.props

    const {
      score,
      showGameResult,
      result,
      yourChoiceImage,
      opponentChoiceImage,
    } = this.state

    console.log(result, yourChoiceImage, opponentChoiceImage)

    return (
      <BgContainer>
        <TopSection>
          <OptionsContainer>
            <OptionText>
              ROCK
              <br />
              PAPER
              <br />
              SCISSORS
            </OptionText>
          </OptionsContainer>
          <ScoreContainer>
            <ScoreText>Score</ScoreText>
            <Score>{score}</Score>
          </ScoreContainer>
        </TopSection>
        {showGameResult ? (
          <ResultView
            result={result}
            yourChoiceImage={yourChoiceImage}
            opponentChoiceImage={opponentChoiceImage}
            onChangeGame={this.onChangeGame}
          />
        ) : (
          <GameCardContainer>
            {choicesList.map(eachChoice => (
              <GameCard
                key={eachChoice.id}
                choiceDetails={eachChoice}
                onClickOption={this.onClickOption}
              />
            ))}
          </GameCardContainer>
        )}
        <div className="popup-container">
          <Popup
            modal
            trigger={
              <button type="button" className="trigger-button">
                Rules
              </button>
            }
          >
            {close => (
              <>
                <div>
                  <button
                    type="button"
                    className="trigger-button"
                    onClick={() => close()}
                  >
                    c
                  </button>
                  <RulesImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </div>
              </>
            )}
          </Popup>
        </div>
      </BgContainer>
    )
  }
}

export default Home
