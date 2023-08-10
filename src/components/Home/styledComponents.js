import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TopSection = styled.div`
  width: 80%;
  background-color: transparent;
  border: 2px solid #ffffff;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4px;
  margin-top: 40px;
`

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 10%;
  margin-left: 10px;
`

export const OptionText = styled.h1`
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
  font-family: 'sans serif';
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  width: 10%;
  border: none;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
`

export const ScoreText = styled.p`
  font-weight: bold;
  font-size: 27px;
  color: #223a5f;
  font-family: 'sans serif';
`
export const Score = styled.p`
  font-weight: bold;
  font-size: 23px;
  color: #223a5f;
  font-family: 'Roboto';
`

export const GameCardContainer = styled.ul`
  width: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
`
export const RulesImage = styled.img`
  height: 100px;
  width: 100px;
`
