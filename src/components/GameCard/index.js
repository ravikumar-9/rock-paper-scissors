import {ImageButton, OptionImage} from './styledComponents'

const GameCard = props => {
  const {choiceDetails, onClickOption} = props
  const {id, imageUrl, testId} = choiceDetails

  const onClickImage = () => {
    onClickOption(id, imageUrl)
  }

  return (
    <>
      <ImageButton type="button" onClick={onClickImage} data-testid={testId}>
        <OptionImage src={choiceDetails.imageUrl} alt={choiceDetails.id} />
      </ImageButton>
    </>
  )
}

export default GameCard
