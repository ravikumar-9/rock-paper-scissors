import {Component} from 'react'

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
} from './styledComponents'

class Home extends Component {
  state = {
    score: 0,
    showGameResult: false,
    yourChoiceImage: '',
    opponentChoiceImage: '',
    result: '',
  }

  onChangeGame = () => {
    this.setState({showGameResult: false})
  }

  onClickOption = (imageId, url) => {
    console.log(imageId)
    console.log(url)
    const {choicesList} = this.props

    const randomIndex = Math.floor(Math.random(choicesList.length - 1))

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
      </BgContainer>
    )
  }
}

export default Home
