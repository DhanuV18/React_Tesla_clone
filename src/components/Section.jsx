import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


function Section({ title, description, leftBtnText, rightBtnText, backgroundImg}) {
  
  
    
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <Fade bottom>
          <h1 className='ItemText__heading'>{title}</h1>
        </Fade>
        <Fade bottom>
          <p className='ItemText__paragraph'>{ description }</p>
        </Fade>  
      </ItemText>
      
      <Buttons>
        <ButtonGroup>
          <Fade left>
            <LeftButton>{leftBtnText}</LeftButton>
          </Fade>
          <Fade right>
            {rightBtnText &&
              <RightButton>{rightBtnText}</RightButton>}
          </Fade>

        </ButtonGroup>
            <DownArrow src='./images/down-arrow.svg' />
      </Buttons> 

      
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  background-image: ${props => `url("./images/${props.bgImage}")`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
    
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center; 
  font-size: 1.2rem;
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem; 
  @media screen and (min-width: 768px) {
    flex-direction: row;    
    margin-bottom: -1.5rem
  }
`

const LeftButton = styled.div`
  background-color:  rgba(23, 26, 32, 0.9);
  color: white;
  width: 20rem;
  padding: 0.6rem 0;
  cursor: pointer;
  border-radius: 5px;
  margin: 0.5rem 0;
@media screen and (min-width: 768px) {
    flex-direction: row;
    width: 17rem;
    margin: 0 1rem 5rem 0;
  }
`


const RightButton = styled.div`
  color: rgb(23, 26, 32);
  opacity: 0.65;
  background-color: white;
  width: 20rem;
  padding: 0.6rem 0;
  cursor: pointer;
  margin: 0.5rem 0;
  border-radius: 5px;  
@media screen and (min-width: 768px) {
    flex-direction: row;
    width: 17rem;
    margin: 0 1.2rem 5rem 1.2rem;    
  }
`

const DownArrow = styled.img`
    font-size: 0.5rem;
    height: 2rem;
    cursor: pointer;
    text-align: center;
    margin-top: 0.5rem;
    margin-bottom: 1.2rem ;
    animation: animationDown infinite 1.5s;  
@media screen and (min-width: 768px) {
  text-align: center;
  margin-top: 0;
}
`

const Buttons = styled.div`
  
`