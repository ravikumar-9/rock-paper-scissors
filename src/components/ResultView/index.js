import {
  ResultContainer,
  ChoicesContainer,
  ChoiceContainer,
  NameHeading,
  ChoiceImage,
  YouWonHeading,
  PlayAgainButton,
} from './styledComponents'

const ResultView = props => {
  const {result, yourChoiceImage, opponentChoiceImage, onChangeGame} = props

  const onChangeToPlayCard = () => {
    onChangeGame()
  }

  return (
    <ResultContainer>
      <ChoicesContainer>
        <ChoiceContainer>
          <NameHeading>YOU</NameHeading>
          <ChoiceImage src={yourChoiceImage} alt="your choice" />
        </ChoiceContainer>
        <ChoiceContainer>
          <NameHeading>OPPONENT</NameHeading>
          <ChoiceImage src={opponentChoiceImage} alt="opponent choice" />
        </ChoiceContainer>
      </ChoicesContainer>
      <YouWonHeading>{result}</YouWonHeading>
      <PlayAgainButton type="button" onClick={onChangeToPlayCard}>
        PLAY AGAIN
      </PlayAgainButton>
    </ResultContainer>
  )
}

export default ResultView
