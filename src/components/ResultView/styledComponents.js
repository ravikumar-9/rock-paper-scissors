import styled from 'styled-components'

export const ResultContainer = styled.div`
  background-color: transparent;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: max-content;
  margin-top: 50px;
`
export const ChoicesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 30%;
`
export const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NameHeading = styled.h1`
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
`

export const ChoiceImage = styled.img`
  height: 70px;
  width: 90px;
`

export const YouWonHeading = styled.p`
  font-weight: bold;
  font-size: 27px;
  color: #ffffff;
`

export const PlayAgainButton = styled.button`
  background-color: #ffffff;
color:black,
font-weight:bold;
font-size:13px;
border:none;
cursor:pointer;
height:34px;
border-radius:3px;
`
